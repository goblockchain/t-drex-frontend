import styled from 'styled-components'

const PoolCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
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
  height: 85px;

  > div {
    display: flex;
    align-items: center;

    .main-icon {
      width: 43px;
      height: 35px;
    }

    h3 {
      font-size: 14px;
    }
  }
`

const PoolPairIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eceff0;
  border-radius: 100%;
  border: 1px solid white;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25px;
    height: 25px;
  }
`

const StylesSqueezedPoolPairs = styled.div`
  position: relative;
  display: flex;

  .first {
  }

  .second {
    position: absolute;
  }
`

const PoolCardBody = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  border-bottom: 1px solid #eaecf0;
  justify-content: center;

  img {
    position: absolute;
  }

  .body-infos {
    display: flex;
    align-items: center;
    column-gap: 50px;

    > div {
      display: flex;
      width: 70px;
      flex-direction: column;
      align-items: center;

      label {
        color: #667085;
      }
    }
  }
`

export {
  CollateralBadge,
  PoolCardBody,
  PoolCardHeader,
  PoolCardsContainer,
  PoolPairIcon,
  StyledPoolCard,
  StylesSqueezedPoolPairs,
}
