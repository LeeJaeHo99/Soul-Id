"use client";

import { useState, useEffect } from "react";
import { quizImgData } from "@/data/data";
import Image from "next/image";
import { useResultStore, useQuizStateStore } from "@/store/useStore";

export default function QuizImg() {
    const [clickNum, setClickNum] = useState(0);
    const { setQuizState } = useQuizStateStore();
    const { setSO, setOP, setAD, setHP } = useResultStore();
    const handleClick = () => {
        setClickNum(clickNum + 1);
    };

    useEffect(() => {
        setQuizState();
    }, [clickNum]);

    useEffect(() => {
        if(clickNum === 0){
            setSO(3);
        }else if(clickNum === 1){
            setOP(3);
        }else if(clickNum === 2){
            setAD(3);
        }else if(clickNum === 3){
            setHP(3);
        }
    }, [clickNum, setSO, setOP, setAD, setHP]);

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
                        <button onClick={handleClick}>
                            {quizImgData[clickNum].answer1}
                        </button>
                        <button onClick={handleClick}>
                            {quizImgData[clickNum].answer2}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}