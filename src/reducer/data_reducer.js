const data_reducer = (state, action) => {
  if (action.type === 'GET_PRODUCT_REQUESTS_LOADING') {
    return { ...state, productRequestsLoading: true };
  }

  if (action.type === 'GET_PRODUCT_REQUESTS_SUCCESS') {
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
    const { title, description, category } = action.payload;

    let tempProducts = [...productRequests];
    let addFeedBackCopy = { ...addFeedBack };
    let id = tempProducts.length + 1;

    addFeedBackCopy = {
      ...addFeedBack,
      id,
      title,
      category,
      description,
    };

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

    return { ...state, charactersLimit: 250 };
  }

  if (action.type === 'CHANGE_COMMENTS') {
    return {
      ...state,
      charactersLimit: 250 - action.payload.length,
    };
  }

  if (action.type === 'UPDATE_CATEGORY') {
    const value = action.payload;
    return {
      ...state,
      editCategory: value,
      category: value,
      isOpenCategoryWrapper: false,
    };
  }

  if (action.type === 'OPEN_CATEGORY') {
    const { isOpenCategoryWrapper } = state;
    return { ...state, isOpenCategoryWrapper: !isOpenCategoryWrapper };
  }

  if (action.type === 'FETCH_CATEGORY') {
    return { ...state, editCategory: action.payload };
  }

  if (action.type === 'FETCH_STATUS') {
    return { ...state, editStatus: action.payload };
  }

  if (action.type === 'UPDATE_STATUS') {
    const value = action.payload;
    return {
      ...state,
      editStatus: value,
      isOpenStatusWrapper: false,
    };
  }

  if (action.type === 'OPEN_STATUS') {
    const { isOpenStatusWrapper } = state;
    return { ...state, isOpenStatusWrapper: !isOpenStatusWrapper };
  }

  if (action.type === 'EDIT_FEEDBACK') {
    const { productRequests, editCategory, editStatus } = state;
    console.log(editCategory);
    console.log(editStatus);
    const { title, description, currentId } = action.payload;
    productRequests[currentId] = {
      ...productRequests[currentId],
      title,
      category: editCategory,
      status: editStatus,
      description,
    };
    return { ...state, productRequests: [...productRequests] };
  }

  if (action.type === 'ADD_UPVOTES') {
    const { productRequests, isLikedUpVotes } = state;
    const id = action.payload;
    let isLikedId = isLikedUpVotes.includes(productRequests[id - 1].id);

    if (isLikedId) {
      let findIndex = isLikedUpVotes.indexOf(productRequests[id - 1].id);
      isLikedUpVotes.splice(findIndex, 1);

      productRequests[id - 1] = {
        ...productRequests[id - 1],
        upvotes: (productRequests[id - 1].upvotes =
          productRequests[id - 1].upvotes - 1),
      };
    } else {
      productRequests[id - 1] = {
        ...productRequests[id - 1],
        upvotes: (productRequests[id - 1].upvotes =
          productRequests[id - 1].upvotes + 1),
      };
      isLikedUpVotes.push(productRequests[id - 1].id);
    }

    return {
      ...state,
      productRequests: [...productRequests],
      buttonId: id,
    };
  }

  if (action.type === 'ADD_REPLY') {
    const {
      reply: { isReply },
    } = state;

    let replyCopy = {
      replyId: action.payload,
      isReply: true,
    };
    console.log(replyCopy);
    return { ...state, reply: replyCopy };
  }

  if (action.type === 'IS_REPLY') {
    const { id, index } = action.payload;

    return { ...state, commentId: id, replyIndex: index };
  }

  if (action.type === 'REPLIES_TO_REPLY') {
    const { productRequests, commentId, currentUser, replyIndex } = state;
    const { urlId, message } = action.payload;

    let findCommentToReply = productRequests[urlId].comments.find(
      (comment) => comment.id === commentId
    );

    let replyingTo = findCommentToReply.replies[replyIndex].user.username;

    let reply = {
      content: message,
      replyingTo,
      user: currentUser,
    };

    findCommentToReply.replies = [...findCommentToReply.replies, reply];

    return { ...state, commentId: null };
  }

  if (action.type === 'COMMENT_REPLY') {
    const { productRequests, currentUser } = state;
    const {
      reply,
      reply: { replyId, isReply },
    } = state;

    const { replyingTo, content, idComment } = action.payload;
    productRequests[idComment].comments;

    let addReplies = {
      content,
      replyingTo,
      user: currentUser,
    };

    let findCommentToReply = productRequests[idComment].comments.find(
      (comment) => comment.id === replyId
    );
    let others = productRequests[idComment].comments.filter(
      (comment) => comment.id !== replyId
    );

    if (findCommentToReply.replies) {
      findCommentToReply.replies = [...findCommentToReply.replies, addReplies];
    } else {
      findCommentToReply = { ...findCommentToReply, replies: [addReplies] };
      let commentUpdate = [findCommentToReply, ...others];
      let sortComment = commentUpdate.sort((a, b) => a.id - b.id);
      productRequests[idComment].comments = [...sortComment];
    }

    return {
      ...state,
      reply: { ...reply, isReply: false },
      productRequests: [...productRequests],
    };
  }

  if (action.type === 'DELETE_FEEDBACK') {
    const { productRequests } = state;
    let id = parseInt(action.payload) + 1;

    let deleteProductRequests = productRequests.filter(
      (productRequest) => productRequest.id !== id
    );

    return { ...state, productRequests: [...deleteProductRequests] };
  }
};

export default data_reducer;
