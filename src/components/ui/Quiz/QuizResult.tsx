export default function QuizResult() {
    const {SO, OP, AD, HP} = JSON.parse(localStorage.getItem("result") || "{}");
    const result = {SO, OP, AD, HP};

    return (
        <div className="quiz-result">
            <h1>result.SO: {result.SO}</h1>
            <h1>result.OP: {result.OP}</h1>
            <h1>result.AD: {result.AD}</h1>
            <h1>result.HP: {result.HP}</h1>
        </div>
    );
}