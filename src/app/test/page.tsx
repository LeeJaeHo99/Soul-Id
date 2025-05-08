'use client';

import { useState, useEffect } from "react";
import MainTitle from "@/components/ui/MainTitle";
import QuizNotice from "@/components/ui/QuizNotice";

export default function TestPage() {
    const [isMounted, setIsMounted] = useState(true);
    const [isQuizNotice, setIsQuizNotice] = useState(true);

    const handleQuizNotice = () => {
        setIsQuizNotice(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(false);
        }, 3000);
    }, []);

    return (
        <div className="test-page sectioin">
            <div className="inner center column">
                {isMounted && <MainTitle top="안녕하세요" bottom="곧 검사를 시작하겠습니다." />}
                {!isMounted && isQuizNotice && <QuizNotice onClick={handleQuizNotice}/>}
            </div>
        </div>
    );
}

// TODO 
// isQuizNotice가 false일때 검사 시작 버튼 활성화