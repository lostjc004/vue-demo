<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links By Chul........</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <h2>Axios TEST</h2>
    <!-- <ul>
      <li>
        <a
          target="_blank"
          @click="login"
        >
          call authenticate
        </a>
      </li>
    </ul> -->
    <ul>
      <li>
          http://vue.demo.server.com/was/
          <input type="text" v-model="axiosGet">
          <a
          target="_blank"
          @click="axiosGetMethod"
          > => [GET]
        </a>
      </li>
    </ul>
    <ul>
      <li>
          http://vue.demo.server.com/was/
          <input type="text" v-model="axiosPost">
          <a
          target="_blank"
          @click="axiosPostMethod"
          > => [POST]
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      axiosGet: '',
      axiosPost: '',
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/login', {'username': 'admin', 'password': 'pass'})
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },

    axiosGetMethod () {
      this.$store.dispatch('user/axiosGet', {'getAddr': this.axiosGet})
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },

    axiosPostMethod () {
      this.$store.dispatch('user/axiosPost', {'getAddr': this.axiosPost})
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
