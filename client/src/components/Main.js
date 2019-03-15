import React, { Component } from 'react';

import axios from 'axios';

import ClientsList from './ClientsList';
import Spinner from './Spinner';
import Pagination from './Paginataion';
import SearchFormName from './SearchFormName';
import SearchFormCity from './SearchFormCity';
import SearchFormEmail from './SearchFormEmail';
import SearchFormPhone from './SearchFormPhone';
import SearchFormFunds from './SearchFormFunds';
import { searchByName, searchByCity, searchByEmail, searchByPhone, searchByFunds } from '../services/api';

class Main extends Component {
	state = {
		persons: [],
		currentPage: 1,
		dataPerPage: 15,
		q: '',
		isLoading: false
	};

	componentDidMount() {
		axios
			.get('http://localhost:8080')
			.then((response) => {
				this.setState({ persons: response.data.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	handleOnPagination = (event) => {
		this.setState({
			currentPage: Number(event.target.id)
		});
	};

	setQuery = (e) => {
		this.setState({ q: e.target.value, persons: this.state.persons });
	};

	runSearchByName = async (e) => {
		e.preventDefault();
		const data = await searchByName(this.state.q);
		this.setState({ q: this.state.q, persons: data });
	};

	runSearchByCity = async (e) => {
		e.preventDefault();
		const data = await searchByCity(this.state.q);
		this.setState({ q: this.state.q, persons: data });
	};
	runSearchByEmail = async (e) => {
		e.preventDefault();
		const data = await searchByEmail(this.state.q);
		this.setState({ q: this.state.q, persons: data });
	};
	runSearchByPhone = async (e) => {
		e.preventDefault();
		const data = await searchByPhone(this.state.q);
		this.setState({ q: this.state.q, persons: data });
	};
	runSearchByFunds = async (e) => {
		e.preventDefault();
		const data = await searchByFunds(this.state.q);
		this.setState({ q: this.state.q, persons: data });
	};

	render() {
		const { persons, currentPage, dataPerPage, isLoading } = this.state;
		const indexOfLastData = currentPage * dataPerPage;
		const indexOfFirstData = indexOfLastData - dataPerPage;
		const currentData = persons.slice(indexOfFirstData, indexOfLastData);
		// Logic for displaying page numbers
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(persons.length / dataPerPage); i++) {
			pageNumbers.push(i);
		}

		return (
			<div>
				{isLoading && <Spinner />}

				<h2>Our Clients</h2>
				<SearchFormName onChange={this.setQuery} onSubmit={this.runSearchByName} />
				<SearchFormCity onChange={this.setQuery} onSubmit={this.runSearchByCity} />
				<SearchFormEmail onChange={this.setQuery} onSubmit={this.runSearchByEmail} />
				<SearchFormPhone onChange={this.setQuery} onSubmit={this.runSearchByPhone} />
				<SearchFormFunds onChange={this.setQuery} onSubmit={this.runSearchByFunds} />
				<ClientsList
					persons={currentData}
					currentPage={currentPage}
					dataPerPage={dataPerPage}
					onEditPerson={this.handleEditPerson}
					onChange={this.handleChangeValue}
				/>
				<Pagination pageNumbers={pageNumbers} handleOnPagination={this.handleOnPagination} />
			</div>
		);
	}
}
export default Main;
