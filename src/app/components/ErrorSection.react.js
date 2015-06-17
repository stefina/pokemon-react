'use strict';

var React = require('react'),
    ErrorSection = React.createClass({
      /**
       * @return {object}
       */
      render: function() {
        return (
          <div>
            You need an internet connection and an account to play this game.
            It is free.
          </div>
        );
      }
});

module.exports = ErrorSection;