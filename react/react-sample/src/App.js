import logo from './logo.svg';
import './App.css';

import Article from './comp/Article';
import Footer from './comp/Footer';
import Header from './comp/Header';
import Section from './comp/Section';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr></hr>
      <Section></Section>
      <Article></Article>
      <Footer></Footer>
    </div>
  );
}

export default App;
