import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="text-box">
        <div className="column">
          <h2>歡迎來到peichen的網站</h2>
          <p>以下是我的自我介紹</p>
        </div>
        <div className="column">
          <h2>我是資管三C的施沛辰</h2>
          <p>學號是411630154</p>
          <p>興趣是畫畫跟看動漫</p>
        </div>
        <div className="column">
          <h2>這是我最喜歡的吉祥物</h2>
          <p>他叫烏薩奇</p>
        </div>
      </div>


      <img src="/rabbit.png" alt="可愛的烏薩奇"/>
        <div className="text-box">
          <a href="https://chiikawa.fandom.com/zh/wiki/%E5%85%94%E5%85%94">點擊這裡查看更多</a>
        </div>

        <div className="text-box">
          <h1>我最喜歡的吉伊卡哇</h1>
          <ul>
            <li>烏薩奇</li>
            <li>小八貓</li>
            <li>吉伊卡哇</li>
          </ul>
        </div>
        <div className="text-box">
          <h1>我最喜歡的甜點排名</h1>
          <ol>
            <li>布丁</li>
            <li>甜甜圈</li>
            <li>奶酪</li>
          </ol>
        </div>
        <span>這是一個行內元素。</span>
      
        <table>
          <tr>
            <th>名字</th>
            <th>歌曲1</th>
            <th>歌曲2</th>
            <th>歌曲3</th>
          </tr>
          <tr>
            <td>知更鳥</td>
            <td>If I can stop one heart from breaking</td>
            <td>Sway to my beat in cosmos</td>
            <td>Hope is the thing with feathers</td>
          </tr>
        </table>
        <div className="text-box">
          <strong>知更鳥非常美</strong>
          <em>Welcome to my world~~</em>
        </div>
      </>
      )
}

      export default App
