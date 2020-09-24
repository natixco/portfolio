<template>
  <div data-sal="fade" style="--sal-duration: .4s;">
    <div class="center">
      <Line text="works"/>
    </div>
    <ul class="list-container">
      <li class="list-item">
        <div class="center">
          <h1>Tabby</h1>
          <div class="description">
            <p>It's a simple timetable desktop application for Windows, made with Angular and Electron.</p>
            <Link src="https://github.com/natixco/tabby" text="Check out the source code" />
          </div>
        </div>
      </li>
      <li class="list-item">
        <div class="center">
          <h1>FivePD</h1>
          <div class="description">
            <p>It's a police modification for multiplayer GTA V (FiveM), written in C# in cooperation with my <a href="https://github.com/KDani-99" target="_blank">friend</a>.</p>
            <Link src="https://twitter.com/five_pd" text="Check it out" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Line from './Line.vue';
import Link from './Link.vue';

export default defineComponent({
  name: 'Works',
  components: {
    Line,
    Link
  }
});
</script>

<style scoped lang="sass">
@import '../assets/_import'

.center
  position: relative
  top: 0
  left: 50%
  transform: translateX(-50%)

.list-container
  position: relative
  margin-top: 40px
  padding-bottom: 150px

  .list-item
    list-style: none
    height: 200px
    border-bottom: 1px solid rgba(0,0,0,.1)
    &:first-child
      border-top: 1px solid rgba(0,0,0,.1)

    .center
      display: grid
      grid-template-columns: 1fr 2fr
      grid-template-rows: 1fr
      align-items: center
      height: 100%

      h1
        font-size: 35px
        font-weight: 700

      .description
        p
          font-size: 19px
          font-weight: 300
          margin-bottom: 20px

@media only screen and (max-width: 800px)
  .list-container
    padding-bottom: 100px

  .list-item
    height: auto !important
    padding: 40px 0

    .center
      grid-template-columns: 1fr !important
      grid-template-rows: 2fr !important
      height: auto

      h1
        font-size: 32px !important

      .description p
        font-size: 18px !important

@media only screen and (max-width: 600px)
  .list-item
    height: auto !important
    padding: 40px 0

    .center
      grid-template-columns: 1fr !important
      grid-template-rows: 2fr !important
      height: auto

      h1
        font-size: 30px !important

      .description p
        font-size: 16px !important

@media only screen and (max-width: 400px)
  .list-item
    height: auto !important
    padding: 40px 0

    .center

      h1
        font-size: 32px !important

      .description p
        font-size: 18px !important
        margin-bottom: 15px !important
</style>
