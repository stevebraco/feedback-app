

const filter_reducer = (state, action) => {

  if(action.type === 'LOAD_PRODUCTS') {
    console.log(action);
    console.log(state);
    return { ...state, allProducts: [...action.payload] }
  }


  if(action.type === 'FILTER_PRODUCTS') {
    const { allProducts, category } = state
    let tempProducts = [...allProducts]

    if(category !== 'all') {
      tempProducts = tempProducts.filter(product => product.category === category)
    }
    return {...state, filteredProducts: tempProducts}
  }

}

export default filter_reducer