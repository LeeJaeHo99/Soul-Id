"use client";

import { useEffect } from "react";
import { useResultStore, useQuizStateStore } from "@/store/useStore";

export default function QuizBtn() {
    const {SO, setSO, OP, setOP, AD, setAD, HP, setHP} = useResultStore();
    const result = {SO, OP, AD, HP};
    const {quizState, setQuizState} = useQuizStateStore();

    useEffect(() => {
        localStorage.setItem("result", JSON.stringify(result));
    }, [SO, OP, AD, HP]);

    const handleClick = (score: number) => {
        if (quizState < 5) {
            setSO(score);
        } else if (quizState >= 5 && quizState < 10) {
            setOP(score);
        } else if (quizState >= 10 && quizState < 15) {
            setAD(score);
        } else if (quizState >= 15 && quizState < 20) {
            setHP(score);
        }
    };

    const handleQuizState = () => {
        setQuizState();
    };

    return (
        <div className="quiz-btn--wrap">
            <div className="quiz-btn--wrap--item" onClick={handleQuizState}>
                <span>매우 그렇다.</span>
                <button onClick={() => handleClick(3)}></button>
            </div>
            <div className="quiz-btn--wrap--item" onClick={handleQuizState}>
                <button onClick={() => handleClick(1)}></button>
            </div>
            <div className="quiz-btn--wrap--item" onClick={handleQuizState}>
                <button onClick={() => handleClick(0)}></button>
            </div>
            <div className="quiz-btn--wrap--item" onClick={handleQuizState}>
                <button onClick={() => handleClick(-1)}></button>
            </div>
            <div className="quiz-btn--wrap--item" onClick={handleQuizState}>
                <span>매우 그렇지 않다.</span>
                <button onClick={() => handleClick(-3)}></button>
            </div>
        </div>
    );
}
