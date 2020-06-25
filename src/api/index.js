import request from './request'

// const baseUrl = process.env.NODE_ENV === 'production' ? 'http://47.106.130.141:9612' : 'http://47.106.130.141:9612' // api的base_url

function getReauest(url, data) {
  return request({
    url: url,
    method: 'get',
    params: data
  })
}

// 音乐
export function getMusic (datas) {
  return getReauest('http://47.106.130.141:9612/other/musicRecommend?updateTime=-1&id=2829883282', datas)
}
