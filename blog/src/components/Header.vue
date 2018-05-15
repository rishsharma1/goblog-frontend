<template>
  <div class="header">
    <b-nav-item ><router-link to="/"><h2>Home</h2></router-link></b-nav-item>
    <b-nav-item ><router-link to="/"><h2>About</h2></router-link></b-nav-item>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-decoration: underline;
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
.published {
  font-size: 10px;
}
</style>
