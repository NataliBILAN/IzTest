import React from 'react';
import styled from 'styled-components';

const Pagination = ({ pageNumbers, handleOnPagination }) => (
	<Wrapper>
		<StyledPagination>
			{pageNumbers.map((number) => (
				<Number key={number} id={number} onClick={handleOnPagination}>
					{number}
				</Number>
			))}
		</StyledPagination>
	</Wrapper>
);

const Wrapper = styled.div`width: 1200px;`;

const StyledPagination = styled.ul`
	width: 400px;
	margin: 30px auto 0;
	list-style: none;
	display: flex;
`;
const Number = styled.li`
	margin-right: 25px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 500;
	&:hover {
		color: red;
		text-decoration: underline;
	}
`;

export default Pagination;
