<template>
  <div class="row" >
    <div class="column">
      <v-card class="card">
        <v-img
          class="white--text"
          height="200px"
          src="https://c.tribune.com.pk/2018/10/1830234-emmadirfani-1540029568.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <!-- <v-flex xs12 align-end flexbox>
                <span class="headline">박한범</span>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="member__name grey--text">박한범 팀장</span>
            <br />
            <span>대한민국 수원 출생</span>
            <br />
            <span>"코딩... 이렇게 쉬울 수가 있나요?"</span>
            
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </div>

    <div class="column">
      <v-card class="card">
        <v-img
          class="white--text"
          height="200px"
          src="https://c.tribune.com.pk/2018/10/1830234-emmadirfani-1540029568.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <!-- <v-flex xs12 align-end flexbox>
                <span class="headline">박한범</span>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="member__name grey--text">박한범 팀장</span>
            <br />
            <span>대한민국 수원 출생</span>
            <br />
            <span>"코딩... 이렇게 쉬울 수가 있나요?"</span>
            
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </div>

    <div class="column">
      <v-card class="card">
        <v-img
          class="white--text"
          height="200px"
          src="https://c.tribune.com.pk/2018/10/1830234-emmadirfani-1540029568.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <!-- <v-flex xs12 align-end flexbox>
                <span class="headline">박한범</span>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="member__name grey--text">박한범 팀장</span>
            <br />
            <span>대한민국 수원 출생</span>
            <br />
            <span>"코딩... 이렇게 쉬울 수가 있나요?"</span>
            
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </div>

    <div class="column">
      <v-card class="card">
        <v-img
          class="white--text"
          height="200px"
          src="https://c.tribune.com.pk/2018/10/1830234-emmadirfani-1540029568.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <!-- <v-flex xs12 align-end flexbox>
                <span class="headline">박한범</span>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="member__name grey--text">박한범 팀장</span>
            <br />
            <span>대한민국 수원 출생</span>
            <br />
            <span>"코딩... 이렇게 쉬울 수가 있나요?"</span>
            
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </div>

    <div class="column">
      <v-card class="card">
        <v-img
          class="white--text"
          height="200px"
          src="https://c.tribune.com.pk/2018/10/1830234-emmadirfani-1540029568.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <!-- <v-flex xs12 align-end flexbox>
                <span class="headline">박한범</span>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="member__name grey--text">박한범 팀장</span>
            <br />
            <span>대한민국 수원 출생</span>
            <br />
            <span>"코딩... 이렇게 쉬울 수가 있나요?"</span>
            
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      images: {
        park: '../../assets/park.jpg',
        yoo: require(),
        oh: require('../assets/oh.jpg'),
        jeong: require(),
        kim: require(),
      }
    }
  }
};
</script>
<style>
.member__name {
  font-size: 15px;
}

.headline {
  font-family: "Song Myung", serif;
}
.row {
  margin-top: 1vh;
}

/* 5명의 멤버 가지런히 ^^ */
.column {
  float: left;
  width: 20%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* 모바일 화면에선 한명씩 크게 ^^ */
@media screen and (max-width: 650px) {
  .column {
    width: 50%;
    display: block;
  }
}

/* Add some shadows to create a card effect */
.card {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.2);
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

/* Clear floats */
.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>
