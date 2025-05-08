import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="inner start">
                <Link href="/">
                    <h1>Soul ID</h1>
                </Link>
            </div>
        </header>
    );
}