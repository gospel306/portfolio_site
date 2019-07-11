<template>
  <div>
    <v-img :src="imgSrc" aspect-ratio="1.7" min-height="720" max-height="700">
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 text-xs-center>
          <span class="text-shadow display-3 font-weight-bold">
            <slot name="text1" />
          </span>
        </v-flex>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs4 text-xs-center>hi</v-flex>
          <v-flex xs4 text-xs-center>hi</v-flex>
          <v-flex xs4 text-xs-center>hi</v-flex>
          <v-flex xs4 text-xs-center>hi</v-flex>
        </v-layout>
      </v-layout>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  props: {
    imgSrc: { type: String },
    text: { type: String }
  },
  methods: {}
};
</script>
<style>
.text-shadow {
  text-shadow: 0 0 15px rgb(255, 255, 255);
}
</style>
