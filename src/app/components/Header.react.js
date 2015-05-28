var React = require('react'),
    Header = React.createClass({
    /**
       * @return {object}
       */
      render: function() {
        return (
          <div className="header" id="header">
            <a href="home" className="link">
                <i className="fa fa-home fa-3x menu-icon"/>
            </a>
            <img src="/assets/images/header.png" height="70px"/>
            <a href="/map" className="link">
                <i className="fa fa-map-marker fa-3x menu-icon"/>
            </a>
        </div>
    );
  }

});

module.exports = Header;