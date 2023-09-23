<template>
    <div class="login">
        <div class="welcome">
            123
        </div>
    </div>
</template>
<script>
import router from '../router'
export default {
    setup() {
        const onClick = () => {
            router.push('/home')
        }

        return {
            onClick
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    .welcome {
        width: 100px
    }
}
</style>
