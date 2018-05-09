<template>
  <div class="post_wall">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.titile">
        <router-link :to="{name: 'Post', params: {id: post.id}}">{{post.title}}</router-link>
        <h2 class="published"><b>Posted:</b> {{post.date}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostWall',
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      postsUrl: 'http://localhost:3000/post',
      posts: [],
      postsData: {
        per_page: 10,
        page: 1
      }

    }
  },
  methods: {
    getPosts () {
      axios.get(this.postsUrl)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            response.data[i] = JSON.parse(response.data[i])
          }
          this.posts = response.data
        })
        .catch((error) => {
          console.log(error)
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
.published {
  font-size: 10px;
}
</style>
