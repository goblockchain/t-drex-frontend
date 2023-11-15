import styled, { css, useTheme } from 'styled-components'

const PoolCardsContainer = styled.div`
display: grid;
 grid-template-columns: 1fr;


@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (min-width: 1200px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
`

const StyledPoolCard = styled.div`
width: 360px;
height: 478px;
background-color: white;
border-radius: 8px;
border: 1px solid #EAECF0;
`

export default function PoolCards() {
  return (
    <PoolCardsContainer>
      <StyledPoolCard>

      </StyledPoolCard>
        <StyledPoolCard>

      </StyledPoolCard>
    </PoolCardsContainer>
  )
}