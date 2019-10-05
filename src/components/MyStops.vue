<template>
  <div>
    <AppHeader pageTitle="My Stops" hamburger="true" />
    <p v-if="email != ''">{{email}}</p>
    <div id="favorites">
      <Train v-for="(s, index) in sortedArray" v-if="sortedArray.length > 0" :key="index" :star="true" :link="true" :address="s.Address" :lat="s.Lat" :lon="s.Lon" :stationName="s.Name" :code="s.Code" :lc1="s.LineCode1" :lc2="s.LineCode2" :lc3="s.LineCode3" :lc4="s.LineCode4" :lc5="s.LineCode5" />
      <p v-if="sortedArray.length <= 0">You don't have any stops. Go to the "All Trains" page and favorite some stations for them to show up on this page.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Train from '@/components/Train'
import AppHeader from '@/components/AppHeader'

import firebase from 'firebase'

export default {
  name: 'Wmata',
  data () {
    return {
      favorites: [],
      allStations: [],
      distance: '',
      email: '' || firebase.auth().currentUser.email
    }
  },
  methods: {
    getStation(sCode) {
      let url = 'https://api.wmata.com/Rail.svc/json/jStationInfo';
      axios
        .get(url, {
          params: {
            StationCode: sCode
          },
          headers: {
            api_key: '6c0afb2a0f824f0f9b85bfd174ecae6d'
          }
        })
        .then(response => {
          this.allStations.push(response.data)         
        })
        .catch(error => {
          console.log('Error: ' + error)
        })
    },
    loadFavorites() {
      if (Array.isArray(this.favorites)) {
        var fav;
        this.allStations = [];
        for (fav in this.favorites[this.favorites.length - 1]) {
          this.getStation(fav);
        }
      }else {
        this.getStation([this.favorites[this.favorites.length - 1]])
      }
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      firebase.database().ref('users/'+firebase.auth().currentUser.uid+'/favorites').on('value', snap => { 
        this.favorites.push(snap.val())
        this.loadFavorites()
      })
    }
  },
  computed: {
    sortedArray: function() {
      if (firebase.auth().currentUser) {
        function compare(a, b) {
          if (a.Name < b.Name)
            return -1;
          if (a.Name > b.Name)
            return 1;
          return 0;
        }
        return this.allStations.sort(compare);
      }
    }
  },
  components:{
    Train,
    AppHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {box-sizing:border-box; padding:10px 20px; border-radius:3px; background:#e7e7e7; display:inline-block; margin-bottom:20px;}
.line {padding:10px; background:#000; color:#fff; margin-left:10px; display:flex; box-sizing:border-box; align-items:center; justify-content:center; border-radius:100%; min-width:45px; min-height:45px; max-width:45px; max-height:45px;}
.line.RD {background:red;}
.line.BL {background:blue;}
.line.YL {background:yellow; color:#2c3e50;}
.line.OR {background:orange;}
.line.GR {background:green;}
.line.SV {background:silver; color:#2c3e50;}
.next-train {width:100%; border-bottom:1px solid; box-sizing:border-box; padding-bottom:20px; display:flex; align-items:center; padding-top:20px;} 
.next-train .line {margin-left:auto;}
#favorites {margin-top:25px;}
h4 {margin:0; margin-bottom:20px;}
h3 {width:100%; background:#e7e7e7; margin:0; padding:20px 0; margin-top:30px; box-sizing:border-box; padding-left:20px;}
</style>
