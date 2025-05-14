"use client";

import { useState } from "react";
import QuizText from "./QuizText";
import QuizBtn from "./QuizBtn";
import { useQuizStateStore } from "@/store/useStore";

export default function Quiz() {
    const [isQuizStart, setIsQuizStart] = useState(false);
    const handleQuizStart = () => {
        setIsQuizStart(true);
    };
    const { quizState, setQuizState } = useQuizStateStore();

    console.log(quizState);

    return (
        <>
            <div className={`quiz-wrap ${quizState === 20 && "none"}`}>
                {!isQuizStart && (
                    <div className="quiz-start--btn" onClick={handleQuizStart}>
                        검사시작
                    </div>
                )}
                {isQuizStart && (
                    <div className="quiz-content">
                        <QuizText />
                        <QuizBtn />
                    </div>
                )}
            </div>
            {quizState === 20 && <QuizTextDone onClick={setQuizState} />}
        </>
    );
}

function QuizTextDone({onClick}: {onClick: () => void}) {
    return (
        <div className="quiz-text--done">
            <p>
                다음은 문제와 이미지를 보시고, <br />
                자신이 느끼는 감정에 대한 답을 선택해주세요.
            </p>
            <button onClick={onClick}>다음</button>
        </div>
    );
}
