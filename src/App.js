import logo from './logo.svg';
import './App.css';

import axios from "axios";

const userLogin = async (data) => {
  try {
    const response = await axios.post(`http://localhost:4000/users/login`, {
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
      <button onClick={userLogin} >Login LOCALHOST</button>
    </div>
  );
}

export default App;
