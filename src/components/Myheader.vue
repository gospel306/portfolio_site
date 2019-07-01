<template>
  <nav>
    <ul class="nav-container">
      <li class="nav-item"><a href="#">Life is Awesome</a></li>
      <li class="nav-item"><a href="#">About me</a></li>
      <li class="nav-item"><a href="#">Portfolio</a></li>
      <li class="nav-item"><a href="#">Post</a></li>
      <li class="nav-item"><a href="#">Project</a></li>
    </ul>
  </nav>
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