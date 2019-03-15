import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ClientsList = ({ persons }) => (
	<Wrapper>
		<Headings>
			<Cell>ID</Cell>
			<Cell>Name</Cell>
			<Cell>Email</Cell>
			<Cell>Funds</Cell>
			<Cell>City</Cell>
			<Cell>Phone</Cell>
		</Headings>

		<TableContent>
			{persons.map((person) => (
				<Row key={person.id}>
					<input type="text" name="id" value={person.id} disabled />
					<input type="text" name="name" value={person.name} disabled />
					<input type="text" name="email" value={person.email} disabled />
					<input type="text" name="funds" value={person.funds} disabled />
					<input type="text" name="city" value={person.city} disabled />
					<input type="text" name="phone" value={person.phone} disabled />
					<StyledLink to={`edit/${person.id}`} className="btn btn-primary">
						Edit
					</StyledLink>
				</Row>
			))}
		</TableContent>
	</Wrapper>
);

const Wrapper = styled.div`width: 1200px;`;

const Headings = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	font-weight: 400;
	padding: 8px 0;
	border-bottom: 1px solid #d3d3d3;
	transition: all .2s ease;
	background-color: #fff;
	box-shadow: 0 4px;
`;
const TableContent = styled.div`
	display: flex;
	flex-direction: column;
	list-style: none;
	font-weight: 300;
	padding: 8px 0;
	border-bottom: 1px solid #d3d3d3;
	box-shadow: 0;
	cursor: pointer;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 18px;
`;

const Cell = styled.p`
	margin: 0;
	width: 16%;
	font-size: 20px;
	font-weight: 500;
`;
const StyledLink = styled(Link)`
	width: 26%;
	border: 1px solid grey;
	text-align:center;
	text-transform:uppercase;
`;

export default ClientsList;
