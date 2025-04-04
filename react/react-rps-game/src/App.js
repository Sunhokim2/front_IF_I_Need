import './App.css';
import styles from './App.module.css';

function Title() {
  return (
    <div className='title'>
      <h1>가위 바위 보 게임</h1>
    </div>
  );
}
function Scissors(props) {
  return (
    <div className={styles.control}
      onClick={() => {
        props.send1('가위')
      }}>
      <img src='http://ggoreb.com/images/react/scissors.png' />
    </div>
  );
}
function Rock(props) {
  return (
    <div className={styles.control}>
      <img src='http://ggoreb.com/images/react/rock.png' />
    </div>
  );
}
function Paper(props) {
  return (
    <div className={styles.control}>
      <img src='http://ggoreb.com/images/react/paper.png' />
    </div>
  );
}
function Result(props) {
  return (
    <div className='result'>
      <h1>Com:</h1>
      <h1>Player:</h1>
      <h1></h1>
    </div>
  );
}
function App() {
  const send = (what)=>{
    alert(what);
  }
  return (
    <div className="App">
      <Title />
      <Scissors send1={send} />
      <Rock send1={send}/>
      <Paper send1={send}/>
      <Result />
    </div>
  );
}

export default App;
