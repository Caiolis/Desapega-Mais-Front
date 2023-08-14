import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import { Container, LogoContainer, SubTitle, UserForm, MemberTitle } from './styled';
import { InputGroup } from '@chakra-ui/react';

import logo from "../../assets/imgs/Desapega Mais.png";
import { SIGN_UP } from '../../constants/urls';
import { useState } from 'react';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
  });

  // Takes the information of the form state and updates with the new information the user typed
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }
  
  // Submits the form information to the server
  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: form.username,
      email: form.email,
      cpf: form.cpf,
      phone: form.phone,
      password: form.password
    }

    const promisse = axios.post(SIGN_UP, body);
    promisse.then(response => navigate("/"));
    promisse.catch(err => alert("Verify all information before submitting"));
  }

  return (
    <Container>
      <LogoContainer>
        <img src={logo} />
        <SubTitle>Create your account.</SubTitle>
      </LogoContainer>

      <UserForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <InputGroup gap={10}>
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
            required
          />
          <input
            type="phone"
            placeholder="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Account</button>
      </UserForm>

      <MemberTitle>Already have an account? <Link to={"/login"}>Log In</Link></MemberTitle>
    </Container>
  );
}