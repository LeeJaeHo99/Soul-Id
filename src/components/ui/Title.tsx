'use client';

import { motion } from "motion/react";
import { TitleProps } from "@/types/PropsType";

export default function Title({title}: TitleProps) {
    return (
        <motion.h3
        className="title-component"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.8 }}
    >
        {title}
    </motion.h3>
    );
}