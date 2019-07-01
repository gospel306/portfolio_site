<template>
<v-container>
 
      <!-- About Me -->
      <v-layout my-5>
        <v-flex xs12 sm8>
  <nav>
    <ul class="nav-container">
      
      <li class="nav-item"><router-link to="/">Life is Awesome</router-link></li>
      <li class="nav-item"><a href="#">About me</a></li>
      <li class="nav-item"><router-link to="/portfolio">Portfolio</router-link></li>
      <li class="nav-item"><a href="/post">Post</a></li>
      <li class="nav-item"><a href="/login">Project</a></li>
    </ul>
  </nav>
        </v-flex>
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