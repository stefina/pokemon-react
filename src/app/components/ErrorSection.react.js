'use strict';

var React = require('react'),
    ErrorSection = React.createClass({
      /**
       * @return {object}
       */
      render: function() {
        return (
          /*jshint ignore:start */
          <div>
            You need an internet connection and an account to play this game.
            It is free.
          </div>
          /*jshint ignore:end */
        );
      }
});

module.exports = ErrorSection;