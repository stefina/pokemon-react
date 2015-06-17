'use strict';

var React = require('react'),
    LoginSection = React.createClass({
      /**
       * @return {object}
       */
      render: function() {
        return (
          /*jshint ignore:start */
          <div>
            <LoginForm />
          </div>
          /*jshint ignore:end */
        );
      }
  });

var LoginForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if (!name || !password) {
      return;
    }
    this.props.onCommentSubmit({name: name, password: password});
    React.findDOMNode(this.refs.name).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  },
  render: function() {
    return (
      /*jshint ignore:start */
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
      /*jshint ignore:end */
    );
  }
});

module.exports = LoginSection;