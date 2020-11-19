export default {
  target: 'server',
  ssr: true,
  head: {
    title: 'Patrik Vislóczki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><text y="24" font-size="26">🖐</text></svg>'
      }
    ]
  },
  css: [
    '@/assets/vars.css',
    '@/node_modules/sal.js/dist/sal.css'
  ],
  plugins: [
    {
      src: '~/plugins/sal',
      mode: 'client'
    }
  ],
  components: true,
  buildModules: [],
  modules: [],
  build: {}
}
