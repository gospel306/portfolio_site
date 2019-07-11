<template>
  <div>
    <!-- 1. 메인 이미지 배너 -->
    <ImgBanner
      imgSrc="https://images.unsplash.com/photo-1508157942875-586a83457569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
    >
      <div style="line-height:10vh;" slot="text1">
        <span class="banner_1">空手來空手去</span>
        <p class="banner_1_2">(공수래공수거)</p>
      </div>
      <div style="line-height: 6vh;" slot="text2">
        <span class="banner_2">
          <p>모든 사람은 빈 손으로 태어나 빈 손으로 떠난다.</p>
          <p>살아가면서 아무리 재물을 탐하고</p>
          <p>권력을 좇아도 결국 모두 부질없으므로,</p>
          <p>아등바등 욕심부리며 살 필요가 없다.</p>
        </span>
      </div>
    </ImgBanner>

    <!-- 2. About Us -->
    <AboutUs></AboutUs>
    
    <!-- 3. 기능 링크 -->
    <v-btn id="demo" v-on:click="translate(text)">글 번역하기</v-btn>

  </div>
</template>

<script>
const axios = require('axios')
import ImgBanner from "../components/ImgBanner";
import AboutUs from "../components/AboutUs";
import PortfolioList from "../components/PortfolioList";
import PostList from "../components/PostList";
import RepositoryList from "../components/RepositoryList";
// import Graph from "../components/RepositoryGraph";
export default {
  name: "HomePage",
  data() {
    return {
      text: "번역기능 확인하는 글"
    };
  },
  mounted(){
    this.ax()
  },
  components: {
    ImgBanner,
    AboutUs,
    PortfolioList,
    PostList,
    RepositoryList,
    // Graph
  },

  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
    translate: function(text) {
      axios({
<<<<<<< HEAD
        method : 'post',
        url : 'https://translation.googleapis.com/language/translate/v2',
        params  :{
          source : 'ko',
          target : 'en',
          q : text,
          key : 'AIzaSyAM3pZMOpmnKyKnhorj1s-LGK0hBe5gQbA',
        },
      }).then(res => { 
        console.log(res.data.data.translations[0].translatedText)
        document.getElementById("demo").innerHTML = res.data.data.translations[0].translatedText;
      }),
    axios.get("https://us-central1-webmobile-sub2-639ef.cloudfunctions.net/addMessage?text='번역'")
    },
    ax : function() {
      axios.get("https://us-central1-webmobile-sub2-639ef.cloudfunctions.net/addMessage?text='홈페이지방문'")
=======
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
>>>>>>> e8ef29470a16c4011c7af6416f8c9936fc38fd60
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
