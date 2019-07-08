<template>
  <v-footer height="auto" color="primary lighten-1">
    <v-layout justify-center row wrap>
      <weather
       api-key="f3878217fcb9bcfb41a13f5e6ec031c6"
       title="Weather"
       latitude="36.355159"
       longitude="127.298340"
       language="en"
       units="uk">
      </weather>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2019 — Vue project<br/>
        <strong>Posted by : Hanbeom Park </strong><br/>
        <strong>Contact information: hb1398@naver.com</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
  import VueWeatherWidget from 'vue-weather-widget'
  import 'vue-weather-widget/dist/css/vue-weather-widget.css'

  export default{
    components:{
      'weather': VueWeatherWidget
    },
    methods:{
      location:function(){
        var lat = 0.0;
        var lon = 0.0;
        navigator.geolocation.getCurrentPosition(function(pos){
          this.lat = pos.coords.latitude;
          this.lon = pos.coords.longitude;
        });
      }
    }
  }
</script>