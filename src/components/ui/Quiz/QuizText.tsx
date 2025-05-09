import { QuizProps } from "@/types/PropsType";
import { quizData } from "@/data/data";

export default function QuizText({quizState}: QuizProps) {
    const quiz = quizData.flat()[quizState];

    return <p className="quiz-text">{quiz}</p>;
}