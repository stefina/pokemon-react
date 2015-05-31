var React = require('react'),
    MapSection = React.createClass({
      /**
       * @return {object}
       */
      render: function() {
        return (
          <div>
            <div id='map'></div>
          </div>
        );
      }
});

module.exports = MapSection;