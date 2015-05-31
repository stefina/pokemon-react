var React = require('react'),
    Header = require('./Header.react'),
    Footer = require('./Footer.react'),
    MapSection = require('./MapSection.react'),
    MainSection = require('./MainSection.react');
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

var routes = (
    <Route name="app" path="/" handler={PokemonApp}>
        <Route name="map" path="/map" handler={MapSection} />
        <Route name="stuff" path="/stuff" handler={MainSection} />
        <DefaultRoute handler={MapSection}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});

module.exports = PokemonApp;