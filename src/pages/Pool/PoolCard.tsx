import AvatarGroup from 'components/avatar-group'
import styled from 'styled-components'

import ProgressGraph from '../../assets/images/icons/progress.png'
import { PoolsType } from '.'
import { pools_mock } from './mocks'

const SqueezedPoolPairs = ({ firstPair, secondPair }: { firstPair: string; secondPair: string }) => {
  const data = [
    {
      img: firstPair,
    },
    {
      img: secondPair,
    },
  ]

  return <AvatarGroup data={data} />
}

const PoolCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const CollateralBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  background-color: #ecfdf3;
  width: 83px;
  height: 22px;
  border-radius: 16px;

  .rounded-pill {
    background-color: #12b76a;
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }

  label {
    font-size: 14px;
    color: #027a48;
  }
`

const StyledPoolCard = styled.div`
  width: 360px;
  height: 478px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #eaecf0;
`

const PoolCardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #eaecf0;
  height: 75px;

  > div {
    display: flex;
    align-items: center;
    column-gap: 10px;
    .main-icon {
      width: 32px;
      height: 32px;
    }

    h3 {
      font-size: 14px;
    }
  }
`

const PoolCardBody = styled.div`
  position: relative;
  height: 45%;
  display: flex;
  border-bottom: 1px solid #eaecf0;
  justify-content: center;

  .progress-graph {
    position: absolute;
  }

  .body-infos {
    display: flex;
    align-items: center;
    column-gap: 50px;
    margin-top: 30px;

    > div {
      display: flex;
      width: 70px;
      height: 50px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        height: 32px;
        font-size: 24px;
        font-weight: 500;
        font-family: 'Inter';
      }

      label {
        color: #667085;
        align-self: center;
      }
    }
  }
`

const PoolCardFooter = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 360px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
    text-align: justify;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona reticências para indicar texto cortado */
    -webkit-line-clamp: 4; /* Limita o número de linhas exibidas (ajuste conforme necessário) */
    -webkit-box-orient: vertical;
    line-height: 1.2em; /* Ajuste conforme a altura do texto */
    height: 6em; /* Limita a altura a aproximadamente 3 linhas */
  }

  button {
    color: #9a9aaf;
    border: 1px solid #c6cbd9;
    background-color: inherit;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
  }
`

export default function PoolCards({ activePoolType }: { activePoolType: PoolsType }) {
  const pools =
    activePoolType !== 'all' ? pools_mock.filter((pool) => pool.public_title_infos.type === activePoolType) : pools_mock

  return (
    <PoolCardsContainer>
      {pools.map((pool) => (
        <StyledPoolCard key={pool.id}>
          <PoolCardHeader>
            <div>
              <img className="main-icon" src={pool.public_title_infos.icon} alt="tesouro-prefixiado-2026" />
              <h3>{pool.public_title_infos.name}</h3>
            </div>
            <CollateralBadge>
              <div className="rounded-pill" />
              <label>Collateral</label>
            </CollateralBadge>
          </PoolCardHeader>
          <PoolCardBody>
            <img className="progress-graph" src={ProgressGraph} />
            <div className="body-infos">
              <div>
                <SqueezedPoolPairs firstPair={pool.cbdc_infos.icon} secondPair={pool.public_title_infos.icon} />
                <label>Pool</label>
              </div>
              <div>
                <span>{pool.APR}%</span>
                <label>APR</label>
              </div>
              <div>
                <span>${pool.liquidity}M</span>
                <label>Liquidez</label>
              </div>
            </div>
          </PoolCardBody>
          <PoolCardFooter>
            <p>{pool.public_title_infos.description}</p>
          </PoolCardFooter>
        </StyledPoolCard>
      ))}
    </PoolCardsContainer>
  )
}
