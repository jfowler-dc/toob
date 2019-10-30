<template>
  <div>
    <AppHeader pageTitle="All Trains" hamburger="true" />
    <div class="sticky">
      <div class="bord">
        <input v-model="filterInput" id="input" placeholder="Search for a station" v-on:keyup="sort" type="text">
      </div>
      <div class="bord lines">
        <div @click="clickGetColorId('RD')" class="line RD"><i v-if="red == true" class="fas fa-check-circle"></i></div>
        <div @click="clickGetColorId('BL')" class="line BL"><i v-if="blue == true" class="fas fa-check-circle"></i></div>
        <div @click="clickGetColorId('YL')" class="line YL"><i v-if="yellow == true" class="fas fa-check-circle"></i></div>
        <div @click="clickGetColorId('OR')" class="line OR"><i v-if="orange == true" class="fas fa-check-circle"></i></div>
        <div @click="clickGetColorId('GR')" class="line GR"><i v-if="green == true" class="fas fa-check-circle"></i></div>
        <div @click="clickGetColorId('SV')" class="line SV"><i v-if="silver == true" class="fas fa-check-circle"></i></div>
      </div>
    </div>
	  <div id="trains">
      <Train v-for="(s, index) in sortedArray" :key="index" :stationName="s.Name" :address="s.Address" :lat="s.Lat" :lon="s.Lon" :link="true" :code="s.Code" :lc1="s.LineCode1" :lc2="s.LineCode2" :lc3="s.LineCode3" :lc4="s.LineCode4" :lc5="s.LineCode5" /> 
    </div>
  </div>
</template>

<script>
import Train from '@/components/Train'
import AppHeader from '@/components/AppHeader'

import axios from 'axios';
import firebase from 'firebase';

export default {
  name: 'Stations',
  data () {
    return {
      allStations: [],
      filterInput: '',
      red: false,
      blue: false, 
      yellow: false, 
      orange: false,
      green: false,
      silver: false,
      selectedColors: []
    }
  },
  methods: {
    getAllStations() {
      let url = 'https://api.jorofo.com/wmata/?url=jStations';
      axios
        .get(url)
        .then(response => {
          this.allStations = response.data.Stations
        })
        .catch(error => {
          console.log('Error: ' + error)
        })
    },
    removeA(arr) {
      var what, a = arguments, L = a.length, ax;
      while (L > 1 && arr.length) {
          what = a[--L];
          while ((ax= arr.indexOf(what)) !== -1) {
              arr.splice(ax, 1);
          }
      }
      return arr;
    },
    sort() {
      var value = this.filterInput.toLowerCase();
      $("#trains .border").filter(function() {
        $(this).toggle($(this).find('.stationText').text().toLowerCase().indexOf(value) > -1)
      });
    },
    getColor(color, colorCode) {
      // debugger;
      if (color == false) {
        color = true;
        this.selectedColors.push(colorCode)
      } else {
        color = false;
        this.removeA(this.selectedColors, colorCode)
      }
      console.log(color)
    },
    clickGetColorId(e) {
      $('#trains .border').hide()
      switch (e) {
        case 'RD':
          let c = this.red;
          //console.log(c)
          // if (this.red == false) {
          //   this.red = true;
          //   this.selectedColors.push('RD')
          // } else {
          //   this.red = false;
          //   this.removeA(this.selectedColors, 'RD')
          // }
          this.getColor(c, 'RD')
          break;
        case 'BL':
          if (this.blue == false) {
            this.blue = true;
            this.selectedColors.push('BL')
          } else {
            this.blue = false;
            this.removeA(this.selectedColors, 'BL')
          }
          break;
        case 'YL':
          if (this.yellow == false) {
            this.yellow = true;
            this.selectedColors.push('YL')
          } else {
            this.yellow = false;
            this.removeA(this.selectedColors, 'YL')
          }
          break;
        case 'OR':
          if (this.orange == false) {
            this.orange = true;
            this.selectedColors.push('OR')
          } else {
            this.orange = false;
            this.removeA(this.selectedColors, 'OR')
          }
          break;
        case 'GR':
          if (this.green == false) {
            this.green = true;
            this.selectedColors.push('GR')
          } else {
            this.green = false;
            this.removeA(this.selectedColors, 'GR')
          }
          break;
        case 'SV':
          if (this.silver == false) {
            this.silver = true;
            this.selectedColors.push('SV')
          } else {
            this.silver = false;
            this.removeA(this.selectedColors, 'SV')
          }
      }

      $('#trains .border').hide()

      var classes = '\\b(' + this.selectedColors.join('|') + ')\\b',
      regex = new RegExp(classes, 'i');

      $('#trains .border').each(function() {
        var elClasses = ' ' + $(this).attr('class').replace(/\s+/, ' ') + ' ';
        if (regex.test(elClasses)) {
          $(this).show();
        }
      })
    }
  },
  mounted() {
    this.getAllStations()
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.Name < b.Name)
          return - 1;
        if (a.Name > b.Name)
          return 1;
        return 0;
      }

      return this.allStations.sort(compare);
    }
  },
  components: {
    Train,
    AppHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bord {width:100%; box-sizing:border-box; padding:10px 0; border-bottom:2px solid #000;}
  .lines {justify-content:space-between; display:flex; margin-bottom:30px;}
  .line {color:#fff; font-size:25px; line-height:30px; font-weight:bold; display:flex; box-sizing:border-box; align-items:center; justify-content:center; border-radius:100%; min-width:35px; min-height:35px; max-width:35px; max-height:35px;}
  .line.RD {background:#CB0A0A;}
  .line.BL {background:#2856D1;}
  .line.YL {background:#E6EF0B;}
  .line.OR {background:#E39D4C;}
  .line.GR {background:#188D21;}
  .line.SV {background:#BCBCBC;}
  .sticky {position:sticky; top:0; width:100%; background:#fff;}
  #input {width:100%; height:40px; font-weight:light; padding:0 20px; border-radius:30px; border:2px solid #E6E6E6; box-sizing:border-box; }
</style>
