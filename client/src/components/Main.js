import React, { Component } from 'react';

import axios from 'axios';

import ClientsList from './ClientsList';
import Spinner from './Spinner';
import Pagination from './Paginataion';

class Main extends Component {
	state = {
		persons: [],
		currentPage: 1,
		dataPerPage: 15,
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
	handleEditPerson = async (e) => {
		e.preventDefault();
		await this.setState(() => ({
			disabled: !this.state.disabled
		}));
	};

	render() {
		const { persons, currentPage, dataPerPage, isLoading, disabled, id } = this.state;

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

				<ClientsList
					persons={currentData}
					currentPage={currentPage}
					dataPerPage={dataPerPage}
					onEditPerson={this.handleEditPerson}
					// onUpdate={this.handleUpdate}
					disabled={disabled}
					id={id}
					onChange={this.handleChangeValue}
				/>
				<Pagination pageNumbers={pageNumbers} handleOnPagination={this.handleOnPagination} />
			</div>
		);
	}
}
export default Main;
