'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;
var Header = require('./Header.react'),
    Footer = require('./Footer.react');

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

module.exports = PokemonApp;