import './App.css';
import { useEffect, useRef } from 'react';

// ../public/index.html에 있는 kakao api 불러오기
const {kakao} = window
let ref = null;

const MapContainer = () => {
  ref = useRef(); // 여기로 이동

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    ref.current = map;


    async function getData() {
      const url = 'https://ggoreb.pythonanywhere.com/location/data/?count=10';
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      const list = data.data;
      list.map((v, i) => {
        const lat = v.latitude;
        const lng = v.longitude;
        //마커 표시하기
        var markerPosition = new kakao.maps.LatLng(lat, lng);
        var marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(ref.current);
      })
    }
    getData();
  }, []);

  return (
    <div id="myMap" style={{
      width: '500px',
      height: '500px'
    }}></div>
  );
}

function App() {
  return (
    <>
      <h1>Kakao Map</h1>
      <MapContainer />
      <button onClick={() => {
        var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
        ref.current.setCenter(moveLatLon);
      }}>이동</button>
    </>
  );
}

export default App;