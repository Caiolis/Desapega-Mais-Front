import { Container, Title } from "./styled";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

import { GET_MY_INFO } from "../../constants/urls";
import MyProductCard from "../../components/MyProductCard/MyProductCard";

export default function MyInfoPage() {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.get(GET_MY_INFO, config);
    promisse.then((response) => setData(response.data));
    promisse.catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>Your Products</Title>

        {data === undefined
          ? ""
          : data.products.map((item) => (
              <MyProductCard
                photo_url={item.photo_url}
                name={item.name}
                product_name={item.product_name}
                price={item.price}
                selled={item.selled}
                product_id={item.id}
              />
            ))}
      </Container>
      <Footer />
    </>
  );
}
