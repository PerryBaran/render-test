import logo from './logo.svg';
import './App.css';

import axios from "axios";

const userLogin = async (data) => {
  try {
    const response = await axios.post(`https://soundcloud-clone-api.onrender.com/users/login`, {
      email: "jenico.producer@gmail.com",
      password: "pleaseWork"
  }, {
      withCredentials: true,
    });
    console.log(response);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

function App() {

  return (
    <div className="App">
      <button onClick={userLogin} >Login</button>
    </div>
  );
}

export default App;
