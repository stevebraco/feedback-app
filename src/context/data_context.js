import reducer from '../reducer/data_reducer';
import { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  productRequestsLoading: false,
  productRequestsError: false,
  productRequests: [],
  currentUser: [],

  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},

  addFeedBack: {
    id: undefined,
    title: '',
    category: '',
    upvotes: 0,
    status: '',
    description: '',
    comments: [],
  },
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
      console.log(data);
    } catch (error) {
      dispatch({ type: 'GET_PRODUCT_REQUESTS_ERROR' });
    }
  };

  const AddFeedBack = (e) => {
    e.preventDefault();
    const [titleValue, categoryValue, descriptionValue] = e.target;
    const title = titleValue.value;
    const category = categoryValue.value;
    const description = descriptionValue.value;

    dispatch({
      type: 'ADD_FEEDBACK',
      payload: { title, category, description },
    });
  };

  const AddComments = (currentId) => (e) => {
    e.preventDefault();
    const [messageValue] = e.target;
    const message = messageValue.value;

    dispatch({
      type: 'ADD_COMMENTS',
      payload: { message, currentId },
    });
  };

  useEffect(() => {
    fetchProductRequests();
  }, []);

  return (
    <DataContext.Provider
      value={{ ...state, fetchProductRequests, AddFeedBack, AddComments }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
