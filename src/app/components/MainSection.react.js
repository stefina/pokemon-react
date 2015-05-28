var React = require('react'),
    MainSection = React.createClass({
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

module.exports = MainSection;