import { ISurah } from "src/app/surah/surah";
import { IAyah } from "./pageayah";
import { IEdition } from "./pageedition";

export interface IPageData{
    number:  number;
    ayahs:   IAyah[];
    surahs:  ISurah;
    edition: IEdition;
}