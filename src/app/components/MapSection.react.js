'use strict';

var React = require('react'),
    MapSection = React.createClass({
      /**
       * @return {object}
       */
      render: function() {
        return (
          /*jshint ignore:start */
          <div>
            <div id='map'></div>
          </div>
          /*jshint ignore:end */
        );
      }
});

module.exports = MapSection;