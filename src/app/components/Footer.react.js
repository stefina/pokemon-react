var React = require('react'),
    Footer = React.createClass({
      /**
       * @return {object}
       */
      render: function() {
        var author = 'stefina';
        return (
          <div className="footer" id="footer">
            This is Pokémon by {author}
          </div>
        );
      }
});

module.exports = Footer;