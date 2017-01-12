var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <h2> LOADING.... </h2>
    : <h2> CONFIRM BATTLE! </h2>
}

module.exports = ConfirmBattle;
