import { VerseMapping } from "./versemapping"

export interface IQuranJuz {
  id: number
  juz_number: number
  verse_mapping: VerseMapping
  first_verse_id: number
  last_verse_id: number
  verses_count: number
}
