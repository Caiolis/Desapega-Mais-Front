import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import { Container, LogoContainer, SubTitle, UserForm, MemberTitle } from './styled';

// Others
import logo from "../../assets/imgs/Desapega Mais.png";
import { useContext, useState } from 'react';
import { SIGN_IN } from '../../constants/urls';
import AuthContext from '../../contexts/AuthContext';


export default function LoginPage() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext)
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password
    }

    const promisse = axios.post(SIGN_IN, body);
    promisse.then(response => {
      setToken(response.data);
      localStorage.setItem('token', response.data);
      navigate("/home");
    });
    promisse.catch(err => alert(err.response.data));
  }

  return (
    <Container>
      <LogoContainer>
        <img src={logo} />
        <SubTitle>Sign In.</SubTitle>
      </LogoContainer>

      <UserForm onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </UserForm>

      <MemberTitle>Don't have an account? <Link to={"/signup"}>Sign Up</Link></MemberTitle>
    </Container>
  );
}