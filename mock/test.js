const list = [
  {
    nike: 'Allen',
    phone: 11454857874,
    name: 'sdhajkhsd',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2021-9-12'
  },
  {
    nike: 'Allen2',
    phone: 11454857874,
    name: 'sdhajkhsd',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2021-9-12'
  },
  {
    nike: 'Allen3',
    phone: 11454857874,
    name: 'sdhajkhsd',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2021-9-12'
  }
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
