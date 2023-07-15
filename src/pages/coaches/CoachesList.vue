<script setup>
import CoachItem from '../../components/coaches/CoachItem.vue'
</script>

<template>
  <div>
    <base-dialog>
      <!--<p>{{ error }}</p>-->
    </base-dialog>
    <section>Filter</section>
    <section>
      <base-card>
        <div class="controls">
          <button>Refresh</button>
          <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul>
          <li v-for="item in coaches" :key="item.id">
            <coach-item
              :firstName="item.firstName"
              :lastName="item.lastName"
              :rate="item.hourlyRate"
              :id="item"
            />
          </li>
        </ul>
        <div>
          <base-spinner></base-spinner>
        </div>
        <h3>No coaches found.</h3>
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
