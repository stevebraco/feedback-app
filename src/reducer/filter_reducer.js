const filter_reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: { ...state.filters },
    };
  }

  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === 'UPDATE_SORT') {
    const value = action.payload;
    return { ...state, filters: { ...state.filters, sort: value } };
  }

  if (action.type === 'FILTER_SORTS') {
    const { filteredProducts } = state;
    const { sort } = state.filters;

    // copy all data
    let tempProducts = [...filteredProducts];

    if (sort === 'Most Upvotes') {
      tempProducts = tempProducts.sort((a, b) => b.upvotes - a.upvotes);
    }

    if (sort === 'Least Upvotes') {
      tempProducts = tempProducts.sort((a, b) => a.upvotes - b.upvotes);
    }

    if (sort === 'Most Comments') {
      tempProducts = tempProducts.sort(
        (a, b) => b.comments?.length - a.comments?.length
      );
    }

    if (sort === 'Least Comments') {
      tempProducts = tempProducts.sort((a, b) => {
        if (!a.comments) {
          a.comments = [];
        }
        return a.comments?.length - b.comments?.length;
      });
    }

    return {
      ...state,
      filteredProducts: tempProducts,
      isOpenSortWrapper: false,
    };
  }

  if (action.type === 'FILTER_PRODUCTS') {
    const { allProducts } = state;
    const { category } = state.filters;

    // copy all data
    let tempProducts = [...allProducts];

    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === 'OPEN_SORT') {
    const { isOpenSortWrapper } = state;
    return { ...state, isOpenSortWrapper: !isOpenSortWrapper };
  }

  if (action.type === 'OPEN_STATUS') {
    const { isOpenStatusWrapper } = state;
    return { ...state, isOpenStatusWrapper: !isOpenStatusWrapper };
  }

  if (action.type === 'EDIT_FEEDBACK') {
    const { productRequests, editCategory, editStatus } = state;
    console.log(editCategory);
    console.log(editStatus);
    const { currentId } = action.payload;
    console.log(currentId);
    console.log(productRequests);

    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
