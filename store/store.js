import { createStore } from 'vuex';

export const store = createStore({
  state: {
    products: [
      { title: "bilal", designation: "S. Software Engineer" },
      { title: "ali", designation: "Software Engineer" },
      { title: "ahmed", designation: "Junior Developer" }
    ],
  },
  getters: {
    getProductWithItemName: (state) => state.products.filter(item=> item.title==="bilal"), 
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product); 
    },
  },
  actions: {
    addProductWithDelay({ commit }, product) {
      setTimeout(() => {
        commit('addProduct', product); 
      }, 2000); 
    },
  },
});