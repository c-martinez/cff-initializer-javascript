import { StepNameType, useApp } from 'src/store/app'
import {
    createMemoryHistory,
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'
import { route } from 'quasar/wrappers'
import routes from 'src/router/routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route((/* { store, ssrContext } */) => {
    const createHistory = process.env.SERVER
        ? createMemoryHistory
        : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createHistory(
            process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
        )
    })
    Router.beforeEach((to) => {
        const { navigateDirect } = useApp()
        const newStepName = to.path.replace('/', '') as StepNameType
        document.body.setAttribute('tabindex', '-1')
        document.body.focus()
        document.body.removeAttribute('tabindex')
        navigateDirect(newStepName)
    })
    return Router
})
