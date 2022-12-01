<template>
  <div>
    <SideBar />
    <div class="container">
      <br>
      <div class="form-inline" action="#">
      <input type="text" id="form-name" v-model="item.firstname" placeholder="First Name" class="form-control">
      <input type="text" v-model="item.lastname" placeholder="Last Name" class="form-control" v-on:keyup.enter="addItem">
      <button @click="addItem" class="btn btn-dark"><i class="fas fa-plus">Add</i></button>
        </div>
      <br><br>
      <table class="table table-striped table-bordered table-sm">
        <thead class="thead-light">
          <th>First Name</th>
          <th>Last Name</th>
          <th class="col-2">Edit/Delete</th>
        </thead>
        <tr v-for="item in items" :key="item.firstname">
          <td>
            <input v-if="item.edit" type="text" v-model="item.firstname"  v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.firstname}} </span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.lastname" v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.lastname}} </span>
          </td>
          <td><button @click="item.edit = !item.edit" class="btn btn-info"><i class="far fa-edit">edit</i></button>
            <button @click="removeItem(index)" class="btn btn-danger"><i class="far fa-trash-alt">delete</i></button></td>
        </tr>
      </table>
  </div>
  </div>
    
  </template>
  
  <script scope>
    export default {
      data() {
      return {
        item: {firstname: "", lastname: "", edit: false},
        items: []
      }
    },
    methods:{
      addItem() {
        this.items.push({
          firstname:this.item.firstname, lastname:this.item.lastname, edit: false}
          );
        this.item = [];
        // eslint-disable-next-line no-undef
       
      },
      removeItem(index){
        this.items.splice(index, 1)
      }
    }
    }
  </script>
  
  <style scoped>
  .form-inline input {
    margin-right:8px;
  }
  </style>
  
  
  
  