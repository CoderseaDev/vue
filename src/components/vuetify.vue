<template>
  <v-container grid-list-sm>
    <v-tabs
      centered
      color="cyan"
      dark
      icons-and-text
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab href="#tab-1">
        Slider
        <v-icon>call_split</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Grid system
        <v-icon>business</v-icon>
      </v-tab>
      <v-tab href="#tab-3">
        alerts
        <v-icon>info</v-icon>
      </v-tab>
      <v-tab href="#tab-4">
        buttons
        <v-icon>widgets</v-icon>
      </v-tab>
      <v-tab-item
        :id="'tab-1'"
        :key="1"
      >
        <v-card flat>
          <h2 class="pt-5 pb-3">Slider Avatar example</h2>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4>
              <v-slider
                v-model="slider"
                :min="16"
                :max="256"
                label="Size"
                thumb-label
              ></v-slider>

              <v-switch
                v-model="tile"
                label="Tile"
              ></v-switch>
            </v-flex>

            <v-flex
              xs12
              sm6
              md8
              align-center
              justify-center
              layout
              text-xs-center
              column
            >
              <v-avatar
                :tile="tile"
                :size="avatarSize"
                color="grey lighten-4"
                class="mb-4"
              >
                <img src="@/assets/logo.png" alt="avatar">
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-card>
      </v-tab-item>
      <v-tab-item
        :id="'tab-2'"
        :key="2"
      >
        <v-card flat>
          <h2 class="pt-5 py-3">Responsive Grid</h2>
          <v-layout row wrap>
            <v-flex lg6 xs12 v-for="i in 2" :key="i">
              <v-card dark color="primary">
                <v-card-text class="px-3"> 6 in large screens and 12 in small screens</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex lg4 xs12 v-for="i in 3" :key="i">
              <v-card dark color="secondary">
                <v-card-text class="px-3"> 4 in large screens and 12 in small screens</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex lg3 xs6 v-for="i in 4" :key="i">
              <v-card dark color="info">
                <v-card-text class="px-3"> 3 in large screens and 6 in small screens</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex lg2 xs4 v-for="i in 6" :key="i">
              <v-card dark color="secondary">
                <v-card-text class="px-3"> 2 in large screens and 4 in small screens</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-tab-item>
      <v-tab-item
        :id="'tab-3'"
        :key="3"
      >
        <v-card flat>
          <h2 class="pt-5 pb-3">These are some Alerts examples </h2>
          <v-alert type="warning" :value="true">stop it!</v-alert>
          <v-alert type="success" :value="true">Great!</v-alert>
          <v-alert type="info" :value="true">what ?!</v-alert>
          <v-alert type="error" :value="true">that' it man</v-alert>
        </v-card>
      </v-tab-item>
      <v-tab-item
        :id="'tab-4'"
        :key="4"
      >
        <v-card flat>
          <h2 class="pt-5 pb-3">These are buttons examples </h2>
          <v-layout row wrap>
            <v-flex lg2 xs4 v-for="( cls, index ) in classes" :key="index">
              <v-btn v-bind:color="cls" class="my-3">{{cls}}</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      slider: 128,
      tile: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      classes: [
        'error', 'success', 'info', 'warning', 'primary', 'secondary'
      ]
    }),
    computed: {
      avatarSize () {
        return `${this.slider}px`
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .v-card {
    padding-left: 1em;
    padding-right: 1em;
  }
  .v-card > :last-child:not(.v-btn):not(.v-chip) {
    border-radius: 100px;
  }
  .v-alert {
    border-radius: 100px;
  }
</style>
