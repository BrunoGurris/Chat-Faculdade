<template>
    <div class="my-5">
        <div v-if="message.me == true" class="d-flex justify-content-end">
            <div class="img_cont_msg">
                <img :src="require('@/assets/' + pictures[message.picture])" class="rounded-pill user_img_msg">
            </div>
            <div class="msg_cotainer_send px-3 py-1">
                <p class="m-0 fw-bold">{{ message.name }}</p>
                <p class="m-0">{{ message.message }}</p>
                <span class="msg_time">{{ formatDate(message.created_at) }}</span>
            </div>
        </div>
        <div v-else class="d-flex justify-content-start">
            <div class="img_cont_msg">
                <img :src="require('@/assets/' + pictures[message.picture])" class="rounded-pill user_img_msg">
            </div>
            <div class="msg_cotainer px-3 py-1">
                <p class="m-0 fw-bold">{{ message.name }}</p>
                <p class="m-0">{{ message.message }}</p>
                <span class="msg_time">{{ formatDate(message.created_at) }}</span>
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
            pictures: [
                "user0.png",
                "user1.png",
                "user2.png",
                "user3.png",
                "user4.png",
                "user5.png",
                "user6.png"
            ]
        }
    },

    methods: {
        formatDate(dateIn) {
            const date = new Date(dateIn)
            const day = new Intl.DateTimeFormat('pt-BR').format(date)
            const hour = new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute: 'numeric', timeZone: 'America/Sao_paulo'}).format(date)
            return day + ' às ' + hour
        },
    }
}
</script>

<style>
</style>