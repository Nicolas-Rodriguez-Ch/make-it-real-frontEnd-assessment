import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/actions/productActions";
import ProductCard from "../../components/ProductCard/ProductCard";
import loader from '../../assets/untitled8.gif'
import './HomePage.css'

const HomePage = () => {
  const products = useSelector((state) => state.productReducer)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return(
    <div className="homePage">
      {products.loading && <div>Loading... {<img src={loader} alt="loading..."></img>}</div>}
      {!products.loading && products.error ? <div>Error: {products.error}</div> : null}
      {products.data.map((product, index) => {
        return (
          <>
            <Link
              to={`/products/${products.data.indexOf(product)}`}
              key = {product.id}
              className="homePageCard__container"
            >
              <ProductCard
                index={index}
                title = {product.title}
                image = {product.image}
              />
            </Link>
          </>
        )
      })}
    </div>
  )
}

export default HomePage;