import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';

// eslint-disable-next-line react/prop-types
const UpVotes = ({ id, upvotes, handleClick }) => {
  const { isLikedUpVotes } = useDataContext();
  let isLiked = isLikedUpVotes.includes(id);
  return (
    <BtnUpVotes
      className={isLiked ? 'upvotes-active' : ''}
      onClick={handleClick}
    >
      <img src="images/icon-arrow-up.svg" alt="icon up" />
      <span>{upvotes}</span>
    </BtnUpVotes>
  );
};

export default UpVotes;

const BtnUpVotes = styled.button`
  cursor: pointer;
  border: none;
  background: #f2f4fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 40px;
  width: 100%;
  height: 53px;
  border-radius: 10px;
  gap: 8px;
  transition: 0.5s;

  span {
    color: #3a4374;
    font-weight: 700;
    font-size: 13px;
    padding: 0 9px;
  }

  &:hover {
    background: #cfd7ff;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    gap: 3px;
    max-width: 60px;
    min-height: 30px;

    span {
      padding: 0;
    }
  }
`;
