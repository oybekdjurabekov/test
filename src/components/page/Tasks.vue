<template>
    <div class="col s12">

          <div class="container">
            <!-- Sidebar Area Starts -->
            <div class="sidebar-left sidebar-fixed">
              <div class="sidebar">
                <div class="sidebar-content">
                  <div class="sidebar-header">
                    <div class="sidebar-details">
                      <h5 class="m-0 sidebar-title"><i class="material-icons app-header-icon text-top">check_box</i> To-Do</h5>
                      <div class="row valign-wrapper mt-10 pt-2 animate fadeLeft">
                        <div class="col s2 media-image">
                          <img src="/assets/images/user/12.jpg" alt="" class="circle z-depth-2 responsive-img">
                          <!-- notice the "circle" class -->
                        </div>
                        <div class="col s10">
                          <p class="m-0 subtitle font-weight-700">Lawrence Collins</p>
                          <p class="m-0 text-muted">lawrence.collins@xyz.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sidebar-list" class="sidebar-menu list-group position-relative animate fadeLeft ps ps--active-y">
                    <div class="sidebar-list-padding app-sidebar" id="todo-sidenav">
                      <ul class="todo-list display-grid">
                        <li class="sidebar-title">Filters</li>
                        <li v-for="(statusItem, index) in status" :class="statusItem.active ? 'active' : ''">
                            <a href="#!" class="text-sub" @click="filterList(statusItem)">
                                <i class="material-icons mr-2">  {{statusItem.icon}} </i> 
                                {{statusItem.title}}
                            </a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-todo">
              <div class="content-area content-right">
                <div class="app-wrapper">
                  <div class="app-search">
                    <i class="material-icons mr-2 search-icon">search</i>
                    <input type="text" v-model="search" @input="searchText($event.target.value)" placeholder="Search Contact" class="app-filter" id="todo_filter">
                  </div>
                  <div class="card card card-default scrollspy border-radius-6 fixed-width">
                    <div class="card-content p-0">
                      <ul class="collection todo-collection ps ps--active-y" >
                        <li class="collection-item" v-for="(toDo, index) in toDoList">
                          <div class="list-left">
                            <label>
                              <input type="checkbox" @change="changeItem(toDo)" :checked="toDo.status">
                              <span></span>
                            </label>
                          </div>
                          <div class="list-content">
                            <div class="list-title-area">
                              <div class="list-title" :style="toDo.status ? 'text-decoration: line-through;' : ''">{{toDo.title}}  {{toDo.status}}</div>
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
            <div id="modal1" class="modal border-radius-6 add-task-modal open" tabindex="0">
              <div class="modal-content">
                <h5 class="mt-0">Add New Task</h5>
                <hr>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <i class="material-icons prefix"> title </i>
                        <input id="title" type="text" class="validate">
                        <label for="title">Title</label>
                      </div>
                      <div class="input-field col s12">
                        <i class="material-icons prefix"> date_range </i>
                        <div class="modal datepicker-modal" id="modal-0f397b7a-c481-e087-2a98-0bc1d17902df" tabindex="0"><div class="modal-content datepicker-container"><div class="datepicker-date-display"><span class="year-text"></span><span class="date-text"></span></div><div class="datepicker-calendar-container"><div class="datepicker-calendar"></div><div class="datepicker-footer"><button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button><div class="confirmation-btns"><button class="btn-flat datepicker-cancel waves-effect" type="button">Cancel</button><button class="btn-flat datepicker-done waves-effect" type="button">Ok</button></div></div></div></div></div><input id="start-date" type="text" class="validate datepicker">
                        <label for="start-date">Start Date</label>
                      </div>
                      <div class="input-field col s12">
                        <i class="material-icons prefix"> date_range </i>
                        <div class="modal datepicker-modal" id="modal-daa7133d-62fd-7ae2-fedb-e60d89890533" tabindex="0"><div class="modal-content datepicker-container"><div class="datepicker-date-display"><span class="year-text"></span><span class="date-text"></span></div><div class="datepicker-calendar-container"><div class="datepicker-calendar"></div><div class="datepicker-footer"><button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button><div class="confirmation-btns"><button class="btn-flat datepicker-cancel waves-effect" type="button">Cancel</button><button class="btn-flat datepicker-done waves-effect" type="button">Ok</button></div></div></div></div></div><input id="end-date" type="text" class="validate datepicker">
                        <label for="end-date">End Date</label>
                      </div>
                      <div class="input-field col s12">
                        <i class="material-icons prefix"> note </i>
                        <textarea id="notes" class="materialize-textarea validate" style="height: 43px;"></textarea>
                        <label for="notes">Notes</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <a class="btn modal-close waves-effect waves-light mr-2">Add Task</a>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
       data(){
        return {
            search:'',
            status:[
                {
                    title:'Все',
                    icon:'mail_outline',
                    active:true,
                    value:'all'
                },{
                    title:'Активные',
                    icon:'date_range',
                    active:false,
                    value:false
                },{
                    title:'Заверщенные',
                    icon:'check',
                    active:false,
                    value:true
                },
            ],
        }
       },
       methods:{
        deleteToDo(index){
            this.$store.commit('ToDoList/deleteToDo', index)
        },
        filterList(statusItem){
            this.status.active = !this.status.active
            this.$store.commit('ToDoList/filterList', statusItem.value)
        },
        changeItem(item){
            item.status = !item.status
        },
        searchText(value){
            this.$store.commit('ToDoList/searchText', value)
        }
       }, 
       computed:{
        ...mapGetters('ToDoList', {
            'toDoList':'newsItems',
        })
       }
    }
</script>