import PropTypes from "prop-types"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting() {
  console.log('getGreeting() Action!!');
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingSuccess(json)))
      .catch((error) => console.log(error));
  };
}

export function getGreetingSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json
  };
}

function Greeting(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <button className="getGreetingBtn" onClick={() => props.getGreeting()}>getGreeting</button>
    </div>
  );
}

const structuredSelector = createStructuredSelector({
  greeting: state => state.greeting,
});

const mapDispatchToProps = { getGreeting }


Greeting.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting)