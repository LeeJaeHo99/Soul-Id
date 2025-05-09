"use client";

import { useResultStore } from "@/store/useStore";
import { QuizProps } from "@/types/PropsType";
export default function QuizBtn({quizState}: QuizProps) {
    const {SO, setSO, OP, setOP, AD, setAD, HP, setHP} = useResultStore();
    const result = {SO, OP, AD, HP};

    const handleClick = (score: number) => {
        localStorage.setItem("result", JSON.stringify(result));

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

    return (
        <div className="quiz-btn--wrap">
            <button onClick={() => handleClick(3)}>매우 그렇다.</button>
            <button onClick={() => handleClick(1)}>그런편이다.</button>
            <button onClick={() => handleClick(0)}>잘모르겠다.</button>
            <button onClick={() => handleClick(-1)}>그렇지 않은 편이다.</button>
            <button onClick={() => handleClick(-3)}>매우 그렇지 않다.</button>
        </div>
    );
}
