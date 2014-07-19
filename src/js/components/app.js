/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Catalog = require('./app-catalog.js');
var Cart = require('./app-cart.js');
var APP = 
	React.createClass({
		handleClick:function(){
			AppActions.addItem('this is the item');
		},
		render: function(){
			return <div><h1 onClick={this.handleClick}>My FLUX APP</h1>

				<Catalog />
				<br />
				<Cart />
			</div>
		}
	});

module.exports = APP;