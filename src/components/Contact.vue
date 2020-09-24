<template>
  <PolkaDots id="polka2" rows="20" cols="5"/>
  <div class="center">
    <Line text="nice to meet you! 👋" />
    <div class="contact-container">
      <div class="contact-inner-container">
        <ul class="contact-list">
          <li><Link src="https://github.com/natixco" text="GitHub" /></li>
          <li><Link src="https://twitter.com/natixco" text="Twitter" /></li>
          <li><Link src="mailto:patrikvisloczki@gmail.com" text="Email" /></li>
        </ul>
      </div>
      <div class="contact-inner-container">
        <form>
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
          <textarea placeholder="Message"></textarea>
          <button>Let's talk!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Line from './Line.vue';
import Link from './Link.vue';
import PolkaDots from './PolkaDots.vue';

export default defineComponent({
  name: 'Contact',
  components: {
    Line,
    Link,
    PolkaDots
  }
});
</script>

<style scoped lang="sass">
@import '../assets/_import'

#polka2
  position: absolute
  right: 0

.center
  left: 50%
  transform: translateX(-50%)
  padding-bottom: 100px

  .contact-container
    position: relative
    margin-top: 50px
    display: grid
    grid-template-rows: 1fr
    grid-template-columns: 1fr 1fr

    .contact-inner-container
      position: relative
      width: 100%

      .contact-list
        list-style: none
        li
          margin-bottom: 20px
          a
            cursor: pointer
            font-size: 20px

      form
        display: flex
        flex-direction: column
        width: 100%

        input, textarea
          width: 100%
          border: 2px solid rgba(0,0,0,.1)
          outline: none
          height: 50px
          border-radius: 12px
          padding: 0 15px
          font-size: 16px
          font-weight: 400
          color: $gray
          margin-bottom: 25px
          transition: all .3s ease-out
          &:hover, &:focus
            border-color: color(accent)

        textarea
          padding: 15px
          height: 120px
          min-height: 120px
          max-height: 250px
          resize: vertical

        button
          position: relative
          outline: none
          border: 2px solid transparent
          height: 50px
          border-radius: 12px
          background: color(accent)
          color: color(text)
          font-size: 18px
          cursor: pointer
          width: 150px
          transition: all .3s ease-out
          &:hover
            transform: translateY(-2px)
          &:focus
            background: color(accent-darker)

@media only screen and (max-width: 800px)
  .contact-container
    grid-template-rows: 2fr !important
    grid-template-columns: 1fr !important

    form
      margin-top: 40px

  #polka2
    display: none

</style>
