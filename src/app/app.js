'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;
var PokemonApp = require('./components/PokemonApp.react'),
    MapSection = require('./components/MapSection.react'),
    MainSection = require('./components/MainSection.react'),
    LoginSection = require('./components/LoginSection.react'),
    ErrorSection = require('./components/ErrorSection.react');


var routes = (
    /*jshint ignore:start */
    <Route name="app" path="/" handler={PokemonApp}>
        <Route name="map" path="/map" handler={MapSection} />
        <Route name="stuff" path="/stuff" handler={MainSection} />
        <Route name="error" path="/error" handler={ErrorSection} />
        <DefaultRoute handler={LoginSection}/>
    </Route>
    /*jshint ignore:end */
);

Router.run(routes, (Root) => {
	React.render(
		/*jshint ignore:start */
		<Root/>,
		/*jshint ignore:end */
		document.getElementById('app'));
});