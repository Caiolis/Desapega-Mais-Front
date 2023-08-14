import { Title, MarginContainer } from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";

import { GET_ALL } from "../../constants/urls";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) navigate("/");
  }, []);
  useEffect(() => {
    const promisse = axios.get(GET_ALL);
    promisse.then((response) => setData([...response.data]));
    promisse.catch((err) => alert(err));
  }, []);

  return (
    <>
      <Header />
      {data.length === 0 ? (
        <Title>There is no products available</Title>
      ) : (
        data.map((item) => (
          <Link to={`/products/${item.id}`}>
            <ItemCard
              photo_url={item.photo_url}
              name={item.name}
              product_name={item.product_name}
              price={item.price}
            />
          </Link>
        ))
      )}
      <MarginContainer />
      <Footer />
    </>
  );
}
