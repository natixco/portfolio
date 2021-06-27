<template>
  <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap">
    </head>
    <Header />
    <About />
    <div data-sal="fade" style="--sal-duration: .6s;">
      <Works />
      <Contact />
    </div>
    <CustomCursor />
  </div>
</template>

<script>
import sal from 'sal.js'

export default {
  data: () => ({
    color: 0
  }),
  mounted() {
    sal({once: false, threshold: 0.17});

    document.addEventListener('mousedown', (e) => {
      if(e.target.dataset.colorchange === 'false') return;

      let color, colorDarker, isTextWhite = false;
      switch(this.color) {
        case 0:
          color = 'hsl(206, 100%, 49%)';
          colorDarker = 'hsl(206, 100%, 44%)';
          isTextWhite = true;
          break;
        case 1:
          color = 'hsl(145, 97%, 46%)';
          colorDarker = 'hsl(145, 97%, 41%)';
          isTextWhite = false;
          break;
        case 2:
          color = 'hsl(268, 76%, 48%)';
          colorDarker = 'hsl(268, 100%, 38%)';
          isTextWhite = true;
          break;
        case 3:
          color = 'hsl(1, 100%, 61%)';
          colorDarker = 'hsl(1, 80%, 51%)';
          isTextWhite = true;
          break;
        case 4:
          color = 'hsl(45, 100%, 48%)';
          colorDarker = 'hsl(45, 100%, 43%)';
          isTextWhite = false;
          break;
      }
      document.documentElement.style.setProperty('--color-accent', color);
      document.documentElement.style.setProperty('--color-accent-darker', colorDarker);
      document.documentElement.style.setProperty('--color-text', isTextWhite ? 'white' : '#2F3437');

      if(this.color === 4) this.color = 0;
      else this.color += 1;
    });
  }
}
</script>


<style lang="sass">
@import '../assets/_import'

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Poppins'
  color: $gray
  transition: color .3s ease, fill .3s ease

html
  overflow-x: hidden

body
  overflow-x: hidden
  cursor: url('../assets/cursor.png') 3 3, auto

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

