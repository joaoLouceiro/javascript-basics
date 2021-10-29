class DetailsBox extends React.Component {
    state = {
        name: 'John',
        color: 'green',
        backgroundColor: 'pink'
    }

    pickRandomName = () => {
        var names = ['Bob', 'Olaf', 'Greg', 'Tina', 'Mike'];

        var nameIndex = Math.floor(Math.random() * names.length);

        this.setState({
            name: names[nameIndex]
        });
    }

    pickRandomColor = () => {
        var colors = ['purple', 'green', 'red', 'black', 'yellow'];

        var colorsIndex = Math.floor(Math.random() * colors.length);

        this.setState({
            color: colors[colorsIndex]
        });
    }

    pickRandomBackgroundColor = () => {
        var colors = ['purple', 'green', 'red', 'black', 'yellow'];

        var colorsIndex = Math.floor(Math.random() * colors.length);

        this.setState({
            backgroundColor: colors[colorsIndex]
        });
    }

    render() {
        const style = {
            color : this.state.color,
            backgroundColor: this.state.backgroundColor
        };

        return(
            <div>
                <div style={style}>
                    Name: {this.state.name}
                </div>
                <br/>
                <button onClick={this.pickRandomName}>Change Name</button>
                <br/>
                <button onClick={this.pickRandomColor}>Change Text color</button>
                <br/>
                <button onClick={this.pickRandomBackgroundColor}>Change Background</button>
            </div>
        )
    }

}

ReactDOM.render(<DetailsBox/>, document.getElementById('root'));