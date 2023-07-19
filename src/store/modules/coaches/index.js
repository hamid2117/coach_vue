import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Hamid',
          lastName: 'Mehmood',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Hamid and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'end',
          lastName: 'it',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    }
  },
  getters,
  mutations,
  actions
}
