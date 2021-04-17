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
            <v-toolbar-title>Register Account</v-toolbar-title>
            
          </v-toolbar>
          <v-card-text>
            <v-form v-model = valid @submit.prevent="register" id="register-form">
              <v-text-field
                v-model="user.email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                :rules="notEmptyRule"
                required
                @keyup.enter="register"
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
                @keyup.enter="register"
              ></v-text-field>

              <v-text-field
                v-model="user.confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="confirmPasswordRule"
                required
                @keyup.enter="register"
              ></v-text-field>
            </v-form>
            If you already have an account, 
            <router-link :to="{ name: 'Login'}">
              Login here.
            </router-link>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" :disabled="!valid" form="register-form">Register</v-btn>
            
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

import { mapState } from 'vuex'

export default {
  name: 'Register',

  data: (vm) => ({
    showPassword: false,
    user: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    valid: false,
    notEmptyRule: [(value) => !!value || 'You need to feel this in!'],
    confirmPasswordRule: [(value) => value == vm.user.password || 'Password must match!'],
    
  }),

  computed: {
    ...mapState('users', {loading: 'isCreatePending'}),
  },

  methods: {
    register() {
      if (this.valid) {
        console.log('Registering user');
        const { User } = this.$FeathersVuex.api;
        const newUser = new User(this.user);
        newUser.save().then(
          user => {
            console.log(user);
            this.$router.push('/login');
          }
        );
      }
    },
  }
};
</script>