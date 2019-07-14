<template>
  <v-container>
    <v-layout text-xs-center wrap >
        <audio-recorder show-download-button="false" show-upload-button="false"
          :after-recording="upload"
          :select-record="callback"/>
	<div  v-for="doc in documents">
	  <audio-player :src="blobToURL(doc.audioContent)" />
	  <audio id="audio" controls>
            <source id="source" :src="blobToURL(doc.audioContent)" />
          </audio>
        </div>
    </v-layout>
  </v-container>
</template>

<script>
  
  import { db } from '@/db'
  import firebase from 'firebase'
  let blobToBase64 = function(blob, callback) {
    let reader = new FileReader();
    reader.onload = function() {
        var dataUrl = reader.result;
        var base64 = dataUrl.split(',')[1];
        callback(base64);
    };
    reader.readAsDataURL(blob);
};


  export default {
    methods: {
      callback (data) {
        debugger
      },
      upload (data) {
        let storage = firebase.storage();
        let storageRef = storage.ref('audio/toTranslate');
        let uploadTask = storageRef.child(`${data.id}.mp3`).put(data.blob);
      },
      blobToURL (blob) {
        debugger
        return URL.createObjectURL(blob);
      }
    },
    data() {
      return {
        documents: [],
      }
    },
    firestore: {
      documents: db.collection('translate'),
    },
  }
</script>

<style>

</style>
