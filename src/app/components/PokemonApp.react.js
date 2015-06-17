'use strict';

var React = require('react'),
    Header = require('./Header.react'),
    Footer = require('./Footer.react'),
    MapSection = require('./MapSection.react'),
    MainSection = require('./MainSection.react'),
    LoginSection = require('./LoginSection.react'),
    ErrorSection = require('./ErrorSection.react');
var Router = require('react-router');
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var PokemonApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <Header />
                <RouteHandler />
                <Footer />
            </div>
            /*jshint ignore:end */
        );
    }
});

var routes = require('./../../config/routes');

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});

module.exports = PokemonApp;