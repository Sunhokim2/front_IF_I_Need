import logo from './logo.svg';
import './App.css';

// {styles.head} 이런 식으로 접근해야 사용가능. head인 클래스네임에 접근하는 것이 아닌 classname이 style.head면 앱.모듈.css 안에 있는 css에 접근하는 것
import styles from './App.module.css';
import Header from './Header';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



function Nav(props) {
  const [list, setList] = useState(
    ['원신', '붕괴:스타레일', '명조']
  )
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  console.log('nav 생성')

  return (
    <nav>
      <ul>
        {/* 이렇게 해도 에러안남 props가 { {} } 이상태라 author가 있을 공간이 있으니 넘어가고 ndk는 없어도 에러가 아니다. 그런데 한단계 더 깊게 들어가면 에러가 난다. */}
        {props.author.n}
        <div>
          <li className={styles.head}><a href='1.html'>HTML</a></li>
          <li><a href='2.html'>CSS</a></li>
          <li className={styles.head}><a href='3.html'>JavaScript</a></li>
          <hr></hr>
          {/* ❗❗❗useState로 리스트안에 추가하기 */}
          <button onClick={() => {
            const data = Math.random();
            list.push(data);
            const list2 = [...list];
            setList(list2);
          }}>추가
          </button>

          {list.map((v, i) => {
            // UUID : 챗지피티로 js로 UUID어떻게 만들어? 물어보기
            return (
              <li key={i}>
                <a href=''>
                  {v}
                </a>
                <button onClick={() => {
                  list.splice(i, 1);
                  const list2 = [...list];
                  setList(list2);
                }}>삭제하기</button>
                <button onClick={() => {
                  setShow(true);
                  setIndex(i);
                }}>수정</button>
              </li>
            )
          })}


        </div>
      </ul>
      {/* 수정 창은 존재하지만 보이지 않게 한다. */}
      {/* ✨리액트에선 value값이 {list[index]}로 ✨고정된 상태에서는 onChange같은 함수가 없으면 input입력이 안된다. */}
      {show === true ? <input value={list[index]} onChange={(e) => {
        list[index] = e.target.value;
        const list2 = [...list];
        setList(list2);
      }} /> : null}
    </nav>
  )
}

function Avata(props) {
  return (
    <img className='avatar'
      src={props.author.avataUrl}
      alt={props.author.name}
    />
  )
}
// ***❗❗❗❗비상❗❗
// return 뒤에 바로 '(' 없으면 리액트는 아무것도 없는 것으로 받아들여 아래 들어가는 내용이 누락된다!
function App() {
  console.log('App 생성👌');
  // const list = ['원신', '붕괴:스타레일', '명조'];

  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      <Avata author={{ 'avataUrl': "dkjfk", 'name': "hi" }}></Avata>
      <button onClick={()=>{
          setHide(!hide)
        }}>숨김</button>
      
      {/* 이렇게 숨기면 Header내부의 변수가 초기화되므로 쿠키나 세션에 변수를 저장해야 계속 유지가될 것이다. */}
      {
        hide ? null :
        <Header title="야미" desc={'WWW'} className={styles.haed}></Header>
      }


      <Nav author={{ n: "1", b: "2" }}></Nav>
      <Example></Example>
    </div>
  );
}
export default App;
