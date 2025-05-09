export default function QuizNotice({onClick}: {onClick: () => void}) {
    return (
        <div className="quiz-notice">
            <button onClick={onClick}>X</button>
            <h2>안내사항</h2>
            <div>
                <p>지금부터 20문항으로 구성된 성격 유형 검사를 시작합니다.</p>
                <p>
                    소요 시간은 약 10분 내외이며, 솔직하게 답변해주실수록 더
                    정확한 결과를 얻을 수 있습니다.
                </p>
                <p>부담 없이, 편안한 마음으로 참여해 주세요.</p>
            </div>
        </div>
    );
}
