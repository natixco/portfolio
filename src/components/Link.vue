<template>
  <a class="link" :href="src" target="_blank">{{text}}</a>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Link',
  props: ['text', 'src']
});
</script>

<style scoped lang="sass">
@import '../assets/_import'

.link
  position: relative
  font-weight: 400
  text-decoration: none
  padding: 3px 5px
  transition: color .2s ease
  &::before
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 0
    height: 100%
    background: color(accent)
    transition: all .2s ease
    z-index: -99
  &::after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 1px
    background: color(accent)
    transition: all .3s ease-out
  &:hover::before
    width: 100%
</style>
