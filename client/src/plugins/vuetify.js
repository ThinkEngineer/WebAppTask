import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: 0x673ab7,
                secondary: 0x00bcd4,
                accent: 0xff5722,
                error: 0xf44336,
                warning: 0xffc107,
                info: 0x03a9f4,
                success: 0x4caf50
                }
        }
    }
});
