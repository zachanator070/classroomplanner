var React = require('react');
var TableHeader = require('./table-header.js');

var Table = React.createClass({

	 getInitialState: function() {
		return {data: this.props.data};
	},

	render: function() {

		var header = <thead>
			<tr>
				{this.props.data[0].map(function(cell,j) {
					return <th key={j}>{cell}</th>;
				})}
			</tr>
		</thead>

		var body = <tbody>
			{this.props.data.map(function(row, i) {
		      		return <tr key={i}>
			          	{row.map(function(cell, j) {
			          		var result;
			          		if(i !== 0) {
			          			result = <td key={j}>{cell}</td>;
			          		}
			          		return result;
			      		})}
			      </tr>
			})}
		</tbody>

		return <table className="table table-striped table-bordered sortable">
			{header}
			{body}
		  </table>

	}
});

module.exports = Table;