import Title from "../ui/Title";
import TypeDesc from "../ui/TypeDesc/TypeDesc";

export default function SecondSection() {
    return (
        <section className="sectioin second-section">
            <div className="inner start column">
                <Title title="유형 종류 확인하기" />
                <TypeDesc />
            </div>
        </section>
    );
}