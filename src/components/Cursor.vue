<template>
  <div class="cursor"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dot',
  data: () => ({
    elements: [],
    dot: null
  }),
  mounted() {
    document.body.style.cursor = 'none';

    this.dot = document.querySelector('.cursor');
    this.elements = [
      ...document.querySelectorAll('a'),
      ...document.querySelectorAll('input'),
      ...document.querySelectorAll('textarea'),
      ...document.querySelectorAll('button')
    ];

    // dot movement
    document.addEventListener('mousemove', (e) => {
      this.dot.style.top = `${e.clientY - 15}px`;
      this.dot.style.left = `${e.clientX - 15}px`;
    });

    // links, input, button and scroll down button
    this.elements.forEach(item => {
      item.addEventListener('mouseover', (e) => {
        this.dot.style.transform = `scale(0)`;
      });
      item.addEventListener('mouseout', (e) => {
        this.dot.style.transform = `scale(1)`;
      });
    });
  }
});
</script>

<style scoped lang="sass">
@import '../assets/_import'

.cursor
  position: fixed
  width: 30px
  height: 30px
  border-radius: 50%
  border: 1px solid $gray
  background: transparent
  transition: transform .3s ease-out, width .1s ease-out, height .1s ease-out
  z-index: 9999
  pointer-events: none

@media only screen and (max-width: 1200px)
  .cursor
    display: none

</style>