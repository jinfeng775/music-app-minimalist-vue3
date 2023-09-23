<template>
    <div class="login">
        <div class="welcome">

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
<style scoped></style>
