class Circle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'green',
            background: 'pink'
        };
    }

    render() {
        const cirStyle = {
            color: this.state.color,
            backgroundColor: this.state.background
        }

        return(
            <div className='circle' style={cirStyle}>Hello!</div>
        );
    }
}

ReactDOM.render(<Circle/>, document.getElementById('root'));