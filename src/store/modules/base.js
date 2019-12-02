import { GET_INFO_ASYNC } from '@/store/mutation-types'

const { PENDING, SUCCESS, FAILURE } = GET_INFO_ASYNC

const state = {
  loading: false,
}

const mutations = {
  [PENDING](state) {
    state.loading = true
  },
  [SUCCESS](state) {
    state.loading = false
  },
  [FAILURE](state) {
    state.loading = false
  },
}

export { state, mutations }
