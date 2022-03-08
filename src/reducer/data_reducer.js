

const data_reducer = (state, action) => {

  if(action.type === 'GET_PRODUCT_REQUESTS_LOADING') {
    console.log(action);
    console.log(state);
    return {...state, productRequestsLoading: true }
  }

  if(action.type === 'GET_PRODUCT_REQUESTS_SUCCESS') {
    console.log(action);
    console.log(state);
    return {...state, productRequestsLoading: false, productRequests: action.payload }
  }

  if(action.type === 'GET_PRODUCT_REQUESTS_ERROR') {
    return {...state, productRequestsLoading: false, productRequestsError: true}
  }

}

export default data_reducer