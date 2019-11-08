<template>
      <div class="row">
        <div class="card user-card-negative-margin z-depth-0" id="feed">
          <div class="card-content card-border-gray">
            <div class="row">
              <div class="col s12">
                <h5>Запрос на встречу</h5>
              </div>
              <form class="row" @submit.prevent="onSubmit(formItems)">
                <div class="col s12" v-for="(formItem, index) in formItems">
                  <div class="input-field col s12">

                    <md-field  v-if="formItem.type == 'datepicker'" 
                               :class="!controls[index].error ? 'md-valid' : 'md-invalid'">
                      <md-datepicker  v-model="formItem.value" 
                                      @input="onInput($event, index)" 
                                      :class="!controls[index].error ? 'valid' : 'invalid'"  
                                      required 
                                      :format="dateFormat">
                      <label>{{formItem.title}}</label>
                      </md-datepicker>
                      <span class="md-error">Поля обьязательное</span>
                    </md-field>

                    <md-field  v-if="formItem.type == 'selectbox'" 
                               :class="!controls[index].error ? 'md-valid' : 'md-invalid'">
                      <md-icon>apartment</md-icon>
                      <label :for="formItem.title">{{formItem.title}}</label>
                      <md-select required 
                                 v-model="formItem.value" 
                                 @input="onInput($event, index)" 
                                 :class="!controls[index].error ? 'valid' : 'invalid'" 
                                 :name="formItem.title" 
                                 class="ml12">
                                 
                        <md-option v-for="(value, index) in formItem.children" 
                                   :key="index" 
                                   :value="value.id">{{value.title}}</md-option>
                      </md-select>
                      <span class="md-error">Поля обьязательное</span>
                    </md-field>

                    <md-field  v-if="formItem.type == 'text'" 
                               :class="!controls[index].error ? 'md-valid' : 'md-invalid'" >
                      <md-icon>notes</md-icon>
                      <label  :for="formItem.title" >{{formItem.title}}</label>
                      <md-input  required 
                                 :value="formItem.value" 
                                 :class="!controls[index].error ? 'valid' : 'invalid'" 
                                 @input="onInput($event, index)" 
                                 class="validate md-input" />
                      <span class="md-error">Поля обьязательное</span>
                    </md-field>

                    <md-field  v-if="formItem.type == 'file'" 
                               :class="!controls[index].error ? 'md-valid' : 'md-invalid'">
                      <label :for="formItem.title">{{formItem.title}}</label>
                      <md-file required 
                               :value="formItem.value" 
                               @input="onInput($event, index)" 
                               :class="!controls[index].error ? 'valid' : 'invalid'" 
                               class="validate" 
                               multiple />
                      <span class="md-error">Поля обьязательное</span>
                    </md-field>

                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-button type="submit" class="btn cyan waves-effect waves-light left">Отправить</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</template>
<script type="text/javascript">
    export default {
       data(){
          return {
              controls:[],
              formItems:[
                {
                  title:'Выбрать дату',
                  type:'datepicker',
                  value:'',
                  pattern:/.+$/,
                },
                {
                  title:'Список хокимиятов',
                  type:'selectbox',
                  pattern:/.+$/,
                  children:[
                    {
                      id:1,
                      title:'Fight Club'
                    },
                    {
                      id:2,
                      title:'Fight Club1'
                    },
                    {
                      id:3,
                      title:'Fight Club2'
                    },
                    {
                      id:4,
                      title:'Fight Club3'
                    },
                  ],
                  value:'',
                },
                {
                  title:'Список отделов хокимията',
                  type:'selectbox',
                  pattern:/.+$/,
                  children:[
                    {
                      id:1,
                      title:'Fight Club'
                    },
                    {
                      id:2,
                      title:'Fight Club1'
                    },
                    {
                      id:3,
                      title:'Fight Club2'
                    },
                    {
                      id:4,
                      title:'Fight Club3'
                    },
                  ],
                  value:'',
                },
                {
                  title:'Хаким',
                  type:'text',
                  pattern:/[a-z]{9}$/,
                  value:'',
                },
                {
                  title:'Тема нужной информации',
                  type:'text',
                  value:'',
                  pattern:/[a-z]{9}$/,
                },
                {
                  title:'Файл',
                  type:'file',
                  value:'',
                  pattern:/.+$/,
                }
              ],
              show:true,
              days: ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"],
              months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
              shorterDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
              shortMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сет", "Окт", "Ноя", "Дек"],
          } 
       },
       beforeMount(){
           for(let i = 0; i < this.formItems.length; i++){
            this.controls.push({
              error:true,
              activated:false,
            })
          }
       },
       methods:{
          onInput(value, index){
             let data = this.formItems[index];
             let control = this.controls[index];
             data.value = value;
             control.error = !data.pattern.test(value);
             control.activated = true;
           },
           onSubmit(value){
              console.log(value)
           }
       }, 
       computed:{
        dateFormat(){
            return this.$material.locale.months = this.months, this.$material.locale.shortMonths = this.shortMonths, this.$material.locale.shortDays = this.shorterDays, this.$material.locale.shorterDays = this.shorterDays, this.$material.locale.firstDayOfAWeek = 1, this.$material.locale.dateFormat = 'dd.MM.yyyy';
        },
       }
    }
</script>