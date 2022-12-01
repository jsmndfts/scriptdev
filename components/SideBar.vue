<template>
    <div>
      <b-button v-b-toggle.sidebar-no-header style="margin-left: 2vw;">Dashboard</b-button>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Dashboard</h4>
            
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item active @click="hide">Products</b-nav-item>
                <b-nav-item href="#link-1" @click="hide"></b-nav-item>
                <b-nav-item @click="hide"><NuxtLink to="/Users">Users</NuxtLink></b-nav-item>
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="hide" style="width: fit-content:">Close Sidebar</b-button>
          </div>
        </template>
      </b-sidebar>
    </div>
  </template>

  <style>
body{
    background-color: white;
}

</style>