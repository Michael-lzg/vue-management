import Mock from 'mockjs'
const Random = Mock.Random

const tableList = function () {
  let list = []
  for (let i = 0; i < 10; i++) {
    let dataList = {
      title: Random.csentence(10, 15),
      img: Random.dataImage('200x100'),
      name: Random.cname(2, 4),
      date: Random.date('yyyy-MM-dd'),
      nums: Random.natural(100, 1000),
      zans: Random.natural(1, 5),
      isDraft: Random.boolean(),
      address: Random.county(true)
    }
    list.push(dataList)
  }
  return {list: list}
}

Mock.mock('http://test123.com', 'post', tableList)
