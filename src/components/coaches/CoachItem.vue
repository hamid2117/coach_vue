<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="(area, index) in areas" :key="index">{{ area }}</span>
    </div>
    <div class="actions">
      <base-button link :to="coachContactLink" mode="outline">Contact</base-button>
      <base-button link :to="coachDetailLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['firstName', 'lastName', 'id', 'areas', 'description', 'rate'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    coachDetailLink() {
      return this.$route.path + '/' + this.id
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact'
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
