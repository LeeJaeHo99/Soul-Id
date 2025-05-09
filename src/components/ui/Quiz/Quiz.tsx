'use client';

import { useState } from "react";
import { QuizProps } from "@/types/PropsType";
import QuizText from "./QuizText";
import QuizBtn from "./QuizBtn";

export default function Quiz({quizState, handleQuizState}: QuizProps) {
    const [isQuizStart, setIsQuizStart] = useState(false);
    const handleQuizStart = () => {
        setIsQuizStart(true);
    }

    return (
        <div className="quiz-wrap">
            {!isQuizStart && <div className="quiz-start--btn" onClick={handleQuizStart}>검사시작</div>}
            {isQuizStart && (
                <div className="quiz-content" onClick={handleQuizState}>
                    <QuizText quizState={quizState}/>
                    <QuizBtn quizState={quizState}/>
                </div>
            )}
        </div>
    );
}