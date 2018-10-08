<template>
  <div class="container fluid fill-height">
    <div class="layout align-center justify-center">
      <div class="flex xs12 sm8 md4">
        <div class="elevation-12 v-card theme--light">
          <nav class="v-toolbar theme--dark primary" data-booted="true" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);">
            <div class="v-toolbar__content" style="height: 64px;">
              <div class="v-toolbar__title">Signup form (VEE-Validated)
              </div>
              <div class="spacer"></div>
              <span class="v-tooltip v-tooltip--bottom">
                <span><a href="https://github.com/vuetifyjs/vuetifyjs.com/blob/master/src/examples/layouts/centered.vue" target="_blank" class="v-btn v-btn--icon v-btn--large theme--dark"><div class="v-btn__content">
                  <i aria-hidden="true" class="v-icon material-icons theme--dark" style="font-size: 36px;">code</i>
                </div>
                </a>
                </span>
              </span>
              <span class="v-tooltip v-tooltip--right">
                <span><a href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" class="v-btn v-btn--icon v-btn--large theme--dark">
                  <div class="v-btn__content"><i aria-hidden="true" class="v-icon mdi mdi-codepen theme--dark" style="font-size: 36px;"></i>
                  </div>
                </a></span>
              </span>
            </div>
          </nav>
          <div class="v-card__text">
            <form @submit.prevent="onsubmit" class="v-form">
              <div class="v-input v-text-field theme--light">
              <div class="v-input__prepend-outer">
                <div class="v-input__icon v-input__icon--prepend">
                  <i aria-hidden="true" class="v-icon material-icons theme--light">person</i>
                </div>
              </div>
              <div class="v-input__control"><div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label aria-hidden="true" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">E-mail</label>
                  <input aria-label="Login" name="login" type="text" v-validate="'required|email'">
                </div>
              </div>
                <div class="error" v-if="errors.has('login')">{{errors.first('login')}}</div>
                <div class="v-text-field__details"><div class="v-messages theme--light">
                  <div class="v-messages__wrapper"></div>
                </div>
                </div>
              </div>
            </div>
              <div class="v-input v-text-field theme--light">
                <div class="v-input__prepend-outer">
                  <div class="v-input__icon v-input__icon--prepend">
                    <i aria-hidden="true" class="v-icon material-icons theme--light">person</i>
                  </div>
                </div>
                <div class="v-input__control"><div class="v-input__slot">
                  <div class="v-text-field__slot">
                    <label aria-hidden="true" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">Name</label>
                    <input aria-label="name" name="name" type="text" v-validate="'required'">
                  </div>
                </div>
                  <div class="error" v-if="errors.has('name')">{{errors.first('name')}}</div>
                  <div class="v-text-field__details"><div class="v-messages theme--light">
                    <div class="v-messages__wrapper"></div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="v-input v-text-field theme--light">
              <div class="v-input__prepend-outer">
                <div class="v-input__icon v-input__icon--prepend">
                  <i aria-hidden="true" class="v-icon material-icons theme--light">lock</i>
                </div>
              </div>
              <div class="v-input__control">
                <div class="v-input__slot">
                  <div class="v-text-field__slot">
                    <label for="password" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">Password</label>
                    <input id="password" name="password" type="password" v-validate="{required : true, numeric: true, min: 6}">
                  </div>
                </div>
                <div class="error" v-if="errors.has('password')">{{errors.first('password')}}</div>
                <div class="v-text-field__details">
                  <div class="v-messages theme--light">
                    <div class="v-messages__wrapper">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
          <div class="v-card__actions">
            <div>
              <router-link class="ml-4" to="/login">have an account?</router-link>
            </div>
            <v-spacer></v-spacer>
            <button type="submit" @click="onsubmit()" class="v-btn theme--light primary submit">
              <div class="v-btn__content">Sign Up</div>
            </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        login: null,
        password: null
      }
    },
    methods: {
      onsubmit () {
        this.$validator.validateAll().then(result => {
          if (result) {
            alert('submited')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.error {
  color: red;
  border: none !important;
  background: none !important;
}
</style>
