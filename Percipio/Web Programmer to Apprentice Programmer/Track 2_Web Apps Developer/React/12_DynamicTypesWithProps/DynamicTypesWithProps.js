function Circle(props) {
    const cirStyle = {
        backgroundColor: props.color
    };
    return <div className="circle" style={cirStyle}></div>
}

function Circle1(props) {
    return <Circle color = "purple"/>;
}

function Circle2(props) {
    return <Circle color = "green"/>;
}

function Circle3(props) {
    return <Circle color = "red"/>;
}

function Circle4(props) {
    return <Circle color = "black"/>;
}

function RandomCircle(props) {
    const Circles = [
        Circle1, Circle2, Circle3, Circle4
    ];

    const SomeCircle = Circles[props.index];

    return <SomeCircle/>;
}


ReactDOM.render(<Circle color="pink"/>,
    document.getElementById('react-dynamic-prop1'));
    
ReactDOM.render(<Circle1/>,
    document.getElementById('react-dynamic-prop2'));
    
ReactDOM.render(<Circle2/>,
    document.getElementById('react-dynamic-prop3'));
    
ReactDOM.render(<Circle3/>,
    document.getElementById('react-dynamic-prop4'));
    
ReactDOM.render(<Circle4/>,
    document.getElementById('react-dynamic-prop5'));

ReactDOM.render(<RandomCircle index={Math.floor(Math.random() * 4)}/>,
    document.getElementById('react-dynamic-prop6'));