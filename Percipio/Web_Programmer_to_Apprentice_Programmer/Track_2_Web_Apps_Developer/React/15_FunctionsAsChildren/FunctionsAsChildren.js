
//instantiate a list
var names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5', 'Name 6', 'Name 6'];


function Names(props) {
    var namesList = [];

    for (let i = 0; i < props.upto; i++) {
        namesList.push(props.children(i, names));
    }
    return <div>{namesList}</div>;
}

function NamesList(props) {
    return (
        <Names upto={props.upto}>
            {(index, names) => <div key={index}>{names[index]}</div>}
        </Names>
    );
}

ReactDOM.render(<NamesList upto={3}/>, document.getElementById('root'));