class Company extends React.Component {
    render () {
        return (
            <div>
                <div>
                    Company: {this.props.company}
                </div>
                <Employee name={this.props.name} designation={this.props.designation}/>
                <Activities comittees={this.props.comittees} forums={this.props.forums}/>
            </div>
        );
    }
}

class Employee extends React.Component {
    render () {
        return (
            <div className="employee">
                <div>
                    Name: {this.props.name}</div>
                <div>
                    Designation: {this.props.designation}</div>
            </div>
        );
    }
}

class Activities extends React.Component {
    render () {
        return (
            <div>
                <div>
                    Comittees: {this.props.comittees}</div>
                <div>
                    Forums: {this.props.forums}</div>
            </div>
        );
    }
}


ReactDOM.render(<Company company="My Company" name="John" designation="Analyst" comittees="Stuff, I dunno" forums="Forum Aveiro"/>, document.getElementById('root'));