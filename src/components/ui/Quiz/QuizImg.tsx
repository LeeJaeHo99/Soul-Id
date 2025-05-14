"use client";

import { useState, useEffect } from "react";
import { quizImgData } from "@/data/data";
import Image from "next/image";
import { useResultStore, useQuizStateStore } from "@/store/useStore";

export default function QuizImg() {
    const [clickNum, setClickNum] = useState(0);
    const { setQuizState } = useQuizStateStore();
    const { SO, OP, AD, HP, setSO, setOP, setAD, setHP } = useResultStore();
    const result = {SO, OP, AD, HP};
    const handleClick = () => {
        setClickNum(clickNum + 1);
    };

    useEffect(() => {
        setQuizState();
    }, [clickNum]);

    useEffect(() => {
        localStorage.setItem("result", JSON.stringify(result));
    }, [SO, OP, AD, HP]);

    const handleClickScore = (score: number) => {
        if (clickNum === 0) {
            setSO(score);
        } else if (clickNum === 1) {
            setOP(score);
        } else if (clickNum === 2) {
            setAD(score);
        } else if (clickNum === 3) {
            setHP(score);
        }
    };

    return (
        <>
            {clickNum <= 3 && (
                <div className="quiz-img--wrap">
                    <p className="quiz-num">문제 {clickNum + 21}</p>
                    <div className="quiz-title--wrap">
                        <p>{quizImgData[clickNum].title1}</p>
                        <p>{quizImgData[clickNum].title2}</p>
                        <p>{quizImgData[clickNum].title3}</p>
                        <p>{quizImgData[clickNum].title4}</p>
                    </div>
                    <Image
                        src={`/images/quiz/${quizImgData[clickNum].code}.png`}
                        alt="quiz-img"
                        width={800}
                        height={480}
                    />
                    <div className="quiz-img--btn--wrap">
                        <button onClick={() => {handleClick(); handleClickScore(3)}}>
                            {quizImgData[clickNum].answer1}
                        </button>
                        <button onClick={() => {handleClick(); handleClickScore(-3)}}>
                            {quizImgData[clickNum].answer2}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}