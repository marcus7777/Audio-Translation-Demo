<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
        <audio-recorder
          :attempts="0"
          :time="0"
          :headers="headers"
          :after-recording="callback"
          :select-record="callback"
          :before-upload="callback"
          :successful-upload="callback"
          :failed-upload="callback"/>
        <hr>
	<audio-player src=""/>
    </v-layout>
  </v-container>
</template>

<script>


  export default {
    methods: {
      callback (data) {
        debugger
        console.debug(data)
      }
    },
    data: () => ({
    })
  }
</script>

<style>

</style>
