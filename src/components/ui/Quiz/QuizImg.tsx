'use client';

import { useState } from "react";
import { quizImgData } from "@/data/data";
import { QuizProps } from "@/types/PropsType";
import Image from "next/image";

export default function QuizImg({quizState}: QuizProps) {
    console.log(quizImgData);
    const [clickNum, setClickNum] = useState(0);
    const handleClick = () => {
        setClickNum(clickNum + 1);
    }
    return (
        <div>
            <Image src={`/images/quiz/${quizImgData[clickNum].code}.png`} alt="quiz-img" width={100} height={100} />
            <button onClick={handleClick}>{clickNum}</button>
        </div>
    );
}