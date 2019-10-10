<template>
      <div class="row">
        <div class="card user-card-negative-margin z-depth-0" id="feed">
          <div class="card-content card-border-gray">
            <div class="row">
              <div class="col s12">
                <h5>Запрос на получение информации</h5>
              </div>
              <form class="row">
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-datepicker required v-model="selectedDate" :format="dateFormat">
                      <label>Select date</label>
                    </md-datepicker>
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-field>
                      <md-icon>apartment</md-icon>
                      <label for="department">Список хокимиятов</label>
                      <md-select required v-model="selectedDepartment" name="department" class="ml12" id="department">
                        <md-option value="fight-club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather-ii">Godfather II</md-option>
                        <md-option value="godfather-iii">Godfather III</md-option>
                        <md-option value="godfellas">Godfellas</md-option>
                        <md-option value="pulp-fiction">Pulp Fiction</md-option>
                        <md-option value="scarface">Scarface</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-field>
                      <md-icon>apartment</md-icon>
                      <label for="first_name1" class="active">Список отделов хокимията</label>
                      <md-select required v-model="selectedMovies" name="movies" class="ml12" id="movies">
                        <md-option value="fight-club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather-ii">Godfather II</md-option>
                        <md-option value="godfather-iii">Godfather III</md-option>
                        <md-option value="godfellas">Godfellas</md-option>
                        <md-option value="pulp-fiction">Pulp Fiction</md-option>
                        <md-option value="scarface">Scarface</md-option>
                      </md-select>
                    </md-field>
                    
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-field >
                      <md-icon>notes</md-icon>
                      <label>Тема нужной информации </label>
                      <md-input  required class="md-input"> </md-input>
                      <span class="md-error">There is an error</span>
                    </md-field>
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field col s12">
                    <md-field>
                      <label>Multiple</label>
                      <md-file required v-model="multiple" multiple />
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
            selectedDate:null,
            selectedMovies:'',
            selectedDepartment:'',
            show:true,
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