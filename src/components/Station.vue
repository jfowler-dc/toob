<template>
  <div>
    <AppHeader v-if="allStations.length > 0" :pageTitle="allStations[0].Name" hamburger="true" />
    <div id="station">
      <Train v-for="(s, index) in allStations" :key="index" v-if="s.Code == stationId" :link="false" :address="s.Address" :lat="s.Lat" :lon="s.Lon" :stationName="s.Name" :code="s.Code" :lc1="s.LineCode1" :lc2="s.LineCode2" :lc3="s.LineCode3" :lc4="s.LineCode4" :lc5="s.LineCode5" />
    </div>
    <!-- <div class="grid" v-if="stationTimes.length > 0">
      <p>
        <span v-for="t in todaysHours">
          First Train: {{t.firstTrain}}am <br>
          Last Train: {{t.lastTrain}} <br>
          Opening Time: {{t.openingTime}}am
        </span>
      </p>
    </div> -->

    <div class="flex">
      <h3>This Way</h3>
    </div>
    <div class="next-train" v-for="t in nextTrains" v-if="t.Group == 1">
      <span class="line" :class="t.Line">{{t.Line}}</span>
      <h4>{{t.DestinationName}}</h4>
      <span v-if="t.Min == 'ARR' || t.Min == 'BRD' || t.Min == '---' || t.Min == 'DLY'" class="arrival">{{t.Min}}</span><span v-else-if="t.Min == ''" class="arrival">NA</span><span v-else class="arrival">{{t.Min}} Min</span>
    </div>

    <div class="flex">
      <h3>That Way</h3>
    </div>
    <div class="next-train" v-for="t in nextTrains" v-if="t.Group == 2">
      <span class="line" :class="t.Line">{{t.Line}}</span>
      <h4>{{t.DestinationName}}</h4>
      <span v-if="t.Min == 'ARR' || t.Min == 'BRD' || t.Min == '---' || t.Min == 'DLY'" class="arrival">{{t.Min}}</span><span v-else-if="t.Min == ''" class="arrival">NA</span><span v-else class="arrival">{{t.Min}} Min</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Train from '@/components/Train'
import AppHeader from '@/components/AppHeader'

// need to rework a lot of things in this component... its been so long 
// since I wrote this I can't remember my thought process :(


export default {
  name: 'Station',
  data () {
    return {
      nextTrains: [],
      allStations: [],
      stationTimes: [],
      stationId: '',
      timer: 30,
      currentHour: '',
      currentMinute: '',
      day: '',
      startTime: '',
      startHour: '',
      startMinute: '',
      todaysHours: []
    }
  },
  methods: {
    theNextTrain() {
      let url = 'https://api.jorofo.com/wmata/?url=GetPrediction&stationId='+this.stationId
      //let url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + this.stationId;
      axios
        .get(url)
        .then(response => {
          this.nextTrains = response.data.Trains
        })
        .catch(error => {
          console.log('Error: ' + error)
        });
    },
    getThisStation() {
      let url = 'https://api.jorofo.com/wmata/?url=jStationInfo&stationCode=' + this.stationId;
      axios
        .get(url)
        .then(response => {
          this.allStations.push(response.data)
        })
        .catch(error => {
          console.log('Error: ' + error)
        })
    },
    getStationTimes() {
      let url = 'https://api.jorofo.com/wmata/?url=jStationInfo&stationCode=' + this.stationId;
      axios
        .get(url)
        .then(response => {
          this.stationTimes.push(response.data.StationTimes[0])
          this.startAppTime(this.makeTimer())
        })
        .catch(error => {
          console.log('Error: ' + error)
        })
    },
    makeStationId() {
      this.stationId = this.$route.params.pageSlug;
    },
    makeTimer() {
      setInterval(function(){
        this.timer = this.timer - 1;
      }.bind(this), 1000)
    },
    runNextTrain() {
      this.theNextTrain()

      setInterval(function(){
        this.timer = 30;
        this.theNextTrain() // uncomment to make the trains reload
      }.bind(this), 30000)
    },
    getCurrentDayTime() {
      let d = new Date();
      this.currentHour = d.getHours();
      this.currentMinute = d.getMinutes();
      this.day = d.getDay();
    },
    startAppTime(func) {
      if (this.stationTimes.length > 0) {
        switch (this.day) {
          case 0:
            this.startTime = this.stationTimes[0].Sunday.OpeningTime;
            this.todaysHours.push({openingTime: this.stationTimes[0].Sunday.OpeningTime, firstTrain:this.stationTimes[0].Sunday.FirstTrains[0].Time, lastTrain:this.stationTimes[0].Sunday.LastTrains[0].Time})
            break;
          case 1:
            this.startTime = this.stationTimes[0].Monday.OpeningTime;
            this.todaysHours.push({openingTime: this.stationTimes[0].Monday.OpeningTime, firstTrain:this.stationTimes[0].Monday.FirstTrains[0].Time, lastTrain:this.stationTimes[0].Monday.LastTrains[0].Time})
            break;
          case 2:
             this.startTime = this.stationTimes[0].Tuesday.OpeningTime;
             this.todaysHours.push({openingTime: this.stationTimes[0].Tuesday.OpeningTime, firstTrain:this.stationTimes[0].Tuesday.FirstTrains[0].Time, lastTrain:this.stationTimes[0].Tuesday.LastTrains[0].Time})
            break;
          case 3:
            this.startTime = this.stationTimes[0].Wednesday.OpeningTime;
            this.todaysHours.push({openingTime: this.stationTimes[0].Wednesday.OpeningTime, firstTrain:this.stationTimes[0].Wednesday.FirstTrains[0].Time, lastTrain:this.stationTimes[0].Wednesday.LastTrains[0].Time})
            break;
          case 4:
            this.startTime = this.stationTimes[0].Thursday.OpeningTime;
            this.todaysHours.push({openingTime: this.stationTimes[0].Thursday.OpeningTime, firstTrain:this.stationTimes[0].Thursday.FirstTrains[0].Time, lastTrain:this.stationTimes[0].Thursday.LastTrains[0].Time})
            break;
          case 5:
            this.startTime = this.stationTimes[0].Friday.OpeningTime;
            this.todaysHours.push({openingTime: this.stationTimes[0].Friday.OpeningTime, firstTrain:this.stationTimes[0].Friday.FirstTrains[0].Time, lastTrain:this.stationTimes[0].Friday.LastTrains[0].Time})
            break;
          case 6:
            this.startTime = this.stationTimes[0].Saturday.OpeningTime;
            this.todaysHours.push({openingTime: this.stationTimes[0].Saturday.OpeningTime, firstTrain:this.stationTimes[0].Saturday.FirstTrains[0].Time, lastTrain:this.stationTimes[0].Saturday.LastTrains[0].Time})
        }
        this.startHour = this.startTime.split(':')[0];
        this.startMinute = this.startTime.split(':')[1];
        if (func && this.currentHour >= parseInt(this.startHour) && this.currentMinute >= parseInt(this.startMinute)) {
          func;
        }
      }
    }
  },
  mounted() {
    this.makeStationId()
    this.getCurrentDayTime()
    this.getThisStation()
    this.getStationTimes()
    this.startAppTime(this.runNextTrain())
  },
  components:{
    Train,
    AppHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {color:#fff; background:#000; margin-right:10px; font-size:25px; line-height:30px; font-weight:bold; display:flex; box-sizing:border-box; align-items:center; justify-content:center; border-radius:100%; min-width:50px; min-height:50px; max-width:50px; max-height:50px;}
.line.RD {background:#CB0A0A;}
.line.BL {background:#2856D1;}
.line.YL {background:#E6EF0B; color:#000;}
.line.OR {background:#E39D4C;}
.line.GR {background:#188D21;}
.line.SV {background:#BCBCBC;}
.next-train {width:100%; border-bottom:1px solid #DDDDDD; box-sizing:border-box; padding-bottom:20px; display:flex; align-items:center; padding-top:20px;} 
#station {margin-top:15px;}
.flex {display:flex;  margin-top:30px; align-items:center; justify-content:center;}
h4 {display:flex; align-items:center; font-size:19px; font-weight:bold; line-height:24px; margin:0; padding:0; margin-right:auto;}
h3 {font-size:24px; line-height:29px; font-weight:bold; text-align:center; display:inline-block; border-bottom:2px solid #000; padding:0; margin:0; padding:0; box-sizing:border-box;}
.grid {display:grid; grid-template-columns: repeat(2, [col] 1fr); grid-gap:20px; width:100%;}
span.arrival {font-size:30px; font-weight:bold; line-height:37px; color:#000;}
</style>
