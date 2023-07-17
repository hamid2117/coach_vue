export default {
  coaches(state) {
    return state.coaches
  },
  isCoach(_, getters, _2, rootGetters) {
    return getters.coaches.some((data) => data.id === rootGetters.userId) // return
  }
}
