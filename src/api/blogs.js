import axios from 'axios'

export function getBlogPosts() {
  return axios.get('http://jsonplaceholder.typicode.com/posts')
}

export function getComments(postId) {
  return axios.get(
    `http://jsonplaceholder.typicode.com/posts/${postId}/comments`
  )
}

export function getUsers() {
  return axios.get('http://jsonplaceholder.typicode.com/users')
}

export function getUserId(userId) {
  return axios.get(
    `http://jsonplaceholder.typicode.com/users/${userId}`
  )
}


export function postBlogPosts(data) {
  return axios.post('http://jsonplaceholder.typicode.com/posts', data)
}

export function postUser(data) {
  return axios.post('http://jsonplaceholder.typicode.com/users', data)
}


 