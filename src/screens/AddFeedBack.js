import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropDown from '../components/DropDown';
import { useDataContext } from '../context/data_context';
import { useFilterContext } from '../context/filter_context';
import { useNavigate } from 'react-router-dom';

const AddFeedBack = () => {
  const {
    AddFeedBack,
    updateCategory,
    openContainerCategory,
    isOpenCategoryWrapper,
    editCategory,
    category,
  } = useDataContext();
  const navigate = useNavigate();

  const { allProducts } = useFilterContext();

  const getUniqueCat = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ['all', 'UI', 'UX', ...new Set(unique)];
  };
  const categories = getUniqueCat(allProducts, 'category');

  return (
    <>
      <Container>
        <Wrapper>
          <BtnContainer>
            <GoBack to="/">
              <img src="images/icon-arrow-left.svg" alt="Go back" /> Go back{' '}
            </GoBack>
          </BtnContainer>
          <ContainerForm>
            <IconPlus src="/images/icon-new-feedback.svg" alt="icon" />
            <BigTitle>Create New Feedback</BigTitle>
            <form onSubmit={AddFeedBack(editCategory, navigate)}>
              <FormData>
                <Title>FeedBack Title</Title>
                <Label htmlFor="title">Add a short, descriptive headline</Label>
                <TextInput type="text" id="name" />
              </FormData>
              <div>
                <Title>Category</Title>
                <Label onClick={openContainerCategory} htmlFor="category">
                  Choose a category for your feedback
                </Label>
                <ContainerCategory>
                  <WrapperCategory onClick={openContainerCategory}>
                    <span> {category} </span>
                    <img src="/images/icon-arrow-down.svg" alt="icon down" />
                  </WrapperCategory>
                  {isOpenCategoryWrapper && (
                    <ContainerSort>
                      {categories.map((t, index) => (
                        <DropDown
                          key={index}
                          list={t}
                          value={category}
                          handleClick={updateCategory(t)}
                        />
                      ))}
                    </ContainerSort>
                  )}
                </ContainerCategory>
              </div>
              <FormData>
                <Title>Feedback Detail</Title>
                <Label htmlFor="description">
                  Include any specific comments on what should be improved,
                  added, etc.
                </Label>
                <TextInputBig type="text" id="description" />
              </FormData>
              <BtnWrapper>
                <ButtonCancel type="reset">Cancel</ButtonCancel>
                <Button type="submit">Add FeedBack</Button>
              </BtnWrapper>
            </form>
          </ContainerForm>
        </Wrapper>
      </Container>
    </>
  );
};

export default AddFeedBack;

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  background: #f7f8fd;
  width: 100%;
  padding: 80px 10px 0 10px;

  overflow: scroll;
`;

const Wrapper = styled.div`
  max-width: 730px;
  margin: 0 auto;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;
const GoBack = styled(Link)`
  border: none;
  background: transparent;
  font-weight: bold;
  font-size: 14px;
  color: #647196;
  display: inline-block;
  margin-bottom: 40px;
`;

const ContainerForm = styled.div`
  background: #ffffff;
  padding: 52px 42px;
  border-radius: 10px;
  position: relative;
`;

const IconPlus = styled.img`
  position: absolute;
  top: -25px;
`;

const BigTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: #3a4374;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  color: #3a4374;
`;
const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  padding-bottom: 16px;
  display: inline-block;
`;

const TextInput = styled.textarea`
  /* max-width: 664px; */
  width: 100%;
  height: 48px;
  resize: none;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 16px 24px;
  font-family: Jost;
  font-size: 15px;
  font-weight: 400;
  background: #f7f8fd;
  border: none;
  border-radius: 10px;
  color: #3a4374;
  overflow: hidden;
`;

const TextInputBig = styled.textarea`
  /* max-width: 664px; */
  width: 100%;
  height: 96px;
  resize: none;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 16px 24px;
  font-family: Jost;
  font-size: 15px;
  font-weight: 400;
  color: #3a4374;
  background: #f7f8fd;
  border: none;
  border-radius: 10px;
`;

const FormData = styled.div`
  position: relative;
  &[data-error]::after {
    content: attr(data-error);
    font-size: 14px;
    color: #d73737;
    display: block;
    margin: 10px 0;
    line-height: 0.3;
    opacity: 1;
    transition: 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const WrapperCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f8fd;
  height: 48px;
  padding: 0 24px;
  cursor: pointer;
  margin-bottom: 16px;
  border-radius: 10px;

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3a4374;
    text-transform: capitalize;
  }
`;
const ContainerCategory = styled.div`
  position: relative;
`;

const ContainerSort = styled.div`
  position: absolute;
  top: 60px;
  left: 0rem;
  right: 0rem;
  width: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 10px;
  max-width: 646px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 16px;
`;

const Button = styled.button`
  max-width: 142px;
  width: 100%;
  height: 44px;
  display: inline-block;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  background: #ad1fea;
  font-weight: 700;
  cursor: pointer;
`;

const ButtonCancel = styled.button`
  max-width: 93px;
  width: 100%;
  height: 44px;
  display: inline-block;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  background: #656ea3;
  font-weight: 700;
  cursor: pointer;
`;
