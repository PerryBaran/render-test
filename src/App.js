import logo from './logo.svg';
import './App.css';
import axios from "axios";
import cookie from 'js-cookie';

const userLogin = async (address) => {
  try {
    const response = await axios.post(address, {
      email: "jenico.producer@gmail.com",
      password: "pleaseWork"
  }, {
      withCredentials: true,
    });
    const token = cookie.get('userToken');
    console.log(response, token);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

function App() {

  return (
    <div className="App">
      <button onClick={() => userLogin('http://localhost:4000/users/login')} >Login Localhost</button>
      <button onClick={() => userLogin('https://soundcloud-clone-api.onrender.com/users/login')}>Login Render</button>
    </div>
  );
}

export default App;
