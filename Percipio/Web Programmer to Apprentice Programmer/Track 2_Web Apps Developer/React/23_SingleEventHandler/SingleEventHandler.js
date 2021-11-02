//HotelBookingForm
//nameValue, emailValue, nameOfHotelValue (default), locationValue (default)
//HandleInputChange
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

	handleInputChange = (e) => {
		const eventName = e.target.name;
		var value = e.target.value;

		if (eventName == 'nameValue') {
			value = value.toUpperCase();
		}

		this.setState({
			[eventName]: value,
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
				<textarea className='input' name='nameValue' value={this.state.nameValue} onChange={this.handleInputChange} />

				<div>Email:</div>
				<input
					className='input'
					name= 'emailValue'
					type='text'
					value={this.state.emailValue}
					onChange={this.handleInputChange}
				/>

				<div>Choose your hotel:</div>
				<select name='nameOfHotelValue' value={this.state.nameOfHotelValue} onChange={this.handleInputChange}>
					<option value='Fantastic Hotel'>Fantastic Hotel</option>
					<option value='Hotel Nightmare'>Hotel Nightmare</option>
					<option value='Miracle Hotel'>Miracle Hotel</option>
					<option value='Beach Hotel'>Beach Hotel</option>
				</select>

				<div>Enter your location:</div>
				<input
					type='text'
					name='locationValue'
					value={this.state.locationValue}
					onChange={this.handleInputChange}
				/>

                <input type='submit' value='Submit'></input>
			</form>
		);
	}
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('root'));
