<template>

  <v-container fill-height class="grey lighten-5">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.webp"
          transition="scale-transition"
          width="350"
        />
      </div>

      <v-spacer></v-spacer>
      
      <v-btn
        text
        @click="logout"
      >
        Logout
      </v-btn>
    </v-app-bar>
    
    <v-row>
     
    </v-row>


  </v-container>
</template>

<script>
// @ is an alias to /src
import {mapActions} from "vuex"
// import DataSelector from '@/components/DataSelector.vue'
// import DataScroller from '@/components/DataScroller.vue'
// import LabellingControl from '@/components/LabellingControl'
// import TimeSyncAdjustor from '@/components/TimeSyncAdjustor'
// import VideoBox from '@/components/VideoBox'

export default {
  name: 'Dashboard',

  components: {
    // DataSelector,
    // DataScroller,
    // LabellingControl,
    // TimeSyncAdjustor,
    // VideoBox,
  },

  methods: {
    ...mapActions('auth', {authLogout: 'logout'}),
    logout(){
      this.authLogout().then(() => {
        localStorage.removeItem('accessToken');
        this.$router.push('/')
      })
    }
  }
}
</script>
