export default {
  registerCoach(context, { formData: data }) {
    context.commit('registerCoach', {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      hourlyRate: data.rate,
      description: data.desc,
      areas: data.areas
    })
  }
}
