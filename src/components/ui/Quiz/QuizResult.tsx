"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { soulIdData } from "@/data/data";

export default function QuizResult() {
    const { SO, OP, AD, HP } = JSON.parse(
        localStorage.getItem("result") || "{}"
    );
    const result = { SO, OP, AD, HP };
    const [resultText, setResultText] = useState("");

    useEffect(() => {
        let tempResult = "";

        if (result.SO > 0) {
            tempResult += "S";
        } else {
            tempResult += "O";
        }

        if (result.OP > 0) {
            tempResult += "O";
        } else {
            tempResult += "P";
        }

        if (result.AD > 0) {
            tempResult += "A";
        } else {
            tempResult += "D";
        }

        if (result.HP > 0) {
            tempResult += "H";
        } else {
            tempResult += "P";
        }
        setResultText(tempResult);
    }, []);

    const soulId = soulIdData.find(id => id.code === resultText);
    console.log(soulId)

    return (
        <div className="quiz-result">
            <h1>당신의 Soul Id</h1>
            <h2>{soulId?.code}</h2>
            <h3>{soulId?.animal}</h3>
            <p>{soulId?.desc}</p>
            <Image
                src={`/images/animal/${resultText}.png`}
                alt="result"
                width={320}
                height={320}
            />
        </div>
    );
}
