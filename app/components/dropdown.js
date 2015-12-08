var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
	handleClick: function() {
		this.setState({
			open: !this.state.open
		});
	},
	getInitialState: function() {
		return { open: false }
	},
	handleItemClick: function(item) {
		this.setState({
			open: false,
			itemTitle: item
		});
	},
	render: function() {
		var list = this.props.items.map(function(item) {
			return <ListItem 
				item={item} 
				whenItemClicked={this.handleItemClick} 
				className={this.state.itemTitle === item ? "active" : ""} />
		}.bind(this));

		return <div className="dropdown">
			<button className="btn btn-default dropdown-toggle" onClick={this.handleClick} >
				{(this.state.itemTitle || this.props.title) + " "} 
				<span className="caret"/>
			</button>
			<ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
				{list}
			</ul>
		</div>
	}
});