<script setup>
</script>

<template>
  <p>Click Me</p>
  <router-view style="position: absolute;top: 0;left: 0; z-index: 10;"></router-view>
  <css-doodle style="height: auto;top: 50%;height: 50%;position: absolute;left: 0;">
    :doodle {
    @grid: 1x20 / 100vmin;
    }
    @place-cell: center;
    width: @rand(50px, 200px);
    height: @rand(50px, 200px);
    transform: translate(@rand(-120%, 120%), @rand(-80%, 80%)) scale(@rand(.8, 2.8)) skew(@rand(45deg));
    clip-path: polygon(
    @r(0, 30%) @r(0, 50%),
    @r(30%, 60%) @r(0%, 30%),
    @r(60%, 100%) @r(0%, 50%),
    @r(60%, 100%) @r(50%, 100%),
    @r(30%, 60%) @r(60%, 100%),
    @r(0, 30%) @r(60%, 100%)
    );
    background: @pick(#f44336, #e91e63, #9c27b0, #673ab7, #3f51b5, #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3,
    #009688, #5ee463, #f8e645, #ffc107, #ff5722, #43f8bf, #e136eb, #f57c23, #32ed39);
    opacity: @rand(.5, .9);
    position: relative;
    top: @rand(-80%, 100%);
    left: @rand(-80%, 100%);
    animation: colorChange @rand(6.1s, 26.1s) infinite @rand(-.5s, -2.5s) linear alternate;
    @keyframes colorChange {
    100% {
    left: 0;
    top: 0;
    filter: hue-rotate(360deg);
    }
    }
  </css-doodle>
</template>

<style lang="scss">
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
}

body::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  backdrop-filter: blur(100px);
  z-index: 1;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #000;
  z-index: 10;
}
</style>
