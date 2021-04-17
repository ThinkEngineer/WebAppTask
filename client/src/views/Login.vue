<style>
.bg {
  background: url('https://assets.wallpapersin4k.org/uploads/2017/04/Web-Page-Wallpaper-Backgrounds-18.jpeg')
    no-repeat center center fixed !important;
  background-size: cover;
}
</style>

  <template>

  <v-container
    class="fill-height bg"
    fluid
  >
      <v-row
        align="center"
        justify="center"
      >
        
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          
          <v-card class="elevation-12" v-if="!loading">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login</v-toolbar-title>
              
            </v-toolbar>
            <v-card-text>
              <v-form id="login-form" v-model="valid" @submit.prevent="login">
                <v-text-field
                v-model="user.email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                :rules="notEmptyRule"
                required
                @keyup.enter="submit"
              ></v-text-field>

              <v-text-field
                v-model="user.password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="notEmptyRule"
                required
                @keyup.enter="submit"
              ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn to="/register" color="primary">Register</v-btn>
              <v-btn color="primary" type="submit" form="login-form" :disabled="!valid" >Login</v-btn>
            </v-card-actions>
          </v-card>
          <v-progress-circular
            v-if="loading"
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',

  data: () => ({
    showPassword: false,
    user: {
      password: "",
      email: "",
    },
    valid: false,
    notEmptyRule: [(value) => !!value || 'You need to feel this in!'],
  }),
  
  computed: {
    ...mapState('auth', {loading: 'isAuthenticatePending'}),
  },

  methods: {
    ...mapActions('auth', ['authenticate']),
    login() {
      if (this.valid) {
        this.authenticate({
          strategy: 'local',
          email: this.user.email,
          password: this.user.password,
        }).then(() => {
          this.$router.push('/dashboard');
        }).catch(e => {
          console.log('Auth error ', e);
        });
      }
    }
  },
};
</script>

