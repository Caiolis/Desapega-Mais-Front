import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background-color: #49AFBB;
	padding: 15px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
`;

export const SubContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: ${props => props.textAlign};
`;