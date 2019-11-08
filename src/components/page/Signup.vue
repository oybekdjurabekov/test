<template>
 <div class="col s12 ">
    <div class="container">
      <div id="login-page" class="row">
      <div >
         <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="card-panel  border-radius-6 ">
              <md-card-header>
                <div class="md-title">Регистрация</div>
              </md-card-header>

              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('username')">
                      <label for="username">username</label>
                      <md-input name="username" id="username" autocomplete="off" v-model="form.username" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.username.required">The username is required</span>
                      <span class="md-error" v-else-if="!$v.form.username.minlength">Invalid username</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('first_name')">
                      <label for="first_name">first_name</label>
                      <md-input name="first_name" id="first_name" autocomplete="off" v-model="form.first_name" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.first_name.required">The first_name is required</span>
                      <span class="md-error" v-else-if="!$v.form.first_name.minlength">Invalid first_name</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('last_name')">
                      <label for="last_name">last_name</label>
                      <md-input name="last_name" id="last_name" autocomplete="off" v-model="form.last_name" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.last_name.required">The last_name is required</span>
                      <span class="md-error" v-else-if="!$v.form.last_name.minlength">Invalid last_name</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('email')">
                      <label for="email">email</label>
                      <md-input type="email" name="email" id="email" autocomplete="off" v-model="form.email" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                      <span class="md-error" v-else-if="!$v.form.email.minlength">Invalid email</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('birthdate')">
                      
                      <md-datepicker md-immediately v-model="form.birthdate" 
                                      :disabled="sending"
                                      name="birthdate" 
                                      id="birthdate"
                                      :format="dateFormat"/>
                      <label for="birthdate">birthdate</label>                
                      <span class="md-error" v-if="!$v.form.birthdate.required">The birthdate is required</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('birthplace')">
                      <label for="birthplace">birthplace</label>
                      <md-input name="birthplace" id="birthplace" autocomplete="off" v-model="form.birthplace" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.birthplace.required">The birthplace is required</span>
                      <span class="md-error" v-else-if="!$v.form.birthplace.minlength">Invalid birthplace</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('phone')">
                      <label for="phone">phone</label>
                      <md-input name="phone" id="phone" v-mask="'+998 ## ###-##-##'" type="tel" autocomplete="off" v-model="form.phone" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.phone.required">The phone is required</span>
                      <span class="md-error" v-else-if="!$v.form.phone.minlength">Invalid phone</span>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('emergency_phone')">
                      <label for="emergency_phone">emergency_phone</label>
                      <md-input name="emergency_phone" id="emergency_phone" v-mask="'+998 ## ###-##-##'" type="tel" autocomplete="off" v-model="form.emergency_phone" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.emergency_phone.required">The emergency_phone is required</span>
                      <span class="md-error" v-else-if="!$v.form.emergency_phone.minlength">Invalid emergency_phone</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('work_address')">
                      <label for="work_address">work_address</label>
                      <md-input name="work_address" id="work_address" autocomplete="off" v-model="form.work_address" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.work_address.required">The work_address is required</span>
                      <span class="md-error" v-else-if="!$v.form.work_address.minlength">Invalid work_address</span>
                    </md-field>
                  </div>
                </div>

                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('position')">
                      <label for="position">position</label>
                      <md-input name="position" id="position" autocomplete="off" v-model="form.position" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.position.required">The position is required</span>
                      <span class="md-error" v-else-if="!$v.form.position.minlength">Invalid position</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('position_date')">
                      <md-datepicker md-immediately v-model="form.position_date" 
                                      :disabled="sending"
                                      name="position_date" 
                                      id="position_date"
                                      :format="dateFormat"/>
                      <label for="position_date">position_date</label> 
                      <span class="md-error" v-if="!$v.form.position_date.required">The position_date is required</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('email')">
                      <label for="editorial_office_phone">editorial_office_phone</label>
                      <md-input v-mask="'+998 ## ###-##-##'" type="tel" name="editorial_office_phone" id="editorial_office_phone" autocomplete="off" v-model="form.editorial_office_phone" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.editorial_office_phone.required">The editorial_office_phone is required</span>
                      <span class="md-error" v-else-if="!$v.form.editorial_office_phone.minlength">Invalid editorial_office_phone</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('editorial_office_address')">
                      <label for="editorial_office_address">editorial_office_address</label>
                      <md-input name="editorial_office_address" id="editorial_office_address" autocomplete="off" type="text" v-model="form.editorial_office_address" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.editorial_office_address.required">The editorial_office_address is required</span>
                      <span class="md-error" v-else-if="!$v.form.editorial_office_address.minlength">Invalid editorial_office_address</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('email')">
                      <label for="identity_photo">identity_photo</label>
                      <md-file name="identity_photo" id="identity_photo" v-model="form.identity_photo" :disabled="sending"/>
                      <span class="md-error" v-if="!$v.form.identity_photo.required">The identity_photo is required</span>
                      <span class="md-error" v-else-if="!$v.form.identity_photo.minlength">Invalid identity_photo</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('photo')">
                      <label for="photo">photo</label>
                      <md-file name="photo" id="photo" v-model="form.photo" :disabled="sending"/>
                      <span class="md-error" v-if="!$v.form.photo.required">The photo is required</span>
                      <span class="md-error" v-else-if="!$v.form.photo.minlength">Invalid photo</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('password')">
                      <label for="password">password</label>
                      <md-input type="password" id="password" v-model.trim="form.password" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                      <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('password_confirm')">
                      <label for="password_confirm">password_confirm</label>
                      <md-input type="password" id="password_confirm" v-model.trim="form.password_confirm" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.password_confirm.required">The password_confirm is required</span>
                      <span class="md-error" v-else-if="!$v.form.password_confirm.sameAsPassword">Passwords must be identical.</span>
                    </md-field>
                  </div>
                </div>
              </md-card-content>

              <md-progress-bar md-mode="indeterminate" v-if="sending" />

              <md-card-actions>
                <md-button type="submit" class="btn waves-effect waves-light border-round light-blue col s12" :disabled="sending">Регистрация</md-button>
              </md-card-actions>
            </md-card>
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
    email,
    minLength,
    sameAs,
    maxLength
  } from 'vuelidate/lib/validators'
	export default{
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      days: ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      shorterDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      shortMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сет", "Окт", "Ноя", "Дек"],
      form: {
        username: '',
        phone: '',
        password: '',
        password_confirm: '',
        first_name: '',
        last_name: '',
        email: '',
        birthdate: '',
        birthplace: '',
        work_address: '',
        position: '',
        position_date: '',
        emergency_phone: '',
        editorial_office_phone: '',
        editorial_office_address: '',
        photo: '',
        identity_photo: '',
      },
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(3)
        },
        phone: {
          required,
          minLength: minLength(17)
        },
        password: {
          required,
          minLength: minLength(8)
        },
        password_confirm: {
          required,
          sameAsPassword: sameAs('password')
        },
        first_name: {
          required,
          minLength: minLength(3)
        },
        last_name: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        },
        birthdate: {
          required,
        },
        birthplace: {
          required,
          minLength: minLength(6)
        },
        work_address: {
          required,
          minLength: minLength(10)
        },
        position: {
          required,
          minLength: minLength(5)
        },
        position_date: {
          required,
        },
        emergency_phone: {
          required,
          minLength: minLength(17)
        },
        editorial_office_phone: {
          required,
          minLength: minLength(17)
        },
        editorial_office_address: {
          required,
          minLength: minLength(10)
        },
        photo: {
          required,
        },
        identity_photo: {
          required,
        }
      }
    },
    methods: {
      register: function () {
        let data = {
          username: this.form.username,
          phone: this.form.phone,
          password: this.form.password,
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          email: this.form.email,
          birthdate: this.form.birthdate,
          birthplace: this.form.birthplace,
          work_address: this.form.work_address,
          position: this.form.position,
          position_date: this.form.position_date,
          emergency_phone: this.form.emergency_phone,
          editorial_office_phone: this.form.editorial_office_phone,
          editorial_office_address: this.form.editorial_office_address,
          photo: this.form.photo,
          identity_photo: this.form.identity_photo
        }
        console.log(data)
        this.$store.dispatch('Login/register', data)
       .then(() => this.$router.push('/signin'))
       .catch(err => console.log(err))
      },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          
          this.sending = false
          this.register()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    },
    computed:{
        dateFormat(){
            return this.$material.locale.months = this.months, 
                   this.$material.locale.shortMonths = this.shortMonths, 
                   this.$material.locale.shortDays = this.shorterDays, 
                   this.$material.locale.shorterDays = this.shorterDays, 
                   this.$material.locale.firstDayOfAWeek = 1, 
                   this.$material.locale.dateFormat = 'dd.MM.yyyy';
        },
    }
	}
</script>
<style scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>