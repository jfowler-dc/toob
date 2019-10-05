<template>
  <div>
    <AppHeader pageTitle="Navigation" hamburger="false" />
    <nav>
      <ul>
        <li v-if="favs == true"><router-link to="/favorites">My Stops</router-link></li>
        <li v-else><router-link to="/login">My Stops</router-link></li>        
        <li><router-link to="/">All Trains</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
        <li v-if="favs == true" @click="logout">Log Out</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader'

import firebase from 'firebase'

export default {
  name: 'Navigation',
  data () {
    return {
      favs: false
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('stations')
      })
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      this.favs = true;
    }
  },
  components: {
    AppHeader
  }
}
</script>

<style scoped>
  nav {}
  nav ul {list-style:none; padding:0; margin:0; margin-top:25px;}
  nav li {font-size:46px; cursor:pointer; line-height:56px; font-weight:bold; margin-bottom:25px;}
  nav li a {color:#000; text-decoration:none;}
</style>
