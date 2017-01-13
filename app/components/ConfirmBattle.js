var React = require('react');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <h2> LOADING.... </h2>
    : <h2> CONFIRM BATTLE! {puke(props)} </h2>
}

module.exports = ConfirmBattle;
