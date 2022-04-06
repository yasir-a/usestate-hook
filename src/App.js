import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import InputBox from "./component/InputBox";
import Login from "./assets/unDraw/loginSVG.svg";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState({ name: "", email: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const handleOnClick = (operator) => {
    if (operator === "+") {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className='App'>
      <div className='form-container'>
        <Counter count={count} onClick={handleOnClick} />
      </div>

      <div className='form-container'>
        <form className='form' onSubmit={handleOnSubmit}>
          <img className='login-img' src={Login} alt='login' />
          <InputBox
            id='name'
            type='text'
            name='name'
            value={input.name}
            label='Name'
            onChange={handleOnChange}
          />
          <InputBox
            id='email'
            type='email'
            name='email'
            value={input.email}
            label='Email'
            onChange={handleOnChange}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
