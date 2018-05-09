import Vue from 'vue'
import Router from 'vue-router'
import PostWall from '@/components/PostWall'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostWall',
      component: PostWall
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    }
  ]
})
