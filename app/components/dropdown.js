var React = require('react');

Dropdown = React.createClass({

	render: function() {

		var dropdown = this.props.items.map(function(item, i) {
			return <option key={i} value={item}>{item}</option>;
		});

		return 	<select className="btn btn-default dropdown-toggle" 
				defaultValue={this.props.selected}
				onChange={this.props.handleChange}>
				{dropdown}
		</select>

	}
});

module.exports = Dropdown;