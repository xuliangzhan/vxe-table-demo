import { DELETE, POST, GET } from 'xe-ajax-mock'
import Helper from './helper'

GET('/api/conf/role/list', require('./conf/role.json'))
GET('/api/conf/sex/list', require('./conf/sex.json'))

class UserVO {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.password = data.password
    this.sex = data.sex
    this.role = data.role
    this.region = data.region
    this.email = data.email
    this.age = data.age
    this.rate = data.rate
    this.flag = data.flag
    this.phone = data.phone
    this.describe = data.describe
    this.describe2 = data.describe2
    this.describe3 = data.describe3
    this.attr1 = data.attr1
    this.attr2 = data.attr2
    this.attr3 = data.attr3
    this.attr4 = data.attr4
    this.attr5 = data.attr5
    this.attr6 = data.attr6
    this.createTime = data.createTime
    this.updateTime = data.updateTime
  }
}
const userHelper = new Helper(require('./user/list.json'), UserVO)
DELETE('/api/user/delete/{id}', userHelper.deleteByPathVariable())
POST('/api/user/add', userHelper.insertByBody())
POST('/api/user/update', userHelper.updateByBody())
POST('/api/user/save', userHelper.saveListByBody())
GET('/api/user/list', userHelper.findList({ max: 10 }))
GET('/api/user/page/list/{pageSize}/{currentPage}', userHelper.findPageList())
