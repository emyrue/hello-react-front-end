import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

export function getGreetingSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json,
  };
}

function getGreeting() {
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingSuccess(json)));
  };
}

function Greeting(props) {
  const { greeting, getGreeting } = props;
  return (
    <div>
      <h1>{greeting}</h1>
      <button type="button" className="getGreetingBtn" onClick={() => getGreeting()}>getGreeting</button>
    </div>
  );
}

const structuredSelector = createStructuredSelector({
  greeting: (state) => state.greeting,
});

const mapDispatchToProps = { getGreeting };

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  getGreeting: PropTypes.func.isRequired,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
