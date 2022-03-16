/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import reducer from '../reducer/data_reducer';
import { createContext, useContext, useReducer, useEffect } from 'react';
import { logDOM } from '@testing-library/react';

const initialState = {
  productRequestsLoading: false,
  productRequestsError: false,
  productRequests: [],
  currentUser: [],

  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},

  charactersLimit: 250,

  addFeedBack: {
    id: undefined,
    title: '',
    category: '',
    upvotes: 0,
    status: 'suggestion',
    description: '',
    comments: [],
  },
  commentId: null,
  buttonId: '',
  isLikedUpVotes: [],

  reply: {
    replyId: null,
    isReply: false,
  },
  // isReply: false,
  replyIndex: null,

  editStatus: '',
  isOpenStatusWrapper: false,
  isOpenCategoryWrapper: false,
  editCategory: '',
  category: 'feature',
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProductRequests = async () => {
    dispatch({ type: 'GET_PRODUCT_REQUESTS_LOADING' });
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      dispatch({
        type: 'GET_PRODUCT_REQUESTS_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({ type: 'GET_PRODUCT_REQUESTS_ERROR' });
    }
  };

  const AddFeedBack = (category, navigate) => (e) => {
    e.preventDefault();

    const [titleValue, descriptionValue] = e.target;
    const title = titleValue.value;
    const description = descriptionValue.value;

    if (title === '' || description === '') {
      if (!title) {
        titleValue.style.border = '1px solid #D73737';
        // eslint-disable-next-line quotes
        titleValue.parentElement.dataset.error = "Can't be empty";
      }

      if (!description) {
        descriptionValue.style.border = '1px solid #D73737';
        // eslint-disable-next-line quotes
        descriptionValue.parentElement.dataset.error = "Can't be empty";
      }
    } else {
      dispatch({
        type: 'ADD_FEEDBACK',
        payload: { title, description, category },
      });
      navigate('/');
    }
  };

  const AddComments = (currentId) => (e) => {
    e.preventDefault();
    const [messageValue] = e.target;
    let message = messageValue.value;

    dispatch({
      type: 'ADD_COMMENTS',
      payload: { message, currentId },
    });

    e.target.reset();
  };

  const changeComments = (e) => {
    dispatch({ type: 'CHANGE_COMMENTS', payload: e.target.value });
  };

  const handleUpVotes = (id) => () => {
    console.log(id);
    dispatch({ type: 'ADD_UPVOTES', payload: id });
  };

  const handleReply = (commentId) => () => {
    dispatch({ type: 'ADD_REPLY', payload: commentId });
  };

  const handleReplyBis = (id, index) => () => {
    console.log(id);
    dispatch({ type: 'IS_REPLY', payload: { id, index } });
  };

  const addReply = (replyingTo, idComment) => (e) => {
    e.preventDefault();
    const [contentValue] = e.target;
    const content = contentValue.value;
    dispatch({
      type: 'COMMENT_REPLY',
      payload: { replyingTo, content, idComment },
    });
    e.target.reset();
  };

  const repliesToReply = (urlId) => (e) => {
    e.preventDefault();
    const [messageValue] = e.target;
    let message = messageValue.value;
    dispatch({
      type: 'REPLIES_TO_REPLY',
      payload: { urlId, message },
    });
  };

  const updateCategory = (value) => () => {
    console.log(value);
    dispatch({ type: 'UPDATE_CATEGORY', payload: value });
  };

  const fetchCategory = (category) => {
    dispatch({
      type: 'FETCH_CATEGORY',
      payload: category,
    });
  };

  const openContainerCategory = () => {
    dispatch({ type: 'OPEN_CATEGORY' });
  };

  const updateStatus = (value) => () => {
    console.log(value);
    dispatch({ type: 'UPDATE_STATUS', payload: value });
  };

  const fetchStatus = (status) => {
    dispatch({
      type: 'FETCH_STATUS',
      payload: status,
    });
  };

  const openContainerStatus = () => {
    dispatch({ type: 'OPEN_STATUS' });
  };

  const editFeedback = (currentId, navigate) => (e) => {
    e.preventDefault();

    const [titleValue, descriptionValue] = e.target;
    const title = titleValue.value;
    const description = descriptionValue.value;

    if (title === '' || description === '') {
      if (!title) {
        titleValue.style.border = '1px solid #D73737';
        // eslint-disable-next-line quotes
        titleValue.parentElement.dataset.error = "Can't be empty";
      }

      if (!description) {
        descriptionValue.style.border = '1px solid #D73737';
        // eslint-disable-next-line quotes
        descriptionValue.parentElement.dataset.error = "Can't be empty";
      }
    } else {
      dispatch({
        type: 'EDIT_FEEDBACK',
        payload: { title, description, currentId },
      });
      navigate('/');
    }
  };

  const deleteFeedback = (id, navigate) => (e) => {
    e.preventDefault();
    dispatch({
      type: 'DELETE_FEEDBACK',
      payload: id,
    });
    navigate('/');
  };

  useEffect(() => {
    fetchProductRequests();
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...state,
        fetchProductRequests,
        AddFeedBack,
        AddComments,
        handleUpVotes,
        changeComments,
        handleReply,
        addReply,
        handleReplyBis,
        repliesToReply,
        editFeedback,
        updateStatus,
        fetchStatus,
        openContainerStatus,
        updateCategory,
        fetchCategory,
        openContainerCategory,
        deleteFeedback,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
