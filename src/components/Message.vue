<template>
    <div>
        <div v-if="message.me == true" class="d-flex justify-content-end mb-4">
            <div class="img_cont_msg">
                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-pill user_img_msg">
            </div>
            <div class="msg_cotainer">
                {{ message.text }}
                <span class="msg_time">9:07 AM, Today</span>
            </div>
        </div>
        <div v-else class="d-flex justify-content-start mb-4">
            <div class="img_cont_msg">
                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-pill user_img_msg">
            </div>
            <div class="msg_cotainer px-3">
                {{ message.text }}
                <span class="msg_time">9:07 AM, Today</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',

    props: ['message'],

    data() {
        return {

        }
    }
}
</script>

<style>
</style>