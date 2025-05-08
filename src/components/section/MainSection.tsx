import EmojiWrap from '../ui/EmojiWrap';
import Button from '../ui/Button';

export default function MainSection() {
    return (
        <section className="sectioin main-section">
            <div className="inner between">
                <div className="title">
                    <h2>당신의 솔직한 마음을 <br /> 감정해드려요</h2>
                    <Button text="검사하러 가기" />
                </div>
                <EmojiWrap />
            </div>
        </section>
    );
}