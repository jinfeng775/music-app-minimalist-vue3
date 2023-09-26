<script setup></script>

<template>
  <router-view
    id="app"
    style="
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 10;
    "
  ></router-view>
  <css-doodle
    style="height: auto; top: 10%; height: 60%; position: absolute; left: 0"
  >
    :doodle { @grid: 1x20 / 100vmin; } @place-cell: center; width:
    @rand(150px,300px); height: @rand(30px, 100px); transform:
    translate(@rand(-120%, 120%), @rand(-80%, 80%)) scale(@rand(.8, 2.8))
    skew(@rand(45deg)); clip-path: polygon( @r(0, 30%) @r(0, 50%), @r(30%, 60%)
    @r(0%, 30%), @r(60%, 100%) @r(0%, 50%), @r(60%, 100%) @r(50%, 100%), @r(30%,
    60%) @r(60%, 100%), @r(0, 30%) @r(60%, 100%) ); background: @pick(#3CCDFF,
    #FF8139, #E65EFF, #FFDD47 , #FF4545, #FF5AA6,#39FF95,#47FFF0,#2A39FF );
    opacity: @rand(.8, .9); position: relative; top: @rand(-80%, 100%); left:
    @rand(-80%, 100%); animation: colorChange @rand(6.1s, 10.1s) infinite
    @rand(-.5s, -2.5s) linear alternate; @keyframes colorChange { 100% { left:
    0; top: 0; filter: hue-rotate(360deg); } }
  </css-doodle>
</template>

<style lang="scss">
#app {
  font-family: Montserrat;
  height: 100%;
}
html,
body {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #fff;
  font-family: Montserrat;
}

body::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  backdrop-filter: blur(60px);
  z-index: 1;
}
</style>
