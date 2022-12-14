import PropTypes from 'prop-types';

const Button = ({ clickHandler }) => {
  return (
    <div className="button-wrapper">
      <button type="button" onClick={clickHandler} className="Button">
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
