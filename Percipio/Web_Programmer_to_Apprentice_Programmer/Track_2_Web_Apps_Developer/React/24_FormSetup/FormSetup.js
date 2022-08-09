//Same hotel booking as before
//Every component has it's event handler function passed in by a higher level component
//set this.errors for name, email and phone
//validateName: at least 5 chars w/ name as prop (parameter);
//validateEmail w/ regex with .test(email)
//Add state for child elements: each is responsible for managing it's errorMessage (but not what the validation is)
//each child's handleInputChange needs to validate itself
//Add ErrorMessage class
//Change handleSubmit to manage errors

class HotelBookingForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nameValue: '',
			emailValue: '',
			phoneValue: 0,
			nameOfHotelValue: 'Fantastic Hotel'
		};

        this.error = {
            name: true,
            email: true,
            phone: true
        }
	}

    validateName = (name) => {
        if (!name || name.length < 5) {
            this.error.name = true;
            return false;
        }

        this.error.name = false;
        return true;
    }

    validateEmail = (email) => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            this.error.email = true;
            return false;
        }

        this.error.email = false;
        return true
    }

    validateNumber = (number) => {
        if (!typeof number ===  'number' && number.length < 5) {
            this.error.phone = true;
            return false
        }

        this.error.phone = false;
        return true;
    }

	handleInputChange = (e) => {
		const eventName = e.target.name;
		var value = e.target.value;

		if (eventName == 'nameValue') {
			value = value.toUpperCase();
		};

		this.setState({
			[eventName]: value,
		});
	};

    handleSubmit = (e) => {
		e.preventDefault();

        if(this.error.email) {
            alert('Please, enter a valid email')
            return;
        }
        
        if(this.error.name) {
            alert('Please, enter a valid name')
            return;
        }

        if(this.error.number) {
            alert('Please, enter a valid number')
            return;
        }

		alert(
			'These where your choices: \n' +
			this.state.nameValue + ", \n" +
			this.state.emailValue + ", \n" +
			this.state.phoneValue + ", \n" +
			this.state.nameOfHotelValue
		);
	};

	render() {
		return (
			<form className='contents' onSubmit={this.handleSubmit}>
				<TextInput
					label='Name'
					name='nameValue'
					value={this.state.nameValue}
					handleInputChange={this.handleInputChange}
                    validate={this.validateName}
                    />
				<TextInput
					label='Email'
					name='emailValue'
					value={this.state.emailValue}
					handleInputChange={this.handleInputChange}
                    validate={this.validateEmail}
                    />
				<TextInput
					label='Phone Number'
					name='phoneValue'
					value={this.state.phoneValue}
					handleInputChange={this.handleInputChange}
                    validate={this.validateNumber}
				/>
				<SelectInput
					label='Choose your hotel'
					name='nameOfHotelValue'
					value={this.state.nameOfHotelValue}
					handleInputChange={this.handleInputChange}
					options={this.props.hotelNamesOptions}
				/>
                <input type='submit' value='Submit'></input>
			</form>
		);
	};
};

HotelBookingForm.defaultProps = {
    hotelNamesOptions: ['Fantastic Hotel', 'Hotel Nightmare', 'Miracle Hotel', 'Beach Hotel']
};

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {errorMessage: ''};
    }

	handleInputChange = (e) => {
        var errorMessage = '';

        if (!this.props.validate(e.target.value)) {
            errorMessage= "* Invalid";
        }

		this.props.handleInputChange(e);

        this.setState({errorMessage: errorMessage})
	};
    
	render() {
        return (
            <div>
				<div>{this.props.label}:</div>
				<input
					className='input'
					name={this.props.name}
					value={this.props.value}
					onChange={this.handleInputChange}
                    ></input>
                <ErrorMessage message={this.state.errorMessage}/>
			</div>
		);
	}
}

class SelectInput extends React.Component {
	handleInputChange = (e) => {
        
		this.props.handleInputChange(e);
        
	};

	render() {
		return (
			<div>
				<div>{this.props.label}:</div>
				<select
					className='input'
					name={this.props.name}
					value={this.props.value}
					onChange={this.handleInputChange}
				>
					{this.props.options.map(
                        (item) => 
						<option key={item} value={item}>
							{item}
						</option>
					)}
				</select>
			</div>
		);
	}
}

class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className='error'>{this.props.message}</span>
        )
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('root'));
