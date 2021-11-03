// emailForm: has props, this-state.emailValue :''
// handleEmailChange (e) 
// e.target permite aceder à orige do evento
// handleSubmit : clg(e.target), alert(emails), e.preventDefault(), state.emailValue= ''
// bind the methods to the constructor


class EmailForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailValue : ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState({
            emailValue: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        console.log('E-mail value: ', this.state.emailValue);
        alert('You entered ', this.state.emailValue);

        this.setState({
            emailValue: ''
        });
    }

    render() {
        return (
            <form className="contents" onSubmit={this.handleSubmit}>
                <div>
                    Enter your e-mail:
                </div>
                <input className='input' type='text' value={this.state.emailValue} onChange={this.handleEmailChange}/>
                <input className='button' type="submit" value='Submit'/>
            </form>
        )
    }
}

ReactDOM.render(<EmailForm/>, document.getElementById('root'));