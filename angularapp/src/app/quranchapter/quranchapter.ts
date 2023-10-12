import { ITranslatedName } from "./translatedname"
export interface IQuranChapter {
  id: number,
  revelation_place: string,
  revelation_order: number,
  bismillah_pre: boolean,
  name_simple: string,
  name_complex: string,
  name_arabic: string,
  verses_count: number,
  page: number[],
  translated_name: ITranslatedName
}
