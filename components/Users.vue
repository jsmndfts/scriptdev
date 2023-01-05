<template>
  <div>
    <SideBar />
    <div class="container">
      <br>
      <div class="form-inline" action="#">
      <input type="text" id="form-name" v-model="item.firstname" placeholder="First Name" class="form-control">
      <input type="text" v-model="item.lastname" placeholder="Last Name" class="form-control">
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
            <input v-if="item.edit" type="text" v-model="item.firstname">
            <span v-else>{{item.firstname}} </span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.lastname">
            <span v-else>{{item.lastname}} </span>
          </td>
          <td><button @click="ItemEdit(item)" class="btn btn-info"><i class="far fa-edit">edit</i></button>
            <button @click="removeItem(item)" class="btn btn-danger"><i class="far fa-trash-alt">delete</i></button></td>
        </tr>
      </table>
  </div>
  </div>
    
  </template>
  
  <script scope>
  let url = "http://localhost:3002/users";
    export default {
      data() {
      return {
        item: {id: 0, firstname: "", lastname: "", edit: false},
        items: [],
        tempData: []
      }
    },
    methods:{
      async addItem() {
        console.log(this.item.id);
        await this.$axios.$post(url + '/insert', this.item)
        .then((res) => {
          console.log(res);
          this.item = {id: 0, firstname: "", lastname: "", edit: false};
        })
        .catch((err) => console.log(err));
        this.GetAllData();
        this.GetCurrentID();
      },
      async removeItem(item){
        await this.$axios.$post(url + '/delete', {id: item.id})
        .then((res) => {
          console.log(res);
          this.GetAllData();
      })
      .catch((err) => console.log(err));
      },
      async GetAllData(){
        this.items = await this.$axios.$get(url)
        .then((res) => {
          console.log(res);
          this.tempData = res;
          console.log(this.items);
        })
        .catch((err) => console.log(err));

        this.items = this.tempData;
        this.GetCurrentID();
      },
      async ItemEdit(item) //For Updating
      {
        if(!item.edit)
        {
          item.edit = !item.edit
        }
        else
        {
          item.edit = !item.edit
          console.log(item);
          await this.$axios.$post(url + '/update', item)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        }
      },
      GetCurrentID(){
        this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
      }
    },
    async mounted(){
      await this.GetAllData();
    }
  }
  </script>
  
  <style scoped>
  .form-inline input {
    margin-right:8px;
  }
  </style>
  
  
  
  