import reducer from '../reducer/filter_reducer'
import { useDataContext } from './data_context';
const { createContext, useContext, useReducer, useEffect } = require("react");

const initialState = {
  filteredProducts : [],
  allProducts: [],
  category: [],
};

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const {productRequests} = useDataContext()

  
  

  useEffect(() => {
    dispatch({type: 'LOAD_PRODUCTS', payload: productRequests})
  },[productRequests])

  useEffect(() => {
    dispatch({type: 'FILTER_PRODUCTS'})
  },[productRequests, state.category])


  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(name, value);

  }



  return (
    <FilterContext.Provider value={{...state, updateFilters}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}