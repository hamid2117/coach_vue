<template>
  <div>
    <base-dialog>
      <!--<p>{{ error }}</p>-->
    </base-dialog>
    <section>Filter</section>
    <section>
      <base-card>
        <div class="controls">list</div>
        <div>
          <base-spinner></base-spinner>
        </div>
        <h3>No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>

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
