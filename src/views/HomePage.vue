<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
  
      <div style="line-height:1.2em;" slot="text">Nothing is impossible"<br></div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-flex xs12 sm8>
          <h2 class="headline mb-3 text-xs-center">About Me</h2>
          <p class="mr-4">안녕하세요, 현재 SSAFY에서 교육을 받고 있는 박한범이라고 합니다!<br/>처음으로 Vue 프로젝트를 진행하게 되었습니다. 
          어렵지만 차근차근 공부해나가서 Vue를 잘 사용하는 개발자가 되고 싶습니다. 잘 부탁 드립니다.</p>
        </v-flex>
        <v-flex hidden-xs-only sm4>
          <v-img :src="getImgUrl('profile.png')" aspect-ratio="1.5"/>
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Portfolio</h2>
          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Post</h2>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>


      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Project</h2>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'
export default {
	name: 'HomePage',
	components: {
		ImgBanner,
		PortfolioList,
		PostList,
		RepositoryList
	},
	methods: {
		getImgUrl(img) {
			return require('../assets/' + img)
		}
	},
}
</script>
