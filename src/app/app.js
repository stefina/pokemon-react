'use strict';

var React = require('react'),
    PokemonApp;

PokemonApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <h2>Hello, React</h2>
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <PokemonApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);