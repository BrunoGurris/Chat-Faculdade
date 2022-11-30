<template>
    <div>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-10 col-md-8 col-lg-6 col-xl-5">
                    <div class="card-body p-5 text-center">
                        <img src="@/assets/logo.jpeg" class="img-fluid p-2 rounded"/>
                        <h4 class="mb-5 text-white mt-5">Chat Facens</h4>
                        <div class="form-outline mb-4">
                            <input v-model="name" type="text" class="form-control" placeholder="Nome" />
                        </div>
                        <div class="form-outline mb-4">
                            <input v-model="username" type="text" class="form-control" placeholder="Usuário" />
                        </div>
                        <div class="form-outline mb-4">
                            <input @keyup.enter="register()" v-model="password" type="password" class="form-control" placeholder="Senha" />
                        </div>
                        <div class="form-outline mb-4">
                            <button @click="register()" ref="btnRegister" class="btn btn-dark w-75" type="button">Cadastrar</button>
                            <button @click="$router.push('/login')" class="btn btn-link w-75 text-white fw-bold mt-4" type="button">Voltar</button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',

    data() {
        return {
            name: '',
            username: '',
            password: '',
        }
    },

    methods: {
        async register() {
            const formData = new FormData();
            formData.append('name', this.name)
            formData.append('username', this.username)
            formData.append('password', this.password)

            this.$refs.btnRegister.innerText = 'Cadastrando...'
            this.$refs.btnRegister.disabled = true
 
            await this.$api.post('/register', formData)
            .then((response) => {
                localStorage.setItem('_token', response.data.token)
                this.$toastr.s('Logado com sucesso!')
                window.location.href = "/"
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })

            this.$refs.btnRegister.innerText = 'Cadastrar'
            this.$refs.btnRegister.disabled = false
        },
    }
}
</script>

<style>
</style>