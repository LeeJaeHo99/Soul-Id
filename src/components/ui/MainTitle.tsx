'use client';

import { motion } from 'motion/react';
import { MainTitleProps } from '@/types/PropsType';

export default function MainTitle({top, bottom}: MainTitleProps) {
    return (
        <div className="main-title">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8 }}
            >
                {top}
                <br />
                {bottom}
            </motion.h2>
        </div>
    );
}