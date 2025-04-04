import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';

function ComponentN() {
  const { number } = useParams();
  const location = useLocation();

  return (
    <div>(파라미터를 이용한 화면) {number}번 화면</div>
  )
}

function ComponentAZ() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  return (
    <div>ID-{id}, NAME-{name}</div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        <Link to='/1'>1번으로 이동</Link> /&nbsp;
        <Link to='/2'>2번으로 이동</Link> /&nbsp;
        <Link to='/3'>3번으로 이동</Link>
        {/* a태그로 전체 새로고침은 리액트가 좋아하는 방식은아니다. */}
        {/* <a href='/1'>1번으로 이동</a> /&nbsp;
        <a href='/2'>2번으로 이동</a> /&nbsp;
        <a href='/3'>3번으로 이동</a> */}
        <hr />
        <Link to='/com?id=10&name=abc'>이동 (쿼리 스트링)</Link>
        <Routes>
          <Route path='/:number' element={<ComponentN />}></Route>
          <Route path='/com' element={<ComponentAZ />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}
export default App;
