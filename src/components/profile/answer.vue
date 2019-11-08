<template>
      <div class="row">
        <div class="card user-card-negative-margin z-depth-0" id="feed">
          <div class="card-content card-border-gray">
            <div class="row">
              <div class="col s12">
                <h5>Вопрос модератору</h5>
              </div>
              <form class="row">
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-field >
                      <md-icon>notes</md-icon>
                      <label>Текст</label>
                      <md-input  required class="md-input"> </md-input>
                      <span class="md-error">There is an error</span>
                    </md-field>
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-field>
                      <label>Загрузить файл</label>
                      <md-file required v-model="multiple" multiple />
                    </md-field>
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-field >
                      <label>Тема</label>
                      
                      <md-textarea v-model="textarea" required></md-textarea>
                    </md-field>
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-button class="btn cyan waves-effect waves-light left">Отправить</md-button>
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
            textarea:'',
            multiple:[],  
        }
       },
       methods:{
        
       }, 
       computed:{
        dateFormat(){
            return this.$material.locale.dateFormat = 'dd.MM.yyyy'
        }
       }
    }
</script>