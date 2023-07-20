<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header v-if="!disableContactBtn">
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="(area, index) in areas" :key="index" :type="area" :title="area" />
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      coachData: null
    }
  },
  created() {
    this.coachData = this.$store.getters['coach/coaches'].find((data) => data.id === this.id)
  },

  computed: {
    fullName() {
      return this.coachData.firstName + ' ' + this.coachData.lastName
    },
    disableContactBtn() {
      return this.$route.path.includes('/contact')
    },
    contactLink() {
      return this.$route.path + '/contact'
    },
    rate() {
      return this.coachData.hourlyRate
    },
    description() {
      return this.coachData.description
    },
    areas() {
      console.log(this.coachData.areas)
      return this.coachData.areas
    }
  }
}
</script>
