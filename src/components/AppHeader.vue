<template>
  <div class="header">
    <router-link to="/navigation"><i class="fas fa-bars"></i></router-link>
    <h1>{{pageTitle}}</h1>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'AppHeader',
  props: ['pageTitle', 'hamburger'],
  data () {
    return {

    }
  },
  methods: {
    
  },
  mounted() {

  },
  components: {

  }
}
</script>

<style scoped>
.header {display:flex; align-items:center; width:100%; position:relative; border-bottom:4px solid #000; padding-bottom:25px; margin-bottom:0px; padding-top:20px;}
.header .fas {font-size:30px;}
.header a {display:flex; text-decoration:none; color:#000;}
h1 {font-size:38px; line-height:46px; color:#000; width:100%; text-align:center; margin-bottom:0px; margin-top:0; padding-bottom:0;}
</style>
