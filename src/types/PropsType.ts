export type ButtonProps = {
    link?: string;
    text: string;
};

export type TitleProps = {
    title: string;
};

export type TypeBtnProps = {
    active: number;
    handleActive: (index: number) => void;
    resetIsNext: () => void;
};

export type TypeItemProps = {
    active: number;
    isNext: number;
    clickNext: () => void;
    clickPrev: () => void;
};

export type CodeDescItemProps = {
    item: {
        code: string;
        animal: string;
        desc: string;
    };
};