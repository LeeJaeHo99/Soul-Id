import { quizData } from "@/data/data";
import { useQuizStateStore } from "@/store/useStore";

export default function QuizText() {
    const {quizState} = useQuizStateStore();
    const quiz = quizData.flat()[quizState];

    return (
        <div className="quiz-text--wrap">
            <p className="quiz-num">문제 {quizState + 1}</p>
            <p className="quiz-text">{quiz}</p>
        </div>
    );
}