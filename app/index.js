var React = require('react')
var ReactDOM = require('react-dom')

var HelloWorld = React.createClass({
  render: function () {
    console.log(this.props)
    
    return (
      <div> Hello {this.props.name} </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld name="Felipe"/>,
  document.getElementById('app')
)
