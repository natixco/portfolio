<template>
  <div class="dot-container" :id="id"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PolkaDots',
  props: ['id', 'rows', 'cols'],
  mounted() {
    let d = document.querySelector(`#${this.id}`);
    d.style.width = `${20 * this.cols}px`;
    d.style.height = `${20 * this.rows}px`;
  }
});
</script>

<style scoped lang="sass">
.dot-container
  z-index: -99999
  background-image: url('../assets/dot.png')
  background-repeat: repeat
</style>
