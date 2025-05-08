import Title from "../ui/Title";
import CodeDesc from "../ui/TypeDesc/CodeDesc";

export default function ThirdSection() {
    return (
        <section className="sectioin sub-section third-section">
            <div className="inner start column">
                <Title title="유형 종류 확인하기" />
                <CodeDesc />
            </div>
        </section>
    );
}