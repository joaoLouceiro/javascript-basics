class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='student'>
                <div>
                    Student ID: {this.props.id}
                </div>
                <div>
                    Name: {this.props.name}
                </div>
                <div>
                    Enrolled: {this.props.enrolled ? 'yes' : 'no'}
                </div>
                <div>
                    Major: {this.props.major}
                </div>
                <div>
                    Campus {this.props.campus}
                </div>
                <div>
                    Courses {this.props.courses}
                </div>
            </div>
        )
    }
}

Student.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    enrolled: PropTypes.bool,
    major: PropTypes.string.isRequired,
    campus: PropTypes.oneOf(['North', 'South']),

    courses(prop, propName) {
        var propValue = prop[propName];
        
        if (propValue == 'Statistics' || propValue == 'Philosophy') {
            throw Error("Can't choose this");
        }

    }
}

Student.defaultProps = {
    id: Math.floor(Math.random() * 1000000),
    enrolled: true
}

ReactDOM.render(<Student name='12' campus='West' courses=''/>,
    document.getElementById('root'));