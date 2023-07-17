<script setup>
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'
</script>

<template>
  <div>
    <base-dialog>
      <!--<p>{{ error }}</p>-->
    </base-dialog>
    <section>
      <coach-filter @handle-filter="filterData" />
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button>Refresh</base-button>
          <base-button link mode="outline" to="/register">Register as Coach</base-button>
        </div>
        <ul v-if="coaches.length">
          <li v-for="item in coaches" :key="item.id">
            <coach-item
              :firstName="item.firstName"
              :lastName="item.lastName"
              :rate="item.hourlyRate"
              :id="item.id"
              :areas="item.areas"
            />
          </li>
        </ul>
        <h3 v-else>No coaches found.</h3>
        <div>
          <base-spinner></base-spinner>
        </div>
      </base-card>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    coaches() {
      const coachesData = this.$store.getters['coach/coaches'].filter((data) => {
        if (!this.activeFilters.frontend && !data.areas.includes('frontend')) {
          return false
        }
        if (!this.activeFilters.backend && !data.areas.includes('backend')) {
          return false
        }
        if (!this.activeFilters.career && !data.areas.includes('career')) {
          return false
        }
        return true
      })
      return coachesData
    }
  },
  methods: {
    filterData(data) {
      this.activeFilters = data
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
