import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// ❗❗❗❗이렇게 접근하면 오류가 생긴다. useEffect()써야한다
const Test = () => {
  useEffect(() => {
    const clock = document.querySelector('#clock');
    let aaa = clock.innerText;

    const h44 = document.querySelector('h4')

    h44.innerText = aaa;
  })
  console.log('tset가 clock에 접근')

  return (
    <h4></h4>
  )
}

const Clock = () => {
  const [hours , setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  // useEffect는 모든 것이 렌더링 후에 동작한다.
  // 그래서 라인이 더 뒤에 있는 #clock에 접근가능
  useEffect(() => {
    getClock();

    // 리액트는 가상DOM을 사용해서 1초마다 갱신을 탐지해도 비효율적이지 않다.
    setInterval(getClock, 1000);
  }, []);

  function getClock() {
    const clock = document.querySelector('#clock');
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    
    setHours(String(date.getHours()).padStart(2, "0"));
    setMinutes(String(date.getMinutes()).padStart(2, "0"))
    
    // 아래는 리액트스럽지 않다.
    // clock.innerText = `${hours}:${minutes}`;
  }

  return (
    <h2 id="clock">{hours}:{minutes}</h2>
  );
}
const Location = (props) => {
  return (
    <h2 id="location">
      {props.area} / {props.lat} / {props.lng}
    </h2>
  );
}


// api를 통해 비동기로 데이터 받기
// 비동기 = await
// 논블로킹 = async
const Weather = () => {
  const getData = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.1176&lon=129.0451&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const name = data.name;
    document.querySelector('#location').innerHTML = `${name} / ${lat} / ${lon}`;

    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const temp = data.main.temp;
    const speed = data.wind.speed;
    const main = data.weather[0].main;

    document.querySelector('#weather > span:nth-child(1)').innerHTML = `${main}`;
    document.querySelector('#weather > span:nth-child(2)').innerHTML = `<img src='${icon}'>`;
    document.querySelector('#weather > span:nth-child(3)').innerHTML = `${temp.toFixed(1)}℃`;
    document.querySelector('#weather > span:nth-child(4)').innerHTML = `${speed}m/s`;

  }


  useEffect(() => {
    getData();
  })

  return (
    <div id="weather">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Test></Test>
      <Clock></Clock>
      <Location area="busdan" lat={3.42} lng={1.32}></Location>
      <Weather></Weather>
    </div>
  );
}

export default App;
