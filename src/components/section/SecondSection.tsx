import Title from "../ui/Title";
import TypeDesc from "../ui/TypeDesc/TypeDesc";

export default function SecondSection() {
    return (
        <section className="sectioin sub-section second-section">
            <div className="inner start column">
                <Title title="구분 종류 확인하기" />
                <TypeDesc />
            </div>
        </section>
    );
}