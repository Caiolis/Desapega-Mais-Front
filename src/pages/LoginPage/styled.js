import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-family: 'Poppins', 'sans-serif';
  font-weight: 400;
  font-size: 24px;
  color: #E81B41;
  margin-top: 15px;
`;

export const UserForm = styled.form`
	width: 100%;
	padding: 0px 36px;
	margin: 80px 0px 25px 0px;
	input {
    color: #E81B41;
		width: 100%;
		height: 50px;
		padding: 0px 11px;
		outline: none;
		border: 1px solid #E81B41;
		border-radius: 5px;
		margin: 6px 0px;
		font-family: 'Poppins', 'sans-serif';
		font-size: 16px;
		font-weight: 500;
		&::placeholder {
			color: #E81B41;
		}
	}
	button {
		outline: none;
		border: none;
		border-radius: 5px;
		background-color: #49AFBB;
		color: #FFF;
		font-family: 'Poppins', 'sans-serif';
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50px;
		margin-top: 50px;
	}
`;

export const MemberTitle = styled.h3`
  font-family: 'Poppins', 'sans-serif';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #999;
  a {
    color: #49AFBB;
  }
`;