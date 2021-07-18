<template>
  <a role="button" @click.prevent="switchTheme()" :aria-label="'Switch to ' + nextTheme + ' mode'" class="nav-link">
    <span key="dark" v-if="theme === 'dark'">
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z" stroke="currentColor" stroke-linejoin="round"></path></svg>
    </span>
    <span key="light" v-else-if="theme === 'light'">
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z" stroke="currentColor" stroke-linecap="square"></path></svg>
    </span>
    <span key="light" v-else>
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z" stroke="currentColor" stroke-linecap="square"></path></svg>
    </span>
  </a>
</template>

<script>
const themes = ['light', 'dark']

export default {
  name: 'ThemeSwitcher',

  data () {
    return {
      theme: ''
    }
  },

  computed: {
    nextTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex]
    }
  },

  methods: {
    switchTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      window.__setPreferredTheme(themes[nextIndex])
      this.theme = themes[nextIndex]
    }
  },

  async mounted () {
    // set default
    if (typeof window.__theme !== 'undefined') {
      this.theme = window.__theme
    }
  }
}
</script>