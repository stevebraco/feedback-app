import React from 'react'
import styled from 'styled-components';

const RoadmapType = ({type, number}) => {
  let isTypeBackground = () => {
    if (type === 'Planned' ) {
      return '#F49F85'
    } else if (type === 'In-Progress') {
      return '#AD1FEA'
    } else {
      return '#62BCFA'
    }
  } 
  return (
    <Container>
      <div>
      <Circle style={{background : isTypeBackground()}} />
      <Type> {type} </Type>
      </div>
      {
        number && <Number> {number} </Number>
      }
      
    </Container>
  )
}

export default RoadmapType

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Circle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 16px;
  display: inline-block;
`;

const Type = styled.span`
  font-size: 16px;  
  color: #647196;  
  font-weight: 400;
`;

const Number = styled.span`
  font-size: 16px;  
  color: #647196;
  font-weight: 700;
`;