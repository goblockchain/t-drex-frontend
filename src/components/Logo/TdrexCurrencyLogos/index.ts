import BrLogo from 'assets/images/icons/tdrex-cbdc/brasil.png'
import ColLogo from 'assets/images/icons/tdrex-cbdc/colombia.png'
import HkgLogo from 'assets/images/icons/tdrex-cbdc/hongKong.png'
import JpyLogo from 'assets/images/icons/tdrex-cbdc/japan.png'
import UryLogo from 'assets/images/icons/tdrex-cbdc/uruguay.png'
import TP26Logo from 'assets/images/icons/tdrex-tesouro/TP26.png'
import TP29Logo from 'assets/images/icons/tdrex-tesouro/TP29.png'
import TS26Logo from 'assets/images/icons/tdrex-tesouro/TS26.png'
import TS29Logo from 'assets/images/icons/tdrex-tesouro/TS29.png'

export enum TDREX_LOGOS_ENUM {
  TP26 = 'TP26',
  TP29 = 'TP29',
  TS26 = 'TS26',
  TS29 = 'TS29',
  DREX = 'DREX',
  COL = 'COL',
  HKG = 'HKG',
  JPY = 'JPY',
  URY = 'URY',
}

const tdrexCurrencyLogosMap = {
  [TDREX_LOGOS_ENUM.TP26]: TP26Logo,
  [TDREX_LOGOS_ENUM.TP29]: TP29Logo,
  [TDREX_LOGOS_ENUM.TS26]: TS26Logo,
  [TDREX_LOGOS_ENUM.TS29]: TS29Logo,
  [TDREX_LOGOS_ENUM.DREX]: BrLogo,
  [TDREX_LOGOS_ENUM.COL]: ColLogo,
  [TDREX_LOGOS_ENUM.HKG]: HkgLogo,
  [TDREX_LOGOS_ENUM.JPY]: JpyLogo,
  [TDREX_LOGOS_ENUM.URY]: UryLogo,
}

export const getTdrexCurrencyIcon = (symbol: TDREX_LOGOS_ENUM) => tdrexCurrencyLogosMap[symbol]
