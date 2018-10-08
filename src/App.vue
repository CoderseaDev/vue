<template>
  <v-app>
    <v-toolbar>
    <v-toolbar-title>
      <v-btn class="primary" flat :to="{name: 'Home'}">{{title}}</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-for='( menu, index ) in menus' :to={name:menu.route} :key="index">
        {{menu.name}}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Vue'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vue',
      menus: [
        {name: 'Vuetify', route: 'vuetify'},
        {name: 'Draggable', route: 'draggable'},
        {name: 'Vee-validate', route: 'Signup'}
      ]
    }
  },
  name: 'App'
}
</script>
<style>
  .drag-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
