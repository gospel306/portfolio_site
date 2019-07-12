<template>
  <div class="row">
    <div style="text-align: center;">
      <p class="masterpiece__titleCh">名作</p>
      <div style="width: 100px; border-bottom: 8px solid grey; margin: 0 auto; margin-bottom: 25px;"></div>
      <p class="masterpiece__titleKo">
        <strong>명작</strong>, 매우 훌륭한 작품을 이르는 말이다. 걸작이라고도 부른다.
        <br />어쨌든 전 세계에서 이 말은 <strong>최고의 작품</strong>으로 통한다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterPiece"
};
</script>

<style>
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