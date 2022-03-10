const data_reducer = (state, action) => {
  if (action.type === 'GET_PRODUCT_REQUESTS_LOADING') {
    return { ...state, productRequestsLoading: true };
  }

  if (action.type === 'GET_PRODUCT_REQUESTS_SUCCESS') {
    console.log(action);
    console.log(state);
    return {
      ...state,
      productRequestsLoading: false,
      productRequests: action.payload.productRequests,
      currentUser: action.payload.currentUser,
    };
  }

  if (action.type === 'GET_PRODUCT_REQUESTS_ERROR') {
    return {
      ...state,
      productRequestsLoading: false,
      productRequestsError: true,
    };
  }

  if (action.type === 'ADD_FEEDBACK') {
    const { productRequests, addFeedBack } = state;
    const { title, category, description } = action.payload;

    let tempProducts = [...productRequests];
    let addFeedBackCopy = { ...addFeedBack };
    let id = tempProducts.length + 1;

    addFeedBackCopy = { ...addFeedBack, id, title, category, description };

    tempProducts = [...tempProducts, addFeedBackCopy];

    return { ...state, productRequests: tempProducts };
  }

  if (action.type === 'ADD_COMMENTS') {
    const { productRequests, currentUser } = state;
    const { message, currentId } = action.payload;
    let tempProducts = [...productRequests];
    let productRequest = tempProducts
      .filter((temp) => temp.id === parseInt(currentId) + 1)
      .map((t) => t.comments)[0];

    productRequest.push({
      id: productRequest.length + 1,
      content: message,
      user: currentUser,
    });

    return { ...state };
  }
};

export default data_reducer;
