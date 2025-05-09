import Image from "next/image";
import { CodeDescItemProps } from "@/types/PropsType";

export default function CodeDescItem({ item }: CodeDescItemProps) {
    return (
        <div className="code-desc">
            <Image
                src={`/images/animal/${item.code}.png`}
                width={160}
                height={180}
                alt={"123"}
            />
            <h3>{item.animal}</h3>
            <p className="code">{item.code}</p>
            <p className="desc">{item.desc}</p>
        </div>
    );
}
