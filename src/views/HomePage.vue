<template>
  <div>
    <!-- 메인 이미지 배너 -->
    <ImgBanner
      imgSrc="https://images.unsplash.com/photo-1508157942875-586a83457569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
    >
      <div style="line-height:10vh;" slot="text1">
        <span class="banner_1">空手來空手去</span>
      </div>
      <div style="line-height: 6vh;" slot="text2">
        <span class="banner_2">
          살아가면서 아무리 재물을 탐하고
          <br />권력을 좇아도 결국 모두 부질없으므로,
          <br />아등바등 욕심부리며 살 필요가 없다.
        </span>
      </div>
    </ImgBanner>

    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-flex xs12 sm8>
          <h2 class="headline mb-3 text-xs-center">About Us</h2>
          <p
            class="mr-4"
            style=" font-size: 2vw; font-weight: 400; line-height: 32px; margin: 5 24px;"
          >Hi</p>
          <button v-on:click="searchTerm">글 번역하기</button>
        </v-flex>
        <v-flex hidden-xs-only sm4>
          <v-img :src="getImgUrl('myImg.jpg')" aspect-ratio="1.5" />
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <!-- <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Portfolio</h2>
          <v-btn color="info" dark to="portfolioWriter" right="true"><v-icon size="25" class="mr-2">fa-plus</v-icon> 추가하기</v-btn>

          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>-->
      <!-- Post -->
      <!-- <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Post</h2>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>-->
      <!-- Github -->
      <!-- <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Project</h2>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>-->
    </v-container>
  </div>
</template>

<script>
import ImgBanner from "../components/ImgBanner";
import PortfolioList from "../components/PortfolioList";
import PostList from "../components/PostList";
import RepositoryList from "../components/RepositoryList";

export default {
  name: "HomePage",
  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    }
  }
};
</script>


<style>
.banner_1 {
  font-family: "ZCOOL QingKe HuangYou", cursive;
  white-space: nowrap;
}
.banner_2 {
  font-family: "Song Myung", serif;
  text-overflow: ellipsis;
}
</style>