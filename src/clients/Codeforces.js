const http = require('axios')

const FROM = 1
const COUNT = 1000000

class Codeforces {
  problems() {
    return http.get(this.routes.problems()).then(
      ({
        data: {
          result: { problems },
        },
      }) => problems
    )
  }

  profile(user) {
    return http
      .get(this.routes.profile(user))
      .then(({ data: { result } }) => result[0])
  }

  submissions(user) {
    return http
      .get(this.routes.submissions(user))
      .then(({ data: { result } }) => result)
  }

  get routes() {
    return {
      root: () => 'https://codeforces.com/api',
      problems: () => `${this.routes.root()}/problemset.problems`,
      profile: (user) => `${this.routes.root()}/user.info?handles=${user}`,
      submissions: (user) =>
        `${this.routes.root()}/user.status?handle=${user}&from=${FROM}&count=${COUNT}`,
    }
  }
}

module.exports = Codeforces
