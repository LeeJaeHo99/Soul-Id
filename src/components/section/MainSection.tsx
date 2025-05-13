import EmojiWrap from '../ui/EmojiWrap';
import Button from '../ui/Button';
import MainTitle from '../ui/MainTitle';

export default function MainSection() {
    return (
        <section className="sectioin main-section">
            <div className="inner between">
                <div className="title">
                    <MainTitle top="당신의 솔직한 마음을" bottom="감정해드려요" />
                    <Button link="quiz" text="검사하러 가기" />
                </div>
                <EmojiWrap />
            </div>
        </section>
    );
}