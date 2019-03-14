import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
	state = {
		name: '',
		email: '',
		funds: '',
		city: '',
		phone: ''
	};

	componentDidMount() {
		axios
			.get('http://localhost:8080/')
			.then((response) => {
				const personById = response.data.data.find((item) => (item.id = Number(this.props.match.params.id)));
				// console.log(personById);
				this.setState({
					name: personById.name,
					email: personById.email,
					funds: personById.funds,
					city: personById.city,
					phone: personById.phone
				});
				console.log(this.state);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = async (e) => {
		e.preventDefault();
		// console.log(this.state);
		const obj = {
			name: this.state.name,
			email: this.state.email,
			funds: this.state.funds,
			city: this.state.city,
			phone: this.state.phone
		};

		await axios
			.put('http://localhost:8080/update/' + this.props.match.params.id, obj)
			.then((res) => console.log(res.data));

		this.props.history.push('/');
	};

	render() {
		const { name, email, funds, city, phone } = this.state;
		return (
			<div>
				<h3 align="center">Update Persons data (ID: {this.props.match.params.id})</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Person Name: </label>
						<input name="name" type="text" value={name} onChange={this.onChange} />
					</div>
					<div>
						<label>Email: </label>
						<input name="email" type="text" value={email} onChange={this.onChange} />
					</div>
					<div>
						<label>Funds: </label>
						<input name="funds" type="text" value={funds} onChange={this.onChange} />
					</div>
					<div>
						<label>City: </label>
						<input name="city" type="text" value={city} onChange={this.onChange} />
					</div>
					<div>
						<label>Phone: </label>
						<input name="phone" type="text" value={phone} onChange={this.onChange} />
					</div>
					<div>
						<input type="submit" value="Update Data" />
					</div>
				</form>
			</div>
		);
	}
}
