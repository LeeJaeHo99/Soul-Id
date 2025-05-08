import Title from "../ui/Title";
import TypeDesc from "../ui/TypeDesc/TypeDesc";

export default function SecondSection() {
    return (
        <section className="sectioin sub-section second-section">
            <div className="inner between column">
                <Title title="구분 종류" />
                <TypeDesc />
            </div>
        </section>
    );
}