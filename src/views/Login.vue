<template>
    <div>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-10 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <img src="@/assets/logo.jpeg" class="img-fluid p-2 rounded"/>
                            <h4 class="mb-5 text-white mt-5">Chat Facens</h4>
                            <div class="form-outline mb-4">
                                <input type="email" class="form-control" placeholder="Usuário" />
                            </div>
                            <div class="form-outline mb-4">
                                <input type="password" class="form-control" placeholder="Senha" />
                            </div>
                            <div class="form-outline mb-4">
                                <button class="btn btn-success w-50" type="submit">Login</button>
                            </div>   
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
            
        }
    }
}
</script>

<style>
</style>