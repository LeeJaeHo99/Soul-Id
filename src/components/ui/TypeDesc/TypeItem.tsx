
import { personalityData } from "@/data/data";
import { TypeItemProps } from "@/types/PropsType";
import Image from "next/image";

export default function TypeItem({ active, isNext, clickNext, clickPrev }: TypeItemProps) {
    return (
        <div className="type-item-wrap">
            <div className="title">
                <h3>
                    <span className="en">
                        {personalityData[active][isNext].en}
                    </span>
                    <span className="en-full">
                        {personalityData[active][isNext].enFull}
                    </span>
                    <span className="ko">
                        ({personalityData[active][isNext].ko})
                    </span>
                </h3>
            </div>
            <div className="content-wrap">
                <Image
                    src={`/images/type/${personalityData[active][isNext].enFull}.png`}
                    alt="type-img"
                    width={360}
                    height={360}
                />
                <div className="text-wrap">
                    <div className="good">
                        <h4>장점</h4>
                        <p>- {personalityData[active][isNext].good1}</p>
                        <p>- {personalityData[active][isNext].good2}</p>
                    </div>
                    <div className="bad">
                        <h4>단점</h4>
                        <p>- {personalityData[active][isNext].bad1}</p>
                        <p>- {personalityData[active][isNext].bad2}</p>
                    </div>
                </div>
            </div>
            <div className="btn-wrap">
                {isNext ? <button onClick={clickPrev}>이전</button> : <button onClick={clickNext}>다음</button>}
            </div>
        </div>
    );
}
