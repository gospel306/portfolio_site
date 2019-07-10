<template>
  <v-footer height="auto" color="light-blue lighten-5">
    <v-layout justify-center row wrap>
      <weather
       api-key="f3878217fcb9bcfb41a13f5e6ec031c6"
       title="Weather"
       :latitude="latitude"
       :longitude="longitude"
       language="en"
       units="uk">
      </weather>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2019 — Vue project<br/>
        <strong>Posted by : 공수래공수거 </strong><br/>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
  import VueWeatherWidget from 'vue-weather-widget'
  import 'vue-weather-widget/dist/css/vue-weather-widget.css'

  export default{
    data(){
      return{
        latitude: '',
        longitude: ''
      }
    },
    components:{
      'weather': VueWeatherWidget
    },
    mounted(){
      var vm = this
      navigator.geolocation.getCurrentPosition(function(pos){
        vm.latitude = pos.coords.latitude.toString()
        vm.longitude = pos.coords.longitude.toString()
      })
    }
  }
</script>