const http = require('axios')

class Judge {
  submissions(user) {
    return http.get(this.routes.submissions(user))
  }

  get routes() {
    return {
      root: () => '',
      submissions: (user) => `${this.routes.root()}/`,
    }
  }
}

module.exports = Judge
