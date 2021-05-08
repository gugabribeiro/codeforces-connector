const http = require('axios')

const FROM = 1
const COUNT = 1000

class Codeforces {
  submissions(user) {
    return http
      .get(this.routes.submissions(user))
      .then(({ data: { result } }) => result)
  }

  get routes() {
    return {
      root: () => 'https://codeforces.com/api',
      submissions: (user) =>
        `${this.routes.root()}/user.status?handle=${user}&from=${FROM}&count=${COUNT}`,
    }
  }
}

module.exports = Codeforces
