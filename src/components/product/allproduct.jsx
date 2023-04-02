import React, { useState, useEffect, useLayoutEffect } from "react";
import FilterCard from "./FilterCard";

import { useParams } from "react-router-dom";
import BrandSillder from "./brandSlider";
import axios from "axios";
import Product from "./product";


const AllProduct = () => {
  const { id } = useParams();
  const [dataCate, setDataCate] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [categoriesCTNID, setCategoriesCTNID] = useState([])



  useEffect(() => {
    const calldata2 = async () => {
      await axios.get("https://ecom-oto.vercel.app/api/category/").then((response) => {
        setDataCate(response.data.category);
      })
    }
    calldata2();
    axios.get(
      "https://ecom-oto.vercel.app/api/products/getall"
    ).then((response) => {
      const data = response.data.products;
      setAllProduct(data)


    })

    axios.get(
      "https://ecom-oto.vercel.app/api/categorycontainer/"
    ).then((response) => {
      const data = response.data;
      if (data) {
        const categoryId = data.find((categoryId) => categoryId.slug === id);
        setCategoriesCTNID(categoryId._id)
       
      }

    })

  }, []);

  const filteredCategories = dataCate.filter(
    (category) => category.idCategoriesContainer == categoriesCTNID
  );




  return (
    <>
      <div className="p-5">
        <BrandSillder />
      </div>
      <FilterCard dataCate={dataCate} filteredCategories={filteredCategories} categoriesCTNID={categoriesCTNID} />





      <br />
    </>
  );
};
export default AllProduct;
