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

export const MiddleButtonContainer = styled.div`
	min-width: 50px;
	min-height: 50px;
	border-radius: 50%;
	border: 2px solid #49AFBB;
	margin-top: -50px;
	margin-bottom: -15px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	background-color: #FFF;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;