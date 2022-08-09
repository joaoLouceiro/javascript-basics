function Todo(props) {
    return <li> TODO: {props.item}</li>
}

function List(props) {
    var list = ['todo 1', 'todo 2', 'todo 3', 'todo 4'];
    return (
        <ul>
            {list.map((todo) => <Todo key={todo} item={todo}/>)}
        </ul>
    );
}


ReactDOM.render(<List/>, document.getElementById('root'));