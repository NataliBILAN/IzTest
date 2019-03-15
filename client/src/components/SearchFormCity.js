import React from 'react';
import styled from 'styled-components';

const SearchFormName = ({ onChange, onSubmit }) => (
	<Form onSubmit={onSubmit}>
		<StyledLabel>Filter by city</StyledLabel>
		<Input type="text" name="city" placeholder="Type city" onChange={onChange} />
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
export default SearchFormName;
