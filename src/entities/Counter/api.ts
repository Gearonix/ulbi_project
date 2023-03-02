import axios from 'axios'

export const counterApi = {
  doSomething() {
    return axios.get('https://dummyjson.com/products/1')
  },
}

export type CounterApi = typeof counterApi
