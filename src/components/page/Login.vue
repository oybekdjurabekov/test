<template>
 <div class="col s12 ">
    <div class="container">
      <div id="login-page" class="row">
      <div class="col s12 m6 l4  card-panel border-radius-6 login-card">
         <form class="login-form" @submit.prevent="login">
           <div class="row">
              <div class="input-field col s12">
                <h5 class="ml-4">Войти</h5>
              </div>
            </div>
            <div class="col l12">
              <md-field  class="">
                <md-icon>person_outline</md-icon>
                <label>Имя пользователя</label>
                <md-input v-model="email" type="text"></md-input>
              </md-field>
            </div>
            <div class="col l12">
              <md-field>
                <md-icon>lock_outline</md-icon>
                <label>Пароль</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
            </div>
           <div class="row">
              <div class="input-field col s12">
                <md-button type="submit" class="btn waves-effect waves-light border-round light-blue col s12">Войти</md-button>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6 m6 l6">
                <p class="margin medium-small">
                  <router-link :to="{name:'signup'}" tag="a">Регистрация</router-link>
                </p>
              </div>
              <div class="input-field col s6 m6 l6">
                <p class="margin right-align medium-small"><a href="user-forgot-password.html">Забыли пароль</a></p>
              </div>
            </div>
         </form>
      </div>
    </div>
  </div>
</div>  
</template>
<script>
	export default{
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
      login: function () {
        let email = this.email 
        let password = this.password
        this.$store.dispatch('Login/login', { email, password })
       .then(() => this.$router.push('/dashboard'))
       .catch(err => console.log(err))
      },
      logout: function () {
        this.$store.dispatch('Login/logout')
        .then(() => {
          this.$router.push('/signin')
        })
      }

    },
    computed : {
      // isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
	}
</script>