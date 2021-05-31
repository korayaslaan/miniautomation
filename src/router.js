import Vue from "vue"
import VueRouter from "vue-router"

import Homepage from "./components/Homepage.vue"
import NewUser from "./components/NewUser.vue"
import UserUpdate from "./components/UserUpdate.vue"
import Raporlar from "./components/raporlar.vue"

import User from "./components/User.vue"
import Login from "./components/Login.vue"

import store from "./store"


Vue.use(VueRouter)

const routes = [{
        path: "/",
        component: Homepage,
        beforeEnter(to, from, next) {


            if (store.getters.isLogin) {
                next()
            } else {
                next("/login")
            }
        }

    },
    {
        path: "/new_user",
        name: "new_user",
        component: NewUser,
        beforeEnter(to, from, next) {


            if (store.getters.isLogin) {
                next()
            } else {
                next("/login")
            }
        }

    },
    {
        path: "/user_update",
        name: "user_update",
        component: UserUpdate,
        beforeEnter(to, from, next) {


            if (store.getters.isLogin) {
                next()
            } else {
                next("/login")
            }
        }

    },



    {
        path: "/raporlar",
        name: "raporlar",
        component: Raporlar,
        beforeEnter(to, from, next) {


            if (store.getters.isLogin) {
                next()
            } else {
                next("/login")
            }
        }

    },

    {
        path: "/user",
        name: "user",
        component: User,
        beforeEnter(to, from, next) {


            if (store.getters.isLogin) {
                next()
            } else {
                next("/login")
            }
        }

    },

    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter(to, from, next) {

            if (store.getters.isLogin) {
                next("/")
            } else {
                next()
            }
        }

    },


];
export const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes
});