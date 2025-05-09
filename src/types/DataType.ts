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