import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    Msgs: {
      Registered: "Congratulation, the registeration is Done",
      dontFind: "please, enter a valid Email or Password",
      emailExist: "This email is Already Registered"
    },
    currentMsg: "sameh"
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
    },
    currentMsg(state, msg) {
      state.currentMsg = msg
    }
  },
  actions: {
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    },
    signup ({state, commit, dispatch}, authData) {
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3JF6zLZfqLjK1-24yWukGe2HVbSFmtT4', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', authData)
          // commit("currentMsg", state.Msgs.Registered)
          alert("Congratulation, the registeration is Done")
          router.replace("/");
          // dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => {
          console.log(error.response)
          console.log(error.response.data.error.message)
          let yourMsg = error.response.data.error.message;
          if(yourMsg === 'EMAIL_EXISTS') {
            commit("currentMsg", state.Msgs.emailExist)
          }
        })
    },
    signin ({state, commit, dispatch}, authData) {
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3JF6zLZfqLjK1-24yWukGe2HVbSFmtT4', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }) 
        .then(res => {
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          console.log(res)
          dispatch('setLogoutTimer', res.data.expiresIn)
          router.replace("/")
          commit("currentMsg", state.Msgs.Registered)
        })
        .catch(error => {
          
          let myError = error.response.data.error.message;
          console.log(myError)
          if (myError === 'INVALID_PASSWORD' || myError === "EMAIL_NOT_FOUND") {
            commit("currentMsg" , state.Msgs.dontFind)
          }
        })
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    logout ({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/register/signin');
      console.log("clear")
    },
    storeUser ({state}, userData) {
      if (!state.idToken) {
        return
      }
      axios.post('' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser ({commit, state}) {
      if (!state.idToken) {
        return
      }
      axios.get('' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit('storeUser', users[0])
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    },
    idToken(state){
      return state.idToken;
    },
    

  }
})