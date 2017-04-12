// npm install --save prop-types
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

// Look at prop types to understand how to use component
// Good for documentation
Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}
// examples
/*
User.propTypes = {
  list: PropTypes.array.isRequired,
}

User.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
}

User.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
})),
}

*/

ReactDOM.render(
  <Badge
    name='Tyler McGinnis',
    username='tylermcginnis'
    img={'https://avatar0.githubusercontent.com/u2933430?v=3&s=460'}
  />,
  document.getElementById('root')
)
