'use client';

import { useState, useEffect } from "react";
import MainTitle from "@/components/ui/MainTitle";
import QuizNotice from "@/components/ui/Quiz/QuizNotice";
import Quiz from "@/components/ui/Quiz/Quiz";
import QuizResult from "@/components/ui/Quiz/QuizResult";
import QuizImg from "@/components/ui/Quiz/QuizImg";
import { useQuizStateStore } from "@/store/useStore";
export default function QuizPage() {
    const [isMounted, setIsMounted] = useState(true);
    const [isQuizNotice, setIsQuizNotice] = useState(true);
    const {quizState} = useQuizStateStore();

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(false);
            localStorage.removeItem("result");
        }, 3000);
    }, []);

    const handleQuizNotice = () => {
        setIsQuizNotice(false);
    };

    return (
        <div className="quiz-page sectioin">
            <div className="state-bar" style={{width: `${quizState * 5}%`}}></div>
            <div className="inner center column">
                {isMounted && <MainTitle top="안녕하세요" bottom="곧 검사를 시작하겠습니다." />}
                {!isMounted && isQuizNotice && <QuizNotice onClick={handleQuizNotice}/>}
                {!isMounted && !isQuizNotice && quizState <= 20 && <Quiz/>}
                {!isMounted && !isQuizNotice && quizState > 20 && <QuizImg/>}
                {/* {quizState === 20 && <QuizResult/>} */}
            </div>
        </div>
    );
}

// TODO
// 퀴즈의 마지막 문제에서 + 안되는 버그 수정
// 이미지 퀴즈 문제 생성
// 결과 페이지 생성