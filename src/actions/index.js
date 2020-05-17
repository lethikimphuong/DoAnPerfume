import * as types from '../constans/actionTypes';

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: types.CREATE_PROJECT, project })
  }
}

export const setProducts = (products) => {
  return {
    type: types.SET_PRODUCTS,
    products
  }
};

export const setNewProducts = (newProducts) => {
  return {
    type: types.SET_PRODUCT_NEW,
    newProducts
  }
};

export const setUsers = (users) => {
  return {
    type: types.SET_USER,
    users
  }
};

export const setOrders = (orders) => {
  return {
    type: types.SET_ORDERS,
    orders
  }
};

export const setCarts = (carts) => {
  return {
    type: types.SET_CARTS,
    carts
  }
};

export const setComments = (comments) => {
  return {
    type: types.SET_COMMENTS,
    comments
  }
};

export const listAllProduct = () => {
  return {
    type: types.LIST_ALL_PRODUCT
  }
};

export const listProductByBrand = () => {
  return {
    type: types.LIST_PRODUCT_BY_BRAND
  }
};

export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product
  }
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id
  }
};

export const editProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product
  }
};

export const sortProduct = (sort) => {
  return {
    type: types.SORT_PRODUCT,
    sort
  }
};

// export const searchProduct = (keyword) => {
//   return {
//     type: types.SEARCH_PRODUCT,
//     keyword
//   }
// };

export const search = (keyword) => {
  return {
    type: types.SEARCH_PRODUCT,
    keyword
  }
};

export const createAccount = (account) => {
  return {
    type: types.CREATE_ACCOUNT,
    account
  }
};

export const editAccount = (account) => {
  return {
    type: types.EDIT_ACCOUNT,
    account
  }
};

export const logout = () => {
  return {
    type: types.LOGOUT
  }
};

export const listComment = () => {
  return {
    type: types.LIST_COMMENT
  }
};

export const addComment = (comment) => {
  return {
    type: types.ADD_COMMENT,
    comment
  }
};

export const addToCart = (productToCart) => {
  return {
    type: types.ADD_TO_CART,
    productToCart
  }
};

export const deleteProductCart = (id) => {
  return {
    type: types.DELETE_PRODUCT_CART,
    id
  }
};

export const increaseQuantityProductCart = (id) => {
  return {
    type: types.INCREASE_QUANTITY_PRODUCT_CART,
    id
  }
};

export const reduceQuantityProductCart = (id) => {
  return {
    type: types.REDUCE_QUANTITY_PRODUCT_CART,
    id
  }
};

export const createOrder = (order) => {
  return {
    type: types.CREATE_ORDER,
    order
  }
};

export const createAccountAdmin = (account) => {
  return {
    type: types.CREATE_ACCOUNT_ADMIN,
    account
  }
};
