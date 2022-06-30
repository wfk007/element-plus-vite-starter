import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import '~/styles/index.scss';

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss';

const app = createApp(App);
// app.use(ElementPlus);

const Home = () => import("~/pages/Home.vue");
const Test1 = () => import("~/pages/Test1.vue");
const Test2 = () => import("~/pages/Test2.vue");
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            children: [
                { path: 'test1', component: Test1, name: 'test1' },
                { path: 'test2', component: Test2, name: 'test2' },
            ],
        },
    ],
});
app.use(router);
app.mount('#app');
