<template>
  <Header />
  <About />
  <div data-sal="fade" style="--sal-duration: .6s;">
    <Works />
    <Contact />
  </div>
  <Cursor />
</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Works from './components/Works.vue';
import Contact from './components/Contact.vue';
import Cursor from './components/Cursor.vue';
import sal from 'sal.js';

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
    sal({once: false, threshold: 0.17});

    document.title = 'Patrick Vislóczki';

    document.addEventListener('mousedown', (e) => {
      let type = e.target.type;
      if(type === 'text' || type === 'textarea' || type === 'submit') return;

      let color, isTextWhite = false;
      switch(this.color) {
        case 0: color = '#008BF8'; isTextWhite = true; break;
        case 1: color = '#04e762'; isTextWhite = false; break;
        case 2: color = '#731DD8'; isTextWhite = true; break;
        case 3: color = '#FF3C38'; isTextWhite = true; break;
        case 4: color = '#F5B700'; isTextWhite = false; break;
      }
      document.documentElement.style.setProperty('--color-accent', color);
      document.documentElement.style.setProperty('--color-text', isTextWhite ? 'white' : '#2F3437');

      if(this.color === 4) this.color = 0;
      else this.color += 1;
    });
  }
});
</script>

<style lang="sass">
@import './assets/_import'
@import '../node_modules/sal.js/dist/sal.css'

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Poppins'
  color: $gray
  transition: color .2s ease, fill .2s ease

body
  overflow-x: hidden
  cursor: url('./assets/cursor.png') 3 3, auto

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
