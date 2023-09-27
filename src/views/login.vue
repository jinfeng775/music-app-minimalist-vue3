<template>
  <div class="login">
    <div class="title">探索生活,探索你</div>
    <div class="welcome">欢迎收听老王音乐app</div>
    <div class="tel">
      <van-field
        class="telInput"
        label-width="40px"
        v-model="value"
        type="tel"
        label="+86"
        :clickable="true"
      />
      <button @click="login" class="loginBtn">
        <van-icon name="down" color="#fff" size="30" />
      </button>
    </div>
    <div class="disclaimer">
      <div>注册表示你已经同意</div>
      <div>老王音乐app用户隐私协议</div>
    </div>
  </div>
</template>
<script>
import router from "../router";
import { ref } from "vue";
import { testLogin } from "@/api/test";

export default {
  setup() {
    const login = () => {
      const data = {
        u: "123123",
      };
      testLogin(data).then((res) => {
        console.log(
          "%c Line:84 🌶 res",
          "font-size:16px;color:#ffffff;background:#ffdd4d",
          res
        );
      });
    };
    const value = ref("");
    const onClick = () => {
      console.log(
        "%c Line:45 🍐 onClick",
        "font-size:18px;color:#ffffff;background:#4169E1",
        "onClick"
      );
      // router.push("/home");
    };
    return {
      onClick,
      login,
      value,
    };
  },
};
</script>
<style lang="scss" scoped>
.login {
  padding: 30px;
  .disclaimer {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-align: center;
    color: rgb(0, 0, 0);
    padding-top: 400px;
    & > div {
      margin-bottom: 20px;
    }
  }
  .tel {
    position: relative;
    margin-top: 30px;
    float: left;
    width: 100%;
    height: 55px;
    overflow: hidden;
    .loginBtn {
      border-radius: 50%;
      position: absolute;
      width: 48px;
      height: 48px;
      background: rgb(33, 34, 40);
      border: 0;
      top: 0;
      right: 0px;
      overflow: hidden;
      transform: rotate(-90deg);
    }
    .telInput {
      width: 247px;
      overflow: hidden;

      background: none;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
      :deep(#van-field-1-label) {
        font-size: 20px;
      }
      :deep(#van-field-1-input) {
        font-family: Arial;
        color: rgba(0, 0, 0, 0.6);
        font-size: 20px;
        font-weight: 100;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }
  .title {
    height: 24px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 90px;
  }
  .welcome {
    height: 47px;
    color: rgb(0, 0, 0);
    font-size: 32px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 16px;
  }
}
</style>
