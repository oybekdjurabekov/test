<template>
 <div class="col s12 ">
    <div class="container">
      <div id="login-page" class="row">
      <div class="col s12 m6 l4  card-panel border-radius-6 login-card">
         <form class="login-form" @submit.prevent="validateUser">
           <div class="row">
              <div class="input-field col s12">
                <h5 class="ml-4">Войти</h5>
              </div>
            </div>
            <div class="col l12">
              <md-field  :class="getValidationClass('username')">
                <md-icon>person_outline</md-icon>
                <label>Имя пользователя</label>
                <md-input :disabled="sending" v-model="username" type="text"></md-input>
                <span class="md-error" v-if="!$v.username.required">Обязательно поле</span>
              </md-field>
            </div>
            <div class="col l12">
              <md-field :class="getValidationClass('password')">
                <md-icon>lock_outline</md-icon>
                <label>Пароль</label>
                <md-input :disabled="sending" v-model="password" type="password"></md-input>
                <span class="md-error" v-if="!$v.password.required">Обязательно поле</span>
              </md-field>
            </div>
           <div class="row">
              <div class="input-field col s12">
                <md-button :disabled="sending" type="submit" class="btn waves-effect waves-light border-round light-blue col s12">Войти</md-button>
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
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,

  } from 'vuelidate/lib/validators'
	export default{
    name: 'FormValidation',
    mixins: [validationMixin],
    data(){
      return {
        username : "",
        password : "",
        sending: false
      }
    },
    validations: {
      username: {
        required,
      },
      password: {
        required,
        minLength: minLength(8)
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v[fieldName]
        if (field) {
          return {
            'md-invalid': 'field.$invalid' && field.$dirty
          }
        }
      },
      saveUser () {
        this.sending = true
        window.setTimeout(() => {
          this.login()
          this.sending = false
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      },
      login: function () {
        let username = this.username 
        let password = this.password
        this.$store.dispatch('Login/login', { username, password })
       .then(() => this.$router.push('/'))
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