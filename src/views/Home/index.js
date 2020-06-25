import React from 'react'
import { Button, message } from 'antd';
import './home.less'
import store from '@/store'
import { getMusic } from '@/api/'


class HomeView extends React.Component {
  state = {
    musics: []
  }
  componentWillMount () {
    getMusic().then((res) => {
      console.log(res)
      if(res.code!==200) {
        message.warning('获取失败！请稍后重试');
      } else {
        this.optionData(res.result.tracks) 
      }
    }).catch((err) => {
      console.log(err)
    })
    // console.log(this.props.location.search)
  }
  optionData (data) {
    let music = []
    data.forEach((item, i) => {
      music.push({
        key: i,
        name: item.name,
        ID: item.id,
        artists: item.artists[0].name,
        tags: [item.album.company, item.album.subType],
        img: item.album.blurPicUrl
      })
    });
    this.setState({
      musics: music
    })
  }
  addRoot = () => {
    store.dispatch({type: 'ADD_ROOT'})
  }

  render () {
    return (
      <div className='home-wrap'>
        首页
        <Button type="primary" onClick={this.addRoot}>Add Root</Button>
        <ul>
          {
            this.state.musics.map((item,index) => {
              return (
                // 避免使用数组的 index 来作为属性 key 的值，推荐使用唯一 ID
                <li key={item.ID}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default HomeView
