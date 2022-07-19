import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';


function App() {

  const [state, setState] = useState([]);
  const[secondState, setSecondState] = useState([]);

  useEffect(() =>{
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c99a687890015fbe80f81d279426568d&language=en-US&page=1').then(resp =>{
      if (resp.data){
        setState(resp.data.results);
      }
    })
      .catch(err =>{
        console.log(err.message, '<<<<<error');
      });
    }, []);


  return (
    <div className="App">
      <div className="myBg">
        <NavigationBar />
      </div>
      <div className='list'>
        {state.map(item => (
          <Card
            movies={item}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
