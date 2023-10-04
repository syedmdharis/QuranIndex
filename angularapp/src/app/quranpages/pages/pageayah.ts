import { ISurah } from "src/app/surah/surah";

export interface IAyah{
    number:        number;
    text:          string;
    surah:         ISurah;
    numberInSurah: number;
    juz:           number;
    manzil:        number;
    page:          number;
    ruku:          number;
    hizbQuarter:   number;
    sajda:         boolean;
}