<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>audio</span>
        <span class="font-weight-light">TRANSLATION DEMO</span>
      </v-toolbar-title>
      <v-btn flat href="https://github.com/marcus7777/Audio-Translation-Demo" target="_blank" >
        <span class="mr-2">github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
