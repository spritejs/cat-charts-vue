import Vue from 'vue'

export default function(prefix, routes) {
  return Vue.component(
    prefix.replace(/(\/)\w+/g, m => m.toUpperCase()).replace(/\//g, ''),
    {
      data() {
        return { prefix, routes }
      },
      render(h) {
        return h('div', [
          h(
            'ul',
            {
              class: {
                'demo-menu': true
              }
            },
            routes.map((route, i) => {
              if(!route.redirect){
                return h(
                  'li',
                  {
                    key: i,
                    domProps: {
                      className:'nav-item',
                    }
                  },
                  [
                    h('router-link', {
                      props: {
                        to: prefix + route.path
                      },
                      domProps: {
                        innerHTML: route.title
                      }
                    })
                  ]
                )
              }
              
            })
          ),

          h('router-view')
        ])
      }
    }
  )
}
