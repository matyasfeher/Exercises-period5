import React, { Component } from 'react';

class Musicians extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            musicians: this.props.data,
            filterVal: 0
        };
    }

    onFilterChange = (evt) => {
        this.setState({ filterVal: evt.target.value });
    }
    render() {
        let data = this.state.musicians;
        const rows =
            data.filter(s => s.stars >= this.state.filterVal).map((s) =>
                <tr key={s.id}>
                    <td>{s.id}</td> <td>{s.name}</td> <td>{s.stars}</td>
                </tr>
            );
        return (
            <div>
                Search by stars: <input onChange={this.onFilterChange} /><br />
                <table className="table">
                    <tr><th>Id</th> <th>Name</th> <th>Stars</th></tr>
                    {rows}
                </table>
            </div>
        )
    }
}


export default Musicians;