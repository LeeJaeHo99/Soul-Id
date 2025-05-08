import Link from "next/link";
import { ButtonProps } from "@/types/PropsType";

export default function Button({ link="", text }: ButtonProps) {
    return (
        <button className={`button`}>
            <Link href={`/${link}`}>
                <span>{text}</span>
            </Link>
        </button>
    );
}
