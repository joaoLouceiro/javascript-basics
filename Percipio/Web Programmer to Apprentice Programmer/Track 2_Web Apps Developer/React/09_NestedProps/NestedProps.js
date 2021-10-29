class Employee extends React.Component {
    render () {
        return (
            <div className="employee">
                <span className = "name">{this.props.firstName}</span>
                <span className = "name">{this.props.lastName}</span>
            </div>
        );
    }
}

class Company extends React.Component {
    get_name() {
        return {'firstName': 'Alice', 'lastName': 'Chang'}
    }

    render() {
        return (
            <div>
                <Employee firstName="John" lastName = "Rivers" />
                <Employee firstName={"Ana"} lastName = {"Banana"} />
                <Employee firstName={"Ni" + "na"} lastName = "Black" />
                <Employee firstName={this.get_name().firstName} lastName = {this.get_name().lastName} />
            </div>
        )
    }
}

ReactDOM.render(<Company/>, document.getElementById('root'));