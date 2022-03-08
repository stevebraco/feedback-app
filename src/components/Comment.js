import React from 'react'
import styled from 'styled-components';
import Reply from './Reply';

const Comment = () => {
  return (
    <>
    <Wrapper>
      <Avatar />
        <InfoContainer>
        <Flex>
          <div>
      <Name>Elijah Moss</Name>
      <Username>@hexagon.bestagon</Username>
          </div>
      <BtnReply>Reply</BtnReply>
        </Flex>
      <Content>
      Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
      </Content>
        </InfoContainer>
      </Wrapper>
      </>
  )
}

export default Comment


const Avatar = styled.div`
  max-width: 40px;
  width: 100%;
  height: 40px;
  border-radius: 50%;
  background: black;  
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 20px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Content = styled.p`
  max-width: 594px;
  font-size: 15px;
  color: #647196;

`;
const Name = styled.h2`
  font-weight: 700;
  font-size: 14px;
  color: #3A4374;
`;
const Username = styled.div`
  font-size: 14px;
  color: #647196;
`;
const BtnReply = styled.button`
  display: inline-block;
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 13px;
  color: #4661E6;
`;