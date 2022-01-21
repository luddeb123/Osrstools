export default {
    state: {
      loading: false,
      authError: null
    },
    mutations: {
      setLoading (state, payload) {
        state.loading = payload
      },
      setauthError (state, payload) {
        state.authError = payload
      },
      clearauthError (state) {
        state.authError = null
      }
    },
    getters: {
      loading (state) {
        return state.loading
      },
      authError (state) {
        return state.authError
      }
    }
  }