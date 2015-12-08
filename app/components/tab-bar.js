var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = React.createClass({
	render: function() {

		var tabs = this.props.data.tabData.map(function(tab) {
			return <li role="presentation" key={tab.tabName} className={ tab.active ? "active" : ""}>
				<a href={tab.tabLink}>
					{tab.tabName}
				</a>
			</li>
		});

		return <div>
			<ul className="nav nav-tabs">
				{tabs}
			</ul>
		</div>
	}
});

module.exports = TabBar;