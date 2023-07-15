<template>
  <div>
    <base-dialog>
      <!--<p>{{ error }}</p>-->
    </base-dialog>
    <section>Filter</section>
    <section>
      <base-card>
        <div class="controls">
          <div v-for="(item, index) in coaches" :key="index">
            <h3>{{ item.firstName }}</h3>
          </div>
        </div>
        <div>
          <base-spinner></base-spinner>
        </div>
        <h3>No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>
<script>
import coaches from '../../store/modules/coaches'
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
