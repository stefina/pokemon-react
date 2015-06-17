'use strict';

var React = require('react'),
    Footer = React.createClass({
      /**
       * @return {object}
       */
      render: function() {
        var author = 'stefina';
        return (
          /*jshint ignore:start */
          <div className="footer" id="footer">
            This is Pokémon by {author}
          </div>
          /*jshint ignore:end */
        );
      }
});

module.exports = Footer;