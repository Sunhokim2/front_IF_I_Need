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


          {props.list.map((v, i) => {
            // UUID : 챗지피티로 js로 UUID어떻게 만들어? 물어보기
            return (
              <li key={i}>
                <a href=''>
                  {v}
                </a>
              </li>
            )
          })}


        </div>
      </ul>
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
  const list = ['원신', '붕괴:스타레일', '명조'];


  return (
    <div className="App">
      <Avata author={{ 'avataUrl': "dkjfk", 'name': "hi" }}></Avata>
      <Header title="야미" desc={'WWW'} className={styles.haed}></Header>

      <Nav author={{ n: "1", b: "2" }} list={list}></Nav>
      <Example></Example>
    </div>
  );
}
export default App;
