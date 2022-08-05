import { createStore } from 'vuex'

export default createStore({
  state: {
    personajes: [],
    personajesFiltros:[]
  },
  getters: {
  },
  mutations: {
    //El state es el de arriba, y el payload es la data que va a obtener.
    setPersonaje(state, payload){
      state.personajes = payload;
    },
    setPersonajesFiltros(state, payload){
      state.personajesFiltros = payload;
    }
  },
  actions: {
    async getPersonajes({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
        //Así se llenan los dos arrays de arriba
        commit('setPersonaje', data.results)
        commit('setPersonajesFiltros', data.results)
      } catch (error) {
        console.log(error)
      }
    },
    filterByStatus({commit, state}, status){
      const results = state.personajes.filter((personaje)=>{
        return personaje.status.includes(status)
      })
      commit('setPersonajesFiltros', results)
    }
  },
  modules: {
  }
})
