import React from 'react';
import styled from 'styled-components';

const SearchFormEmail = ({ onChange, onSubmit }) => (
	<Form onSubmit={onSubmit}>
		<StyledLabel>Filter by email</StyledLabel>
		<Input type="text" name="email" placeholder="Type email" onChange={onChange} />
	</Form>
);
const Form = styled.form`margin-bottom: 10px;`;
const Input = styled.input`
	font-size: 16px;
	padding: 6px 0 4px;
`;
const StyledLabel = styled.label`
	margin-right: 20px;
	text-transform: uppercase;
`;
export default SearchFormEmail;
