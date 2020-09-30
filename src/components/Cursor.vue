<template>
  <div class="cursor"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cursor',
  data: () => ({
    elements: [],
    cursor: null,
    mousex: 0,
    mousey: 0,
    canResize: false
  }),
  mounted() {
    this.cursor = document.querySelector('.cursor');
    this.elements = [
      ...document.querySelectorAll('a'),
      ...document.querySelectorAll('input'),
      ...document.querySelectorAll('textarea'),
      ...document.querySelectorAll('button')
    ];

    // cursor movement
    document.addEventListener('mousemove', (e) => {
      this.mousex = e.clientX;
      this.mousey = e.clientY;
    });

    requestAnimationFrame(this.cursorMove);

    // links, inputs, button
    this.elements.forEach(item => {
      item.addEventListener('mouseover', (e) => {
        this.canResize = true;
      });
      item.addEventListener('mouseout', (e) => {
        this.canResize = false;
      });
    });
  },
  methods: {
    cursorMove() {
      requestAnimationFrame(this.cursorMove);

      if (this.canResize) this.cursor.style.transform = `translate(${this.mousex + 15}px, ${this.mousey + 15}px) scale(0)`;
      else this.cursor.style.transform = `translate(${this.mousex + 15}px, ${this.mousey + 15}px) scale(1)`;
    }
  }
});
</script>

<style scoped lang="sass">
@import '../assets/_import'

.cursor
  position: fixed
  top: -30px
  left: -30px
  width: 30px
  height: 30px
  border-radius: 50%
  border: 1px solid $gray
  background: transparent
  transition: transform .1s
  z-index: 9999
  pointer-events: none

@media only screen and (max-width: 1200px)
  .cursor
    display: none

</style>