import styled from "styled-components";

export const MiddleButtonContainer = styled.div`
	min-width: 50px;
	min-height: 50px;
  max-width: 50px;
  max-height: 50px;
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
  &:hover {
    cursor: pointer;
  }
`;