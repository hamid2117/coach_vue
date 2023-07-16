<script setup>
import CoachItem from '../../components/coaches/CoachItem.vue'
</script>

<template>
  <div>
    <base-dialog>
      <!--<p>{{ error }}</p>-->
    </base-dialog>
    <section>
      <base-card>
        <div class="controls">
          <base-button>Filter</base-button>
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('coach', ['coaches'])
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
