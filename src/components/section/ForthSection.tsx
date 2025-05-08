'use client';

import { motion } from 'motion/react';
import party from "party-js";
import { useEffect, useRef } from "react";

export default function ForthSection() {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        party.confetti(targetRef.current as unknown as HTMLElement, {
                            count: 60,
                            size: 1.5,
                            spread: 70,
                        });
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="sectioin forth-section">
            <div className="inner center column" ref={targetRef}>
                <motion.h4
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    우리 모두가 서로의 다름을 존중하며
                    <br />
                    더불어 행복한 하루를 살아가길 바랍니다
                </motion.h4>
            </div>
        </section>
    );
}
