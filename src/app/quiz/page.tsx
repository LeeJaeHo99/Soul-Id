'use client';

import { useState, useEffect } from "react";
import MainTitle from "@/components/ui/MainTitle";
import QuizNotice from "@/components/ui/Quiz/QuizNotice";
import Quiz from "@/components/ui/Quiz/Quiz";
import QuizResult from "@/components/ui/Quiz/QuizResult";

export default function QuizPage() {
    const [isMounted, setIsMounted] = useState(true);
    const [isQuizNotice, setIsQuizNotice] = useState(true);
    const [quizState, setQuizState] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(false);
        }, 3000);
    }, []);

    const handleQuizNotice = () => {
        setIsQuizNotice(false);
    };

    const handleQuizState = () => {
        setQuizState(quizState + 1);
    };


    return (
        <div className="quiz-page sectioin">
            <div className="state-bar" style={{width: `${quizState * 5}%`}}></div>
            <div className="inner center column">
                {isMounted && <MainTitle top="안녕하세요" bottom="곧 검사를 시작하겠습니다." />}
                {!isMounted && isQuizNotice && <QuizNotice onClick={handleQuizNotice}/>}
                {!isMounted && !isQuizNotice && quizState < 20 && <Quiz quizState={quizState} handleQuizState={handleQuizState}/>}
                {quizState === 20 && <QuizResult/>}
            </div>
        </div>
    );
}

// TODO 
// isQuizNotice가 false일때 검사 시작 버튼 활성화
// 이미지 들어오자마자 로드