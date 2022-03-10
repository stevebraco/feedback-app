import reducer from '../reducer/filter_reducer';
import { useDataContext } from './data_context';
const { createContext, useContext, useReducer, useEffect } = require('react');

const initialState = {
  filteredProducts: [],
  allProducts: [],
  filters: {
    category: 'all',
    sort: 'Most Upvotes',
  },
  isOpenSortWrapper: false,
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { productRequests } = useDataContext();

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: productRequests });
  }, [productRequests]);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'FILTER_SORTS' });
  }, [productRequests, state.filters]);

  // value onClick
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };

  const updateSort = (value) => {
    dispatch({ type: 'UPDATE_SORT', payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  const openContainerSort = () => {
    dispatch({ type: 'OPEN_SORT' });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        clearFilters,
        updateSort,
        openContainerSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
