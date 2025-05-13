import Image from "next/image";
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="not-found-page sectioin">
            <div className="inner column center">
                <Image src="/images/emoji/dizzy.png" alt="not-found" width={280} height={280} />
                <h2>404 Not Found</h2>
                <Link href="/">
                    <button className="button">
                        <span>Home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}