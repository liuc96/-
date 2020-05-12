// 加载mockjs库
const Mock = require('mockjs')
const Random = Mock.Random
// 构建一个函数对象，返回mock数据
const produceNewsData = function () {
  const newsList = []
  for (let i = 0; i < 20; i++) {
    const newNewsObject = {
      title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }

  return newsList
}
// url是真实的url，第二个参数是post和get都管，第三个参数就是传入函数对象
Mock.mock('/mock/userinfo', produceNewsData)
