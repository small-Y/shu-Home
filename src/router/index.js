import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/Home.vue'

import HomeCont from '@/views/HomeCont.vue'
import ComDynamic from '@/views/ComDynamic.vue'
import DecorateCase from '@/views/DecorateCase.vue'
import DecoratePack from '@/views/DecoratePack.vue'
import DecorateStrategy from '@/views/DecorateStrategy.vue'
import EnterpriseHonor from '@/views/EnterpriseHonor.vue'
import FiveService from '@/views/FiveService.vue'
import YouLai from '@/views/YouLai.vue'
import TenBen from '@/views/TenBen.vue'
import EnterpriseCulture from '@/views/EnterpriseCulture.vue'

export default new Router({
  routes: [
    { path: '/',
      component: Home,
      children: [
        { path: '/', component: HomeCont },
        { path: 'case',component: DecorateCase },
        { path: 'pack',component: DecoratePack },
        { path: 'strategy',component: DecorateStrategy },
        { path: 'youlai',component: YouLai },
        { path: 'dynamic',component: ComDynamic },
        { path: 'honor',component: EnterpriseHonor },
        { path: 'ben',component: TenBen },
        { path: 'culture',component: EnterpriseCulture }
      ]
    }
  ]
})
