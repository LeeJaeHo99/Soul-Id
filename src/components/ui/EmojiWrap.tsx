"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function EmojiWrap() {
    return (
        <motion.div
            className="emoji-wrap"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <Image
                className="love"
                src="/images/emoji/love.png"
                alt="love"
                width={180}
                height={180}
            />
            <Image
                className="rainbow"
                src="/images/emoji/rainbow.png"
                alt="rainbow"
                width={280}
                height={280}
            />
            <Image
                className="ghost"
                src="/images/emoji/ghost.png"
                alt="ghost"
                width={220}
                height={220}
            />
            <Image
                className="rock"
                src="/images/emoji/rock.png"
                alt="rock"
                width={180}
                height={180}
            />
            <Image
                className="cherry"
                src="/images/emoji/cherry.png"
                alt="cherry"
                width={140}
                height={140}
            />
            <Image
                className="devil"
                src="/images/emoji/devil.png"
                alt="devil"
                width={160}
                height={160}
            />
            <Image
                className="sad"
                src="/images/emoji/sad.png"
                alt="sad"
                width={140}
                height={140}
            />
            <Image
                className="mad"
                src="/images/emoji/mad.png"
                alt="mad"
                width={140}
                height={140}
            />
        </motion.div>
    );
}
