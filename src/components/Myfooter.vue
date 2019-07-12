<template>
  <v-footer height="auto" dark>
    <v-card class="flex" flat tile>
      <v-card-title class="grey lighten-3">
        <weather/>
      </v-card-title>
    <v-card-actions class="blue-grey darken-3">
    <v-layout class="footer_text" white--text align-center justify-space-between row fill-height>
      <!-- <v-flex class="footer_text" py-3 text-xs-center white--text xs12> -->
      <v-flex xs3>&copy; 2019.07. Come Empty, Return Empty.</v-flex>
      <v-flex xs3 class="footer_right">
        <a href="https://lab.ssafy.com/HanBeom_Park/webmobile-sub2"> Link to Gitlab Repository</a>
      </v-flex>
      <!-- </v-flex> -->
    </v-layout>
    </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
import weather from "./weather"
export default {
  components: {
    weather
  }
  
};
</script>

<style>
.footer_text {
  font-family: "Song Myung", serif;
  font-size: 1.0vw;
  padding: 15px;
}

a:link {
  text-decoration: none;
  color: white;
}
a:visited {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  color: lightblue;
}
.footer_right {
  text-align: right;
}
</style>