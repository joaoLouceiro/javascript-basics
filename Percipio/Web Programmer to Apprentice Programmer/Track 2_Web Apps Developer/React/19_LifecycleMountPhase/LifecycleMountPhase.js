class Employee extends React.Component {
    
    constructor(props) {
        super(props);

        console.log('1. Constructor ', props.initialNames);

        this.state = {
            names: props.initialNames,
            mounted: false
        };

        window.addEventListener('mountedEvent', function() {
            console.log('Invoked when component has mounted');
            this.setState((prevState) => {
                var names = prevState.names.concat();

                names.push('Olaf');
                names.push('Greg');
                names.push('Bob');
                names.push('Orm');
                names.push('Marvin');

                return {
                    names: names
                };
            });

            this.setState({mounted: true});

        }.bind(this));
    }

    render() {
        console.log('2. render');

        var index = 0;
        return (
            <div>
                <div>
                    {this.state.names.map(
                        (name) =>
                            <div key={index++}>
                                {name}
                            </div>
                    )}
                </div>
                <div>
                    {this.state.mounted ? "Component Mounted" : "Component not mounted"}
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('3. componentDidMount');

        setTimeout(() => {
            window.dispatchEvent(new Event('mountedEvent'));
        }, 5000);
    }
    
}

ReactDOM.render(<Employee initialNames={["Tim", "Wolf"]}/>, document.getElementById('root'));