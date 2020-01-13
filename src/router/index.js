import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Books from '@/views/Books.vue'
import Authors from '@/views/Authors.vue'
import Publishing from '@/views/Publishing.vue'
import Book from '@/views/Book.vue'
import Author from '@/views/Author.vue'
import Authorbooks from '@/views/Authorbooks.vue'
import Publishingbook from '@/views/Publishingbook.vue'
import Bookedit from '@/views/Bookedit.vue'
import Bookadd from '@/views/Bookadd.vue'
import Authoradd from '@/views/Authoradd.vue'
import Publishingadd from '@/views/Publishingadd.vue'
import Authoredit from "@/views/Authoredit.vue";
import Page404 from "@/views/Page404.vue";
import Publishingedit from "@/views/Publishingedit.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    meta: {layout: 'main'},
    component: Books
  },
  {
    path: '/authors',
    name: 'authors',
    meta: {layout: 'main'},
    component: Authors
  },
  {
    path: '/publishing/:id',
    name: 'publishing',
    meta: {layout: 'main'},
    props: true,    
    component: Publishing
  },
  {
    path: '/publishingbook/:id',
    name: 'publishingbook',
    meta: {layout: 'main'},
    props: true,
    component: Publishingbook
  },
  {    
    path: '/book/:id',
    name: 'book',
    meta: {layout: 'main'},
    props: true,
    component: Book
  },
  {
    path: '/author/:id',
    name: 'author',
    meta: {layout: 'main'},
    props: true,
    component: Author
  },
  {
    path: '/authorbooks/:id',
    name: 'authorbooks',
    meta: {layout: 'main'},
    props: true,
    component: Authorbooks 
  },
  {
    path: '/book-edit/:id',
    name: 'edit',
    meta: {layout: 'main'},
    props: true,
    component: Bookedit
  },
  {
    path: '/publishing-edit/:id',
    name: 'publishing-edit',
    meta: {layout: 'main'},
    props: true,
    component: Publishingedit
  },
  {
    path: '/author-edit/:id',
    name: 'author-edit',
    meta: {layout: 'main'},
    props: true,
    component: Authoredit
  },
  {
    path: '/book-add',
    name: 'add',
    meta: {layout: 'main'},
    props: true,
    component: Bookadd
  },
  {
    path: '/author-add',
    name: 'author-add',
    meta: {layout: 'main'},
    props: true,
    component: Authoradd
  },
  {
    path: '/publishing-add',
    name: 'publishing-add',
    meta: {layout: 'main'},
    props: true,
    component: Publishingadd
  },
  {
    path: '*',
    name: 'not-found',
    meta: {layout: 'empty'},
    component: Page404
  } 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
