// import request from '@/utils/request'
import axios from 'axios'

export function login (data) {
  console.log('*user api*')
  // axios.get('http://vue.demo.server.com/was/authenticate', { title: 'TEST CODE' })
  axios.get('/was/authenticate', { title: 'TEST CODE' })
  .then(res => {
    console.log('res_', res);  
  })
  .catch(err => {
    console.log('err_', err);
  })
}

export function axiosGet (data) {
  console.log('*user api about axiosGet*', data.get('getAddr'))
  // axios.get('http://vue.demo.server.com/was/authenticate', { title: 'TEST CODE' })
  axios.get('/was/'+data.get('getAddr'))
  .then(res => {
    console.log('axiosGet res_', res);  
  })
  .catch(err => {
    console.log('axiosGet err_', err);
  })
}
