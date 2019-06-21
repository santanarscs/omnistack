'use strict'

class User {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: 'requirerd',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }
}

module.exports = User
