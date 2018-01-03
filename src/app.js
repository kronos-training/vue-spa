import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'

// Vue.component('app', {
//   template: `
//     <div>
//       <nav class="nav has-shadow">
//         <div class="container">
//           <a href="/">
//             <img src="http://bit.ly/vue-img" alt="Vue SPA" />
//           </a>
//         </div>
//       </nav>
//       <section class="main-section section"></section>
//     </div>
//   `
// })

// const app = new Vue({
//   data: {
//     hello: 'hi there 61'
//   },
//   template: '<div id="app">{{ hello }}</div>'
// })
// const app = new Vue({
//   // render: h => h('app') // similar template: '<app></app>'
//   render: h => h(AppLayout)
// })

const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
