export const state = () => ({
  cardList: []
})

export const mutations = {
  set(state, newList) {
    state.cardList = newList
  }
}

export const getters = {
  cardList(state) {
    return state.cardList
  }
}
