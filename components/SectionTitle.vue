<template>
  <div class="line-box">
    <div class="line"></div>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped lang="sass">
@import '../assets/_import'

.line-box
  position: relative
  display: flex
  flex-direction: row
  align-items: center
  user-select: none

  .line
    width: 25px
    height: 2px
    background: color(accent)
    margin-right: 10px

  p
    font-size: 18px
    font-weight: 400
    color: color(accent)
    text-transform: uppercase

</style>
