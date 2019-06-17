import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticketsData: []
  },
  mutations: {
    fillTickets(state, tickets){
      state.ticketsData = tickets;
    }
  },
  actions: {
    getTickets: async function( {commit} ){
      const data = await fetch('tickets.json');
      const tickets = await data.json();
      commit('fillTickets', tickets);
    }
  }
})
