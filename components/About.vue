<template>
  <div>
    <svg data-sal="slide-right" style="--sal-duration: .4s; --sal-delay: .1s" id="shape2" xmlns="http://www.w3.org/2000/svg" width="152.913" height="307.464" viewBox="0 0 152.913 307.464">
      <path data-name="Subtraction 1" d="M167,351.232V43.768a29.877,29.877,0,0,1,20.383,8.775L311.127,176.287a29.976,29.976,0,0,1,0,42.427L187.384,342.457A29.877,29.877,0,0,1,167,351.232Z" transform="translate(-167 -43.768)" fill="#f5b700"/>
    </svg>
    <div class="center" data-sal="fade" style="--sal-duration: .4s; --sal-delay: .1s">
      <SectionTitle text="about me"/>
      <p class="text">
        I live in Hungary and I've been programming for 6 years now. I enjoy creating beautiful sites and apps while trying to write quality code.
        Currently I work as a full stack developer with PHP. I have experience with Angular, Vue, React, TypeScript, NodeJS, Electron and C#.
      </p>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '../assets/_import'

#shape2
  position: absolute
  left: 0px

  path
    fill: color(accent)

.center
  left: 50%
  transform: translateX(-50%)
  padding-bottom: 350px

  .text
    font-weight: 400
    font-size: 24px
    letter-spacing: -0.5px
    line-height: 40px
    margin-top: 20px

@media only screen and (max-width: 1100px)
  .center
    padding-bottom: 300px

  #shape2
    width: 100px

@media only screen and (max-width: 800px)
  .center
    .text
      font-size: 22px

  #shape2
    display: none

@media only screen and (max-width: 600px)
  .center
    padding-bottom: 150px
    .text
      font-size: 20px

@media only screen and (max-width: 400px)
  .center
    .text
      font-size: 18px

</style>
