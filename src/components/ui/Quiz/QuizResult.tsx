"use client";

import { useState, useEffect } from "react";

export default function QuizResult() {
    const {SO, OP, AD, HP} = JSON.parse(localStorage.getItem("result") || "{}");
    const result = {SO, OP, AD, HP};
    const [result1, setResult1] = useState('');
    console.log(result1);

    useEffect(() => {
        if (result.SO > 0) {
            setResult1(prev => prev += 'S');
        }else{
            setResult1(prev => prev += 'O');
        }

        if (result.OP > 0) {
            setResult1(prev => prev += 'O');
        }else{
            setResult1(prev => prev += 'P');
        }

        if (result.AD > 0) {
            setResult1(prev => prev += 'A');
        }else{
            setResult1(prev => prev += 'D');
        }

        if (result.HP > 0) {
            setResult1(prev => prev += 'H');
        }else{
            setResult1(prev => prev += 'P');
        }
        
    }, [result1]);

    return (
        <div className="quiz-result">
            <h1>result1: {result1}</h1>
        </div>
    );
}