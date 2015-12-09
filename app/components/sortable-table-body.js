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
                <SortableTableRow key={index} rowIndex={index} data={item} columns={this.props.columns} removeRow={this.props.removeRow} />
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

    removeRow: function(index, event) {
        this.props.removeRow(index);
    },

    render: function () {

        var tds = this.props.columns.map(function (item, index) {
            var value = this.props.data[item.key];
            if (index === this.props.columns.length-1 && this.props.removeRow) {
                return (
                    <td key={index} >
                        <button key={index} onClick={this.removeRow.bind(this, this.props.data)}>X</button>
                    </td>
                );
            }
            else {
                return (
                    <td key={index} style={item.dataStyle} >{value}</td>
                );
            }
        }.bind(this));

        return (
            <tr>
                {tds}
            </tr>
        );
    }
});

module.exports = SortableTableBody;
