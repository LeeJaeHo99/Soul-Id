"use client";

import { useState } from "react";
import TypeBtn from "./TypeBtn";
import TypeItem from "./TypeItem";

export default function TypeDesc() {
    const [active, setActive] = useState(0);
    const handleActive = (index: number) => {
        setActive(index);
    };

    const [isNext, setIsNext] = useState(0);
    const clickNext = () => {
        setIsNext((prev) => prev + 1);
    };
    const clickPrev = () => {
        setIsNext((prev) => prev - 1);
    };
    const resetIsNext = () => {
        setIsNext(0);
    };

    return (
        <div className="type-desc">
            <TypeBtn active={active} handleActive={handleActive} resetIsNext={resetIsNext} />
            <TypeItem active={active} isNext={isNext} clickNext={clickNext} clickPrev={clickPrev} />
        </div>
    );
}