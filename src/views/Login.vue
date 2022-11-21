<template>
    <div>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-10 col-md-8 col-lg-6 col-xl-5">
                    <div class="card-body p-5 text-center">
                        <img src="@/assets/logo.jpeg" class="img-fluid p-2 rounded"/>
                        <h4 class="mb-5 text-white mt-5">Chat Facens</h4>
                        <div class="form-outline mb-4">
                            <input v-model="username" type="email" class="form-control" placeholder="Usuário" />
                        </div>
                        <div class="form-outline mb-4">
                            <input @keyup.enter="login()" v-model="password" type="password" class="form-control" placeholder="Senha" />
                        </div>
                        <div class="form-outline mb-4">
                            <button @click="login()" ref="btnLogin" class="btn btn-success w-50" type="button">Login</button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            username: '',
            password: '',
        }
    },

    methods: {
        async login() {
            const formData = new FormData();
            formData.append('username', this.username)
            formData.append('password', this.password)

            this.$refs.btnLogin.innerText = 'Entrando...'
            this.$refs.btnLogin.disabled = true
 
            await this.$api.post('/login', formData)
            .then((response) => {
                localStorage.setItem('_token', response.data.token)
                this.$toastr.s('Logado com sucesso!')
                window.location.href = "/"
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
                this.password = ''
            })

            this.$refs.btnLogin.innerText = 'Entrar'
            this.$refs.btnLogin.disabled = false
        },
    },

    created() {
        localStorage.setItem('_token', '')
    }
}
</script>

<style>
</style>