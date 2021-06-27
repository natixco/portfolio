<template>
  <header>
    <div class="center">
      <PolkaDots id="polka1" rows="6" cols="5" data-sal="fade" style="--sal-duration: .2s;"/>
      <div data-sal="slide-down" style="--sal-duration: .4s; --sal-delay: .1s">
        <h1 class="title">
          Hey, my <br>
          name's <span>Patrik</span>.<br>
          I'm a developer,
        </h1>
        <h1 class="title-small">and sometimes a designer 🙈</h1>
      </div>
    </div>
    <!-- <svg data-sal="slide-left" style="--sal-duration: .4s;" id="shape1" xmlns="http://www.w3.org/2000/svg" width="385.384" height="414.375" viewBox="0 0 385.384 414.375">
      <path d="M147.4,46.027a30,30,0,0,1,52.194,0L321.6,261.2A30,30,0,0,1,295.5,306H51.5a30,30,0,0,1-26.1-44.8Z" transform="matrix(0.259, 0.966, -0.966, 0.259, 295.573, 0)" fill="#f5b700"/>
    </svg> -->
    <svg data-sal="slide-left" style="--sal-duration: .4s;" id="shape1" xmlns="http://www.w3.org/2000/svg" width="165.582" height="295.721" viewBox="0 0 165.582 295.721">
      <path d="M99.947,358.2a30,30,0,0,1-28.979-22.239l-63.2-235.7A30,30,0,0,1,44.288,63.44L172.331,96.658V299.02L121,349.569A30.007,30.007,0,0,1,99.947,358.2Z" transform="translate(-6.749 -62.477)" fill="#f5b700"/>
    </svg>
  </header>
</template>

<style scoped lang="sass">
@import '../assets/_import'

header
  position: relative
  width: 100%
  height: 100vh !important

  #shape1
    position: absolute
    top: 100px
    right: 0

    path
      fill: color(accent)

  .center
    position: relative

    #polka1
      position: absolute
      top: -50px
      left: -60px

    .title
      font-size: 70px
      letter-spacing: -0.5px
      line-height: 90px
      white-space: nowrap
      width: max-content

      span
        color: color(accent)

    .title-small
      font-size: 22px
      font-weight: 300
      margin-top: 5px
      white-space: nowrap

@media only screen and (max-width: 1100px)
  header
    .center
      width: max-content

@media only screen and (max-width: 800px)
  header .center
    .title
      font-size: 60px
    .title-small
      font-size: 20px

@media only screen and (max-width: 600px)
  header .center
    .title
      font-size: 50px
      line-height: 65px

@media only screen and (max-width: 576px)
  header #shape1
    width: auto
    height: 200px

@media only screen and (max-width: 500px)
  header .center .title
    font-size: 40px
    line-height: 60px

@media only screen and (max-width: 400px)
  header .center .title
    font-size: 35px
    line-height: 50px

@media only screen and (max-width: 350px)
  header .center
    .title
      font-size: 25px
      line-height: 40px
    .title-small
      font-size: 18px

@media only screen and (max-width: 300px)
  header .center
    .title
      font-size: 22px
      line-height: 40px
    .title-small
      font-size: 16px
</style>
