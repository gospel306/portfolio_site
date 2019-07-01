<template>
<v-container>
 
      <!-- About Me -->
      <v-layout>
  <nav>
    <ul class="nav-container">
      <v-flex xs12>
      <li class="nav-item"><router-link to="/home">Life is Awesome</router-link></li>
      </v-flex>
      <v-flex xs12>
      <li class="nav-item"><a href="#">About me</a></li>
      </v-flex>
      <v-flex xs12>
      <li class="nav-item"><router-link to="/portfolio">Portfolio</router-link></li>
      </v-flex>
      <v-flex xs12>
      <li class="nav-item"><a href="/post">Post</a></li>
      </v-flex>
      <v-flex xs12>
      <li class="nav-item"><a href="/login">Project</a></li>
      </v-flex>    
    </ul>
  </nav>
      </v-layout>
</v-container>
</template>

<style>

.nav-container{
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: darkslategrey;
  list-style-type: none;
}
.nav-item{
  padding: 15px;
  cursor: pointer;
}
.nav-item a{
  text-align: center;
  text-decoration: none;
  color: white;
}
.nav-item:nth-child(1){
  background-color: lightseagreen;
}
.nav-item:hover{
  background-color: grey;
}
.nav-container{
  position: fixed;
  top: 0;
}
</style>