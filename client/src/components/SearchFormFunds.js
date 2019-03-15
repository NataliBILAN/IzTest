import React from 'react';
import styled from 'styled-components';

const SearchFormFunds = ({ onChange, onSubmit }) => (
	<form onSubmit={onSubmit}>
		<StyledLabel>Filter by funds*</StyledLabel>
		<Input type="text" name="funds" placeholder="Type sum of funds" onChange={onChange} />
		<p>*If you type "-100", you'll recieve funds less then 100. If you type "100" - more then 100.</p>
	</form>
);

const StyledLabel = styled.label`
	margin-right: 20px;
	text-transform: uppercase;
`;
const Input = styled.input`
	font-size: 16px;
	padding: 6px 0 4px;
`;

export default SearchFormFunds;
