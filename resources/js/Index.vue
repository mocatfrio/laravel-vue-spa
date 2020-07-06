<template>
<div>
  <nav class="navbar navbar-expand-lg bg-white border-bottom navbar-light">
    <router-link class="navbar-brand mr-auto" :to="{ name: 'home' }">LaravelBnB</router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'basket' }">Basket <span class="badge badge-secondary ml-1">{{ !itemsInBasket ? 0 : itemsInBasket }}</span></router-link>
      </li>
      <li class="nav-item" v-if="!isLoggedIn">
        <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
      </li>
      <li class="nav-item" v-if="!isLoggedIn">
        <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
      </li>
      <hr>
      <li class="nav-item" v-if="isLoggedIn">
        <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>

  </nav>
  <div class="container mt-4 mb-4 pr-4 pl-4">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapGetters
} from "vuex";

export default {
  data() {
    return {
      lastSearch: this.$store.state.lastSearch
    }
  },
  computed: {
    ...mapState({
      lastSearchComputed: 'lastSearch',
      isLoggedIn: "isLoggedIn"
    }),
    ...mapGetters({
      itemsInBasket: 'itemsInBasket'
    })
  },
  methods: {
    async logout() {
      try {
        axios.post('/logout');
        this.$store.dispatch('logout');
      } catch (error) {
        this.$store.dispatch('logout');
      }
    }
  }
}
</script>
