<template>
  <div class="post">
    <h1>{{post.title}}</h1>
    <div v-html="previewText"></div>
  </div>
</template>

<script>
import axios from 'axios'

let marked = require('marked')

export default {
  name: 'Post',
  mounted () {
    this.getPost(this.$route.params.id)
  },
  data () {
    return {
      postsUrl: 'http://localhost:3000/post',
      post: null
    }
  },
  methods: {
    getPost (postID) {
      axios.get(this.postsUrl, {
        params: {
          id: postID
        }
      })
        .then((response) => {
          this.post = JSON.parse(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    previewText () {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      })
      return marked(this.post.content)
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
