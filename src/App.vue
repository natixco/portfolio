<template>
  <Header />
  <About />
  <Works />
  <Contact />
  <Cursor />
</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Works from './components/Works.vue';
import Contact from './components/Contact.vue';
import Cursor from './components/Cursor.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    About,
    Works,
    Contact,
    Cursor
  },
  data: () => ({
    color: 0
  }),
  mounted() {
    document.title = 'Patrick Visloczki';

    document.addEventListener('mousedown', (e) => {
      let type = e.target.type;
      if(type === 'text' || type === 'textarea' || type === 'submit') return;

      let color;
      switch(this.color) {
        case 0: color = '#008BF8'; break;
        case 1: color = '#04e762'; break;
        case 2: color = '#dc0073'; break;
        case 3: color = '#F5B700'; break;
      }
      document.documentElement.style.setProperty('--color-accent', color);

      if(this.color === 3) this.color = 0;
      else this.color += 1;
    });
  }
});
</script>

<style lang="sass">
@import './assets/_import'

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Poppins'
  color: $gray

body
  overflow-x: hidden

.center
  position: relative
  z-index: 9999
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  width: 50vw

::selection
  background: color(accent)
  color: white

@media only screen and (max-width: 1100px)
  .center
    width: 70vw

@media only screen and (max-width: 800px)
  .center
    width: 80vw

@media only screen and (max-width: 600px)
  .center
    width: 80vw

@media only screen and (max-width: 400px)
  .center
    width: 80vw

</style>
