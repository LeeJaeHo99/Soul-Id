"use client";

import { useState } from "react";
import { soulIdData } from "@/data/data";
import CodeDescItem from "./CodeDescItem";
import Image from "next/image";

export default function CodeDesc() {
    const [view, setView] = useState(0);
    const onClickNext = () => {
        if (view === soulIdData.length - 3) return;
        setView((prev) => prev + 1);
    };
    const onClickPrev = () => {
        if (view === 0) return;
        setView((prev) => prev - 1);
    };

    return (
        <div className="code-desc--wrap">
            <div className="prev-btn" onClick={onClickPrev}>
                <Image
                    src="/icons/arrow-left.png"
                    alt="prev"
                    width={24}
                    height={24}
                />
            </div>
            <div className="item-wrap">
                <div
                    className="item-list"
                    style={{
                        transform: `translateX(-${view * 290}px)`,
                    }}
                >
                    {soulIdData.map((item) => (
                        <CodeDescItem key={item.code} item={item} />
                    ))}
                </div>
            </div>
            <div className="next-btn" onClick={onClickNext}>
                <Image
                    src="/icons/arrow-right.png"
                    alt="next"
                    width={24}
                    height={24}
                />
            </div>
        </div>
    );
}
