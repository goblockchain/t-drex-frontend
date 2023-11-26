import BrazilIcon from '../../assets/images/icons/brazil-icon.png'
import TP2026Icon from '../../assets/images/icons/tf-2026-icon.png'

const pools_mock = [
  {
    id: 1,
    public_title_infos: {
      id: 1,
      name: 'TESOURO PREFIXADO 2026',
      type: 'ltn',
      icon: TP2026Icon,
      description:
        'O "Tesouro Prefixado 2026"é um investimento com vencimento em 01/01/2026, rendendo R$ 1.000 por título no vencimento. É ideal para investimentos de médio prazo sem juros semestrais, e pode ser resgatado antecipadamente pelo valor de mercado.',
    },
    cbdc_infos: {
      id: 1,
      name: 'Colômbia',
      icon: BrazilIcon,
    },
    liquidity: 1.2,
    APR: 32,
  },
]

// eslint-disable-next-line import/no-unused-modules
export { pools_mock }
