'use strict';

var React = require('react'),
    PokemonApp = require('./components/PokemonApp.react');

React.render(
    /*jshint ignore:start */
    <PokemonApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);