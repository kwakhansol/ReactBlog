/* eslint-disable */

import React, {useState} from'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let posts = '강남고기맛집';
  let navStyle = {color : 'white', fontSize:'30px'};
  let [글제목, 글제목변경] = useState(['남자 코트  추천','3월4일 예진이네 놀러옴', '어제는 삼겹살데이였음','다이어트 어떻게하는거죠?','점심메뉴추천받음']);
  let [발행날짜, 발행날짜변경] = useState(['2월17일 발행','3월 3일 발행','3월 4일 발행','3월 3일 발행','3월 6일 발행']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false); // 모달창을 켜고 닫는 스위치로 false값을,,
  let [누른제목,누른제목변경] = useState(0);
  let [입력값, 입력값변경] =  useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div style={navStyle}>개발 Blog</div>
      </div>
  
      {
        글제목.map(function(글,i){
          return (
          <div className="list" key={i}>
            <h4 onClick={ ( ) => {누른제목변경(i)} }>{글}
              <span onClick={ ()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉}
            </h4>
            <p>{발행날짜[i]}</p>
            <hr/>
          </div>
          )
        })
      }

      <div className="publish">
       <div className="write"> 글쓰기</div>
        <input onChange={ (e) =>{입력값변경(e.target.value)}}/> 
        <button onClick={ () => {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
          }}>저장</button>
      </div>
    {/* {입력값}  
    <input onChange={ (e) => {입력값변경(e.target.value)}}/> */}

    <hr/> 
      <button className="detailBtn" onClick={ () => {modal변경(!modal)}}>열고닫기</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      } 
  </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{ props.글제목[props.누른제목]}</h2>
      <p>발행날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
