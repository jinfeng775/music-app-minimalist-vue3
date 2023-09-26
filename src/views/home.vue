<script setup></script>

<template>
  <div>
    <div class="albumImgWarp">
      <div class="albumImg"></div>
    </div>
    <div class="songInfo">
      <div class="songInfol">
        <div class="songInfoTitle">清明雨上</div>
        <div class="songWriter">许嵩</div>
      </div>
      <div class="songInfor">
        <van-icon name="like-o" size="24" />
      </div>
    </div>
    <div class="albumBtn">
      <button class="albumbtn albumbtnl">
        <van-icon name="arrow-left" color="#fff" size="30" />
      </button>
      <button class="albumbtn albumbtnlc">
        <!-- <van-icon name="play" color="#fff" size="40" /> -->
        <van-icon name="pause" color="#fff" size="50" />
        <!-- <van-icon name="stop" color="#fff" size="40" /> -->
      </button>
      <button class="albumbtn albumbtnr">
        <van-icon name="arrow" color="#fff" size="30" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.songInfo {
  margin-top: 60px;
  padding: 0 32px;
  height: 60px;
  .songInfol {
    float: left;
    letter-spacing: 0px;
    text-align: left;
    .songInfoTitle {
      height: 29px;
      color: rgb(0, 0, 0);
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
    }
    .songWriter {
      color: rgba(0, 0, 0, 0.3);
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      height: 20px;
    }
  }
  .songInfor {
    float: right;
    padding-top: 15px;
  }
}
.albumBtn {
  width: 210px;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  .albumbtnl,
  .albumbtnr {
    width: 48px;
    height: 48px;
  }
  .albumbtnlc {
    width: 82px;
    height: 82px;
    margin: 0 16px;
  }
  .albumbtn {
    vertical-align: middle;
    display: inline-block;
    border: 0;
    background: rgb(33, 34, 40);
    box-shadow: 5px 5px 15px 5px rgba(33, 34, 40, 0.3);
    border-radius: 115px;
  }
}
.albumImgWarp {
  position: relative;
  width: 326px;
  height: 326px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 32px;
  margin: 0 auto;
  margin-top: 90px;
  overflow: hidden;

  .albumImg {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 294px;
    height: 294px;
    background: url("../assets/images/123.png");
    background-size: cover;
    border-radius: 16px;
  }
}
</style>
