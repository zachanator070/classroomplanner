var React = require('react');

var TableHeader = React.createClass({
	render: function() {

		return <thead>
			{this.props.tableData.map(function(row) {
				return <tr>
					{row.rowData.map(function(cell) {
			            return <th>{cell}</th>;
			        })}
				</tr>
			})}
		</thead>

	}
});

module.exports = TableHeader;