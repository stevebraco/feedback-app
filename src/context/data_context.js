import reducer from '../reducer/data_reducer'
const { createContext, useContext, useReducer, useEffect } = require("react");

const initialState = {
  productRequestsLoading: false,
  productRequestsError: false,
  productRequests: [],
};

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  

  
  const fetchProductRequests = async () => {
    dispatch({ type: 'GET_PRODUCT_REQUESTS_LOADING' })
    try {
      const response = await fetch('./data.json')
      const data = await response.json()
    dispatch({ type: 'GET_PRODUCT_REQUESTS_SUCCESS', payload: data.productRequests })
      console.log(data);
    } catch (error) {
      dispatch({ type: 'GET_PRODUCT_REQUESTS_ERROR' })

    }
    
  }
  useEffect(() => {
    fetchProductRequests()
  },[])


  return (
    <DataContext.Provider value={{...state}}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  return useContext(DataContext)
}