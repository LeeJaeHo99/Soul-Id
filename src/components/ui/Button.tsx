'use client';

import Link from "next/link";
import { ButtonProps } from "@/types/PropsType";
import { motion } from "motion/react";

export default function Button({ link="", text }: ButtonProps) {
    return (
        <motion.button
            className={`button`}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
        >
            <Link href={`/${link}`}>
                <span>{text}</span>
            </Link>
        </motion.button>
    );
}
