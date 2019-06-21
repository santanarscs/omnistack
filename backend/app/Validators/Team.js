'use strict'

class Team {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: 'requirerd'
    }
  }
}

module.exports = Team
