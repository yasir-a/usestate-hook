import "./Counter.css";

const Counter = ({ count, onClick }) => {
  return (
    <div className='counter-container'>
      <div className='display-container'>
        <div className='display-lbl'>{count}</div>
      </div>
      <div className='btn-grp'>
        <button id='+' className='btn' onClick={(e) => onClick(e.target.id)}>
          +
        </button>
        <button id='-' className='btn' onClick={(e) => onClick(e.target.id)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
