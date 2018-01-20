import api from '@/api'
import $http from 'axios'
export default {
    save_categories ({commit}){
        $http.get(api.host + '/categories')
            .then(res=>{
                commit('SAVE_CATEGORIES',res.data)
            })
    },
    save_goods_list({commit}) {
        $http.get(api.host + '/goods_list')
            .then(res => {
                commit('SAVE_GOODS_LIST', res.data)
            })
    }
}