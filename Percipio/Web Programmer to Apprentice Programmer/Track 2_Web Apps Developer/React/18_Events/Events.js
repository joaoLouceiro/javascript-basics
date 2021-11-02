//Create a Counter
//state.counter = 0;
//incrementCount imprime this.state.counter
//this.setState aceita uma função que aumenta o counter em função do prop.increment
//decrementCount
//Semelhante ao incrementCount, mas com prop.decrement
//mouseEnter, quando o rato passa por cima dos botões, dá print do count

class Counter extends React.Component {
    state = {
        counter: 0
    };

    incrementCount = (e) => {
        console.log("Increment counter: ", this.state.counter)
        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter + props.increment
            }
        });
    }
    
    decrementCount = (batata) => {
        console.log("Decrement counter: ", this.state.counter);
        this.setState((prevState, props) => ({
            counter: prevState.counter - props.decrement
        }));
    }
    
    mouseEnter = (e) =>{
        console.log("Mouse entered: ", this.state.counter);
    }

    render() {
        const myStyle = {
            fontSize: '50px'
        }
        return (
            <div>
                <div style={myStyle}>Counter: {this.state.counter}</div>
                <button onClick={this.incrementCount} onMouseEnter={this.mouseEnter}>Increment</button>
                <button onClick={this.decrementCount} onMouseEnter={this.mouseEnter}>Decrement</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter increment={1} decrement={1}/>, document.getElementById('root'));