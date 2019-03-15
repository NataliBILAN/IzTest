import React from 'react';
import styled from 'styled-components';

const SearchFormName = ({ onChange, onSubmit }) => (
	<Form onSubmit={onSubmit}>
		<StyledLabel>Filter by name</StyledLabel>
		<Input type="text" name="name" placeholder="Type name" onChange={onChange} />
	</Form>
);

const Form = styled.form`margin-bottom: 10px;`;
const StyledLabel = styled.label`
	margin-right: 20px;
	text-transform: uppercase;
`;
const Input = styled.input`
	font-size: 16px;
	padding: 6px 0 4px;
`;

export default SearchFormName;
