<template>
  <div>
    <AppHeader pageTitle="Map" />
    <div id="mapContainer">
      <iframe src="../static/2019-System-Map.pdf" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader'
export default {
  name: 'TrainMap',
  data () {
    return {

    }
  },
  methods: {
    
  },
  mounted() {

  },
  components: {
    AppHeader
  }
}
</script>

<style scoped>
  #mapContainer {margin-top:25px; height:100%; width:100%; min-height:500px; display:flex; position:relative;}
  #mapContainer iframe {width:100%; height:100%; position:absolute; top:0; left:0;}
</style>
