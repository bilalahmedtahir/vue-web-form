<template>
  <nav>
    <RouterLink to="/">SignUp</RouterLink>  | 
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/home">Home</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>

  <button @click="redirect">Redirect to Home</button>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    redirect(){
      this.$router.push({name:"home"})
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
</style>
