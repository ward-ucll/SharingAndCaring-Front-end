export type Book = {
    title: string;
    author: string;
    isbn: string;
    language: Language;
    imageUrl: string;
}

export type Language = 
  | 'ENGLISH'
  | 'SPANISH'
  | 'FRENCH'
  | 'GERMAN'
  | 'MANDARIN'
  | 'HINDI'
  | 'JAPANESE'
  | 'KOREAN'
  | 'ITALIAN'
  | 'PORTUGUESE'
  | 'RUSSIAN'
  | 'ARABIC'
  | 'BENGALI'
  | 'URDU'
  | 'INDONESIAN'
  | 'MALAY'
  | 'VIETNAMESE'
  | 'THAI'
  | 'TURKISH'
  | 'PERSIAN'
  | 'POLISH'
  | 'ROMANIAN'
  | 'SWAHILI'
  | 'GREEK'
  | 'HEBREW'
  | 'DUTCH'
  | 'CZECH'
  | 'SWEDISH'
  | 'FINNISH'
  | 'NORWEGIAN'
  | 'DANISH'
  | 'HUNGARIAN'
  | 'TAMIL'
  | 'TELUGU'
  | 'MARATHI'
  | 'MALAYALAM'
  | 'PUNJABI'
  | 'BURMESE'
  | 'SERBIAN'
  | 'CROATIAN'
  | 'BOSNIAN'
  | 'BULGARIAN'
  | 'SLOVAK'
  | 'UKRAINIAN'
  | 'LITHUANIAN'
  | 'LATVIAN'
  | 'ESTONIAN'
  | 'GEORGIAN'
  | 'ARMENIAN'
  | 'KAZAKH'
  | 'UZBEK'
  | 'AZERBAIJANI'
  | 'PASHTO'
  | 'AMHARIC'
  | 'SOMALI'
  | 'ZULU'
  | 'XHOSA'
  | 'SHONA'
  | 'MAORI'
  | 'SAMOAN'
  | 'OTHER';
