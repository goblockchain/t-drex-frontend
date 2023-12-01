import TP26Logo from 'assets/images/icons/tdrex-tesouro/TP26.png'
import TP29Logo from 'assets/images/icons/tdrex-tesouro/TP29.png'
import TS26Logo from 'assets/images/icons/tdrex-tesouro/TS26.png'
import TS29Logo from 'assets/images/icons/tdrex-tesouro/TS29.png'

export enum TDREX_TITLES_ENUM {
  TP26 = 'TP26',
  TP29 = 'TP29',
  TS26 = 'TS26',
  TS29 = 'TS29',
}

const titlesMap = {
  [TDREX_TITLES_ENUM.TP26]: TP26Logo,
  [TDREX_TITLES_ENUM.TP29]: TP29Logo,
  [TDREX_TITLES_ENUM.TS26]: TS26Logo,
  [TDREX_TITLES_ENUM.TS29]: TS29Logo,
}

export const getTitleIcon = (title: TDREX_TITLES_ENUM) => titlesMap[title]
