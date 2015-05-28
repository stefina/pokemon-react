var Header = require('./Header.react'),
    Footer = require('./Footer.react'),
    MainSection = require('./MainSection.react');

var React = require('react'),
    PokemonApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <Header />
                <MainSection />
                <Footer />
            </div>
            /*jshint ignore:end */
        );
    }
});

module.exports = PokemonApp;