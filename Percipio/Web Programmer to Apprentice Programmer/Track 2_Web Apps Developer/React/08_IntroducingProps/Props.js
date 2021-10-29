class Greeting extends React.Component {
    render() {
        return (
            <div className = "prop-class">
                <h2>{this.props.message}</h2>
            </div>
        );
    }
}

function What() {
    return (
        <div>
            <h1>{this.props.what}</h1>
        </div>
    )
}

ReactDOM.render(<Greeting message = "Hello World!"/>, document.getElementById('react-prop-1'));
ReactDOM.render(<Greeting message = "I'm a second Greeting!"/>, document.getElementById('react-prop-2'));