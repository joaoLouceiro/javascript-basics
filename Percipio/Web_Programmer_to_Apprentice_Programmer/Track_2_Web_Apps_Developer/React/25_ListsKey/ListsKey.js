class NamesList extends React.Component {

    render() {
        var listItems = this.props.names.map(
            (item, index) => <li key={index}>{item.toUpperCase()}</li>
        );

        return (
            <ul className="list">{listItems}</ul>
        );
    }
}

const names = ["Bob", "Greg", "Olaf", "Olaf", "Bill", "Snow"]

ReactDOM.render(<NamesList names={names}/>, document.getElementById('root'));
