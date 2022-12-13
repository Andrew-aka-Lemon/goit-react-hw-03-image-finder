const Button = ({ clickHandler }) => {
  return (
    <div className="button-wrapper">
      <button type="button" onClick={clickHandler} className="Button">
        Load more
      </button>
    </div>
  );
};

export default Button;
