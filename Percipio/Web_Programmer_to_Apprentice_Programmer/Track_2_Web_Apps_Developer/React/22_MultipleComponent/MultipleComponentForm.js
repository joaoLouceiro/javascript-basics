//HotelBookingForm
//nameValue, emailValue, nameOfHotelValue (default), locationValue (default)
//handleNameChange (toUpperCase), handleEmailChange, handleNameOfHotelChange, handleLocationState
//<form>  <textArea nameValue>  <input emailValue>  <select 4 options for hotel>  <input location>
//submit, print details

class HotelBookingForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nameValue: '',
			emailValue: '',
			nameOfHotelValue: 'Fantastic Hotel',
			locationValue: 'Canada',
		};
	}

	handleNameChange = (e) => {
		this.setState({
			nameValue: e.target.value.toUpperCase(),
		});
	};

	handleEmailChange = (e) => {
		this.setState({
			emailValue: e.target.value,
		});
	};

	handleNameOfHotelChange = (e) => {
		this.setState({
			nameOfHotelValue: e.target.value,
		});
	};

	handleLocationChange = (e) => {
		this.setState({
			locationValue: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		alert(
			'These where your choices: \n' +
			this.state.nameValue + ", \n" +
			this.state.emailValue + ", \n" +
			this.state.nameOfHotelValue + ", \n" +
			this.state.locationValue
		);
	};

	render() {
		return (
			<form className='contents' onSubmit={this.handleSubmit}>
				<div>Name:</div>
				<textarea className='input' value={this.state.nameValue} onChange={this.handleNameChange} />

				<div>Email:</div>
				<input
					className='input'
					type='text'
					value={this.state.emailValue}
					onChange={this.handleEmailChange}
				/>

				<div>Choose your hotel:</div>
				<select value={this.state.nameOfHotelValue} onChange={this.handleNameOfHotelChange}>
					<option value='Fantastic Hotel'>Fantastic Hotel</option>
					<option value='Hotel Nightmare'>Hotel Nightmare</option>
					<option value='Miracle Hotel'>Miracle Hotel</option>
					<option value='Beach Hotel'>Beach Hotel</option>
				</select>

				<div>Enter your location:</div>
				<input
					type='text'
					value={this.state.locationValue}
					onChange={this.handleLocationChange}
				/>

                <input type='submit' value='Submit'></input>
			</form>
		);
	}
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('root'));
