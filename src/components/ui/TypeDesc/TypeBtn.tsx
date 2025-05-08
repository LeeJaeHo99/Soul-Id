import { personalityData } from "@/data/data";
import { TypeBtnProps } from "@/types/PropsType";

export default function TypeBtn({ active, handleActive, resetIsNext }: TypeBtnProps) {
    return (
        <div className="type-btn-wrap">
            {personalityData.map((type, i) => (
                <div
                    className={`type-btn ${active === i && "active"}`}
                    key={i}
                    onClick={() => {
                        handleActive(i);
                        resetIsNext();
                    }}
                >
                    <span>{type[0].en}</span>
                    <span className="vs">-</span>
                    <span>{type[1].en}</span>
                </div>
            ))}
        </div>
    );
}