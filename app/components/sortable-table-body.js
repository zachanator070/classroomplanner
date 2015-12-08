var React = require("react");

var SortableTableBody = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        columns: React.PropTypes.array.isRequired,
        sortings: React.PropTypes.array.isRequired
    },
    
    render: function () {
        var bodies = this.props.data.map(function (item, index) {
            return (
                <SortableTableRow key={index} data={item} columns={this.props.columns} />
            );
        }.bind(this));

        return (
            <tbody>
                {bodies}
            </tbody>
        );
    }
});

var SortableTableRow = React.createClass({
    render: function () {
        var tds = this.props.columns.map(function (item, index) {
            var value = this.props.data[item.key];
            return (
                <td key={index} index={index} style={item.dataStyle}>{value}</td>
            );
        }.bind(this));
            
        return (
            <tr>
                {tds}
            </tr>
        );
    }
});

module.exports = SortableTableBody;