'use client';

import { motion } from 'motion/react';
import EmojiWrap from '../ui/EmojiWrap';
import Button from '../ui/Button';

export default function MainSection() {
    return (
        <section className="sectioin main-section">
            <div className="inner between">
                <div className="title">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        당신의 솔직한 마음을 <br /> 감정해드려요
                    </motion.h2>
                    <Button link="test" text="검사하러 가기" />
                </div>
                <EmojiWrap />
            </div>
        </section>
    );
}