import './App.css';
import "./style.css";
function App() {
  return (
    <div className="App">
      <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title-red">Dante's app</h1>
    <br />
    <img src="https://masablog001.com/wp-content/uploads/2020/04/1608_special_TOTO_main.jpg" alt=""/>
    <br />
    <img src="https://media.comicbook.com/2021/08/bleach-ceremony-1279116.jpeg?auto=webp" alt=""/>
  </div>
  <video width={320} height={240} controls>
  <source src="/Videos/video1.mp4" type="video/mp4"/>

    
  </video>
</div>

    </div>
  );
}

export default App;
