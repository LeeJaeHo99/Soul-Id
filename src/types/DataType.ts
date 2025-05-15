export type PersonalityType = {
    ko: string;
    en: string;
    enFull: string;
    good1: string;
    good2: string;
    bad1: string;
    bad2: string;
}[];

export type SoulIdType = {
    code: string;
    animal: string;
    desc: string;
    result: string;
    job: string;
    jobReason: string;
    love: string;
    loveReason: string;
};

export type ResultStore = {
    SO: number;
    setSO: (SO: number) => void;
    OP: number;
    setOP: (OP: number) => void;
    AD: number;
    setAD: (AD: number) => void;
    HP: number;
    setHP: (HP: number) => void;
};

export type QuizStateStore = {
    quizState: number;
    setQuizState: () => void;
};

export type QuizImgType = {
    code: string;
    title1: string;
    title2: string;
    title3: string;
    title4?: string;
    answer1: string;
    answer2: string;
};