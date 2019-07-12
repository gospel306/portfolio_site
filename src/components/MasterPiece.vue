<template>
  <div class="row">
    <div style="text-align: center;">
      <p class="masterpiece__titleCh">名作</p>
      <div
        style="width: 100px; border-bottom: 8px solid grey; margin: 0 auto; margin-bottom: 25px;"
      ></div>
      <p class="masterpiece__titleKo">
        <strong>명작</strong>, 매우 훌륭한 작품을 이르는 말이다. 걸작이라고도 부른다.
        <br />어쨌든 전 세계에서 이 말은
        <strong>최고의 작품</strong>으로 통한다.
      </p>
    </div>
    <v-container fluid grid-list-md>
      <v-layout wrap>
        <!-- 사진첨부 -->
        <v-flex xs12 sm4>
          <v-hover class="cursor">
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
              <v-img
                src="https://images.unsplash.com/photo-1481299490292-adef25f13c3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                aspect-ratio="2.75"
              ></v-img>
              <v-card-text class="pt-4" style="position: relative;">
                <v-btn absolute color="orange" class="white--text" fab large right top>
                  <v-icon>fa-image</v-icon>
                </v-btn>
                <div>
                  <h3 class="headline mb-2">사진 첨부</h3>
                  <div>
                    - 사진첨부기능 활성화 및 섬네일 표시
                    <br />- 이미지 배너를 랜덤 혹은 본인의 이미지로 선택
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>

        <!-- 한영번역 -->
        <v-flex xs12 sm4>
          <v-hover class="cursor">
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
              <v-img
                src="https://images.unsplash.com/photo-1530379768560-fac46435511d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                aspect-ratio="2.75"
              ></v-img>
              <v-card-text class="pt-4" style="position: relative;">
                <p v-if = "flag === 'A'">
                  <v-btn absolute color="orange" class="white--text" fab large right top  v-on:click="kotoen(text)"  >
                     <v-icon>fa-language</v-icon>
                   </v-btn>
                </p>
                <p v-else>
                  <v-btn absolute color="orange" class="white--text" fab large right top  v-on:click="entoko(text)"  >
                    <v-icon>fa-language</v-icon>
                  </v-btn>
                </p>
                <div>
                  <h3 class="headline mb-2">한/영 번역</h3>
                  <p id="ext">
                    {{text}}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>

        <!-- Gitlab 레포 -->
        <v-flex xs12 sm4>
          <v-hover class="cursor">
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
              <v-img
                src="https://images.unsplash.com/photo-1530379768560-fac46435511d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                aspect-ratio="2.75"
              ></v-img>
              <v-card-text class="pt-4" style="position: relative;">
                <v-btn absolute color="orange" class="white--text" fab large right top>
                  <v-icon>fa-language</v-icon>
                </v-btn>
                <div>
                  <h3 class="headline mb-2">Gitlab Grapth</h3>
                  <p>
                    Gitlab
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "MasterPiece",
  data() {
    return {
      flag: 'A',
      text: " 번역은 어떤 언어로 쓰인 글을 다른 언어로 된 상응하는 의미의 글로 전달하는 일이다. \n  정확한 번역을 위해서는 원전을 이해하기 위한 문화적인 배경지식과 옮겨오는 언어의 정확하고 문학적인 문장력이 필요하다."
    };
  },
  methods : {
    kotoen: function(text) {
      this.flag = 'B'
      axios({
        method : 'post',
        url : 'https://translation.googleapis.com/language/translate/v2',
        params  :{
          source : 'ko',
          target : 'en',
          q : text,
          key : 'AIzaSyAM3pZMOpmnKyKnhorj1s-LGK0hBe5gQbA',
        },
      }).then(res => {
        document.getElementById("ext").innerText = res.data.data.translations[0].translatedText;
      })

    },
    entoko: function(text) {
      this.flag = 'A'
      axios({
        method : 'post',
        url : 'https://translation.googleapis.com/language/translate/v2',
        params  :{
          source : 'en',
          target : 'ko',
          q : text,
          key : 'AIzaSyAM3pZMOpmnKyKnhorj1s-LGK0hBe5gQbA',
        },
      }).then(res => {
        document.getElementById("ext").innerText = res.data.data.translations[0].translatedText;
      })
    },
  }
};
</script>

<style>
.cursor {
  cursor: zoom-in;
}

.masterpiece__titleCh {
  font-size: 35px;
  font-family: "ZCOOL QingKe HuangYou", cursive;
  margin-top: 50px;
  margin-bottom: 0;
}

.masterpiece__titleKo {
  font-size: 15px;
  font-family: "Song Myung", serif;
  margin-top: 10px;
  margin-bottom: 30px;
  word-wrap: inherit;
}

.chinese {
  font-family: "ZCOOL QingKe HuangYou", cursive;
}
</style>