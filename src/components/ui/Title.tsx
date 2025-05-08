import { TitleProps } from "@/types/PropsType";

export default function Title({title}: TitleProps) {
    return (
        <h3 className="title-component">{title}</h3>
    );
}