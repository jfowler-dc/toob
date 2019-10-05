<template>
  <div class="border" :class="lc1 + ' ' + lc2 + ' ' + lc3" >
    <h4>
      <router-link v-if="link == true" class="stationText" :to="{path: '/station/' + code}">{{stationName}}</router-link>
      <span v-else>{{stationName}}</span>
      <span class="lines" id="lines1" v-if="link == false">
        <span v-if="lc1" class="line" :class="lc1"></span>
        <span v-if="lc2" class="line" :class="lc2"></span>
        <span v-if="lc3" class="line" :class="lc3"></span>
        <span v-if="lc4" class="line" :class="lc4"></span>
      </span>
      <span @click="clickFav" v-if="link == true && auth == true" class="favorite">
        <i v-if="favoriteStar == false && favs != code" class="far fa-star"></i>
        <i v-else class="fas fa-star"></i>
      </span>
    </h4>
    <span class="lines" id="lines2" v-if="link == true">
      <span v-if="lc1" class="line" :class="lc1"></span>
      <span v-if="lc2" class="line" :class="lc2"></span>
      <span v-if="lc3" class="line" :class="lc3"></span>
      <span v-if="lc4" class="line" :class="lc4"></span>
    </span>
    <p v-if="link == false" class="address">
      <span>{{address.Street}}</span>, <br>
      <span>{{address.City}}</span>, 
      <span>{{address.State}}</span>
      <span>{{address.Zip}}</span>
    </p>
    <div v-if="link == false" class="options">
      <div @click="clickFav" class="btn" v-if="auth == true">
        <i v-if="favoriteStar == false && favs != code" class="far fa-star"></i>
        <i v-else class="fas fa-star"></i>
        <span>My Stop</span>
      </div>
      <div v-if="link == false" class="btn">
        <a target="_blank" :href="'https://maps.google.com/maps?q='+lat+','+lon">
          <i class="far fa-map"></i>
          <span>Directions</span>
        </a>
      </div>
    </div>
    <!-- <p v-if="geo == true">Approximately {{round(distance, 1)}} mi away</p> -->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Train',
  props: ['stationName', 'code', 'lc1', 'lc2', 'lc3', 'lc4', 'lc5', 'link', 'address', 'lat', 'lon'],
  data () {
    return {
      map: false,
      //distance: '',
      //geo: false,
      favoriteStar: false,
      favs: [],
      newFav: [],
      auth: false
    }
  },
  methods: {
    // UserLocation(position) {
    //   this.geo = true;
    //   this.distance = this.calcCrow(position.coords.latitude, position.coords.longitude, this.lat, this.lon);
    // },
    // calcCrow(lat1, lon1, lat2, lon2) {
    //   var R = 6371; // km
    //   var dLat = this.toRad(lat2-lat1);
    //   var dLon = this.toRad(lon2-lon1);
    //   var lat1 = this.toRad(lat1);
    //   var lat2 = this.toRad(lat2);

    //   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    //     Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    //   var d = R * c;
    //   return d * 0.62137;
    // },
    // toRad(Value) {
    //   return Value * Math.PI / 180;
    // },
    // round(num, places) {
    //   var multiplier = Math.pow(10, places);
    //   return Math.round(num * multiplier) / multiplier;
    // },
    slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    },
    clickFav() {
      if (this.favoriteStar == false) {
        this.favoriteStar = true;
        firebase.auth().onAuthStateChanged(function (user) {
          firebase.database().ref('/users').child(user.uid + '/favorites').update({[this.slugify(this.code)]: this.code})
        }.bind(this));
      } else {
        this.favoriteStar = false;
        this.newFav = [];
        firebase.auth().onAuthStateChanged(function (user) {
          firebase.database().ref('/users').child(user.uid + '/favorites').update({[this.slugify(this.code)]: null})
        }.bind(this));
      }
    }
  },
  mounted() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this.UserLocation);
    // }
    if (firebase.auth().currentUser) {
      this.auth = true;
      firebase.database().ref('users/'+firebase.auth().currentUser.uid+'/favorites').on('value', snap => {
        this.favs.push(snap.val())
        var fav; 
        for (fav in this.favs[this.favs.length - 1]) {
          this.newFav.push(fav.toUpperCase());
        }
        if (this.newFav.includes(this.code)) {
          this.favoriteStar = true;
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {border-bottom:1px solid #DDDDDD; box-sizing:border-box; padding-bottom:20px; margin-bottom:15px;}
h4 {display:flex; width:100%; align-items:center; font-size:19px; font-weight:bold; line-height:24px; margin:0; margin-bottom:10px; padding:0;}
a {text-decoration:none; width:100%; color:#000;}
span.lines {margin-left:auto; display:flex; align-items:center;}
span.line {color:#fff; margin-right:10px; display:flex; box-sizing:border-box; align-items:center; justify-content:center; border-radius:100%; min-width:20px; min-height:20px; max-width:20px; max-height:20px;}
.line.RD {background:#CB0A0A;}
.line.BL {background:#2856D1;}
.line.YL {background:#E6EF0B; color:#000;}
.line.OR {background:#E39D4C;}
.line.GR {background:#188D21;}
.line.SV {background:#BCBCBC;}
.options {display:flex; align-items:center;}
.options .btn {font-weight:bold; font-size:19px; line-height:24px; display:flex; align-items:center;  }
.options .btn:first-child {margin-right:auto;}
.options .btn span {margin-left:5px;}
.address {font-size:14px; line-height:18px; margin-bottom:25px;}
.favorite {margin-left:auto; padding-left:30px;}
</style>
