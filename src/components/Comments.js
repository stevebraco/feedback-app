import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'
import Reply from './Reply'

const Comments = () => {
  return (
    <ContainerComments>
      <span>4 commentsf</span>
    </ContainerComments>
  )
}

export default Comments
const ContainerComments = styled.div`
  background: #FFFFFF;
  padding: 24px 34px;
  border-radius: 10px;
  span {
    font-size: 18px;
    color: #3A4374;
    font-weight: 700;
    display: inline-block;
    padding-bottom: 28px;
  }
`;

