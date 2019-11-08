<template>
      <div class="row">
        <div class="card user-card-negative-margin z-depth-0" id="feed">
          <div class="card-content card-border-gray">
            <div class="row">
              <div class="col s12" style="display: flex; justify-content: space-between;">
                <h5>Задачи</h5>
                <md-button @click="showDialog = !showDialog" class="md-primary md-raised">Добавить задачу</md-button> 
              </div>

              <div class="sidebar-left sidebar-fixed">
	              <div class="sidebar">
	                <div class="sidebar-content">
	                  <div  class="sidebar-menu list-group position-relative animate fadeLeft ps ps--active-y">
	                    <div class="sidebar-list-padding app-sidebar" id="todo-sidenav">
	                      <ul class="todo-list display-grid">
	                        <li class="sidebar-title">Filters</li>
	                        <li v-for="(statusItem, index) in filterButtonList" @click="filterList(statusItem, index)" :class="statusItem.active ? 'active' : ''">
	                            <span class="text-sub">
	                                <i class="material-icons mr-2">{{statusItem.icon}} </i> 
	                                {{statusItem.title}}
	                            </span>
	                        </li>
	                        
	                      </ul>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
                <div class="app-todo animate fadeRight">
	              <div class="content-area content-right">
	                <div class="app-wrapper">
	                  <div class="app-search">
	                    <i class="material-icons mr-2 search-icon">search</i>
	                    <input type="text" v-model="search" @input="searchText($event.target.value)" placeholder="Поиск задач" class="app-filter" id="todo_filter">
	                  </div>
	                  <div class="card card card-default scrollspy border-radius-6 fixed-width">
	                    <div class="card-content p-0">
	                      <ul class="collection todo-collection ps ps--active-y" >
	                        <li class="collection-item" v-for="(toDo, index) in toDoList">
	                          <div class="list-left">
                              <md-checkbox class="md-primary" style="margin:5px 10px;" v-model="toDo.status" @click="checkedItem(toDo, index)"></md-checkbox>
	                           
	                          </div>
	                          <div class="list-content">
	                            <div class="list-title-area">
	                              <div class="list-title" :style="toDo.status ? 'text-decoration: line-through;' : ''">{{toDo.title}}</div>
	                            </div>
	                            <div class="list-desc"  :style="toDo.status ? 'text-decoration: line-through;' : ''">{{toDo.description}}</div>
	                          </div>
	                          <div class="list-right">
	                            <div class="list-date">{{toDo.data}}</div>
	                            <div class="delete-task" @click="deleteToDo(index)"><i class="material-icons">delete</i></div>
	                          </div>
	                        </li>
	                        </ul>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
            </div>
          </div>
        </div>
       <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Добавить задачу</md-dialog-title>
        <md-content class="row">
          <form validate class="md-layout col 12" @submit.prevent="addTasks()">
            <md-field>
              <md-icon>notes</md-icon>
              <label>Название</label>
              <md-input v-model="title"></md-input>
            </md-field>
            <md-field style="margin-top:0;">
              <md-datepicker  required v-model="date"  :format="dateFormat">
                <label>Дата</label>
              </md-datepicker>
            </md-field>
            <md-field style="margin-top:0;">
              <label>Тема</label>
              <md-textarea v-model="description" required></md-textarea>
            </md-field>
          </form>
        </md-content>
        <md-dialog-actions>
          <md-button class="md-accent md-raised" @click="showDialog = false">Закрыть</md-button>
          <md-button class="md-primary md-raised" @click="addTasks()">Сохранить</md-button>
        </md-dialog-actions>
      </md-dialog>
      </div>
</template>
<script type="text/javascript">
    import { mapGetters } from 'vuex';
    export default {
       data(){
        return {
            search:'',
            showDialog:false,
            date:null,
            title:'',
            description:'',
        }
       },
       methods:{
        deleteToDo(index){
            this.$store.commit('ToDoList/deleteToDo', index)
        },
        filterList(statusItem, index){
            this.$store.commit('ToDoList/filterList', statusItem)
        },
        checkedItem(item, index){
            this.$store.commit('ToDoList/checkedItem', index)
        },
        searchText(value){
            this.$store.commit('ToDoList/searchText', value)
        },
        addTasks(){
          this.$store.commit('ToDoList/addTasks', {title:this.title, date:this.date, description:this.description})
          this.showDialog = !this.showDialog
        }
       }, 
       computed:{
        ...mapGetters('ToDoList', {
            'toDoList':'tasksItems',
            'filterButtonList':'filterButton',
        }),
        dateFormat(){
            return this.$material.locale.dateFormat = 'dd.MM.yyyy'
        }
       }
    }
</script>