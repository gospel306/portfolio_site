<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
    
      <div style="line-height:1.2vw;" slot="text">Nothing is impossible<br></div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-flex xs12 sm8>
          <h2 class="headline mb-3 text-xs-center">About Me</h2>
          <p class="mr-4" style=" font-size: 2vw; font-weight: 400; line-height: 32px; margin: 5 24px;">●이름 | 박한범 Park HanBeom<br/>●생년월일 | 1993.12.01<br/>●최종학력 | 순천향대학교 의료IT공학과 졸업<br/> 
          ●자기소개 <br/> 현재 SSAFY 대전 캠퍼스에서 소프트웨어 교육을 받고 있습니다. 이번에는 Vue를 사용한 웹페이지 제작을 진행하고 있습니다!
          아직 Vue가 서툴지만 열심히 공부해서 많이 배우고 싶습니다.<br/> </p>
  
        </v-flex>
        <v-flex hidden-xs-only sm4>
          <v-img :src="getImgUrl('myImg.jpg')" aspect-ratio="1.5"/>
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Portfolio</h2>
          <v-btn color="info" dark to="portfolioWriter" right="true"><v-icon size="25" class="mr-2">fa-plus</v-icon> 추가하기</v-btn>

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
