<template>
  <div>
    <!-- 메인 이미지 배너 -->
    <ImgBanner
      imgSrc="https://images.unsplash.com/photo-1508157942875-586a83457569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
    >
      <div style="line-height:10vh;" slot="text1">
        <span class="banner_1">空手來空手去</span>
        <p class="banner_1_2">(공수래공수거)</p>
      </div>
      <div style="line-height: 6vh;" slot="text2">
        <span class="banner_2">
          <p>살아가면서 아무리 재물을 탐하고</p>
          <p>권력을 좇아도 결국 모두 부질없으므로,</p>
          <p>아등바등 욕심부리며 살 필요가 없다.</p>
        </span>
        <button id="demo" v-on:click="translate(text)">글 번역하기</button>
      </div>
    </ImgBanner>

    <!-- <AboutUs
      imgSrc="https://images.unsplash.com/photo-1547202777-08ce4cf2fc15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <div style="" slot="text1">
        About Us
      </div>
      <div style="" slot="text2">
        Hi?
      </div>
    </AboutUs>-->

    <v-img
      src="https://images.unsplash.com/photo-1547202777-08ce4cf2fc15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      aspect-ratio="1.7"
      min-height="720"
      max-height="700"
    >
      <!-- About Me -->
      <v-layout my-5 align-center justify-center row fill-height>
        <v-flex xs12>
          <h2 class="mb-3 display-2 text-xs-center">About Us</h2>
          <p
            class=""
            style="font-size: 2vw; font-weight: 400; line-height: 32px; margin: 5 24px;"
          >
            Hi
            <br />Hi
            <br />Hi
            <br />Hi
            <br />Hi
            <br />Hi
            <br />Hi
          </p>
        </v-flex>
        <!-- <v-flex hidden-xs-only sm4>
          <v-img :src="getImgUrl('myImg.jpg')" aspect-ratio="1.5" />
        </v-flex> -->
      </v-layout>
    </v-img>
    <v-container>
    <v-layout my-8>
      <v-flex hidden-xs-only sm12>
        <a href="https://lab.ssafy.com/gospel306/test"><h2 class="headline mb-3 text-xs-center">Repository</h2></a>
        <Graph/>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
const axios = require('axios')
import ImgBanner from "../components/ImgBanner";
import AboutUs from "../components/AboutUs";
import PortfolioList from "../components/PortfolioList";
import PostList from "../components/PostList";
import RepositoryList from "../components/RepositoryList";
import Graph from "../components/RepositoryGraph";
export default {
  name: "HomePage",
  data() {
    return {
      text: "번역기능 확인하는 글"
    };
  },
  components: {
    ImgBanner,
    AboutUs,
    PortfolioList,
    PostList,
    RepositoryList,
    Graph
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
    translate: function(text) {
      axios({
        method: "post",
        url: "https://translation.googleapis.com/language/translate/v2",
        params: {
          source: "ko",
          target: "en",
          q: text,
          key: "AIzaSyAM3pZMOpmnKyKnhorj1s-LGK0hBe5gQbA"
        }
      }).then(res => {
        console.log(res.data.data.translations[0].translatedText);
        document.getElementById("demo").innerHTML =
          res.data.data.translations[0].translatedText;
      });
    }
  }
};
</script>


<style>
.body {
  font-family: "Song Myung", serif;
}
.banner_1 {
  font-family: "ZCOOL QingKe HuangYou", cursive;
  white-space: nowrap;
}
.banner_1_2 {
  font-family: "Song Myung", serif;
  white-space: nowrap;
  font-size: 35px;
}
.banner_2 {
  font-family: "Song Myung", serif;
  white-space: nowrap;
}
</style>
