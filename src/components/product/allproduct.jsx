import React, { useState, useEffect, useLayoutEffect } from "react";
import FilterCard from "./FilterCard";
import { useParams } from "react-router-dom";
import BrandSillder from "./brandSlider";
import axios from "axios";

const AllProduct = () => {
  const { id } = useParams();
  const [dataCate, setDataCate] = useState([]);
  const [categoriesCTNID, setCategoriesCTNID] = useState([])
  const [brands, setBrands] = useState([]);

  useEffect(() => {

    const calldata = async () => {
      await axios.get("https://ecom-oto.vercel.app/api/category/").then((response) => {
        setDataCate(response.data.category);
      })
    }


    const calldata3 = async () => {
      await axios.get(
        "https://ecom-oto.vercel.app/api/categorycontainer/"
      ).then((response) => {
        const data = response.data;
        if (data) {
          const categoryId = data.find((categoryId) => categoryId.slug === id);
          setCategoriesCTNID(categoryId._id)

        }

      })
    }
    const calldata4 = async () => {
      await axios.get(
        "https://ecom-oto.vercel.app/api/brand/"
      ).then((response) => {
        const data = response.data;
        setBrands(data);

      })
    }
    calldata();
    calldata3();
    calldata4();
  }, []);

  const filteredCategories = dataCate.filter(
    (category) => category.idCategoriesContainer == categoriesCTNID
  );

  const filteredBrand = brands.filter(
    (brand) => brand.idCategoriesContainer == categoriesCTNID
  );

  return (
    <>
      <div className="p-5">
        <BrandSillder />
      </div>
      <FilterCard dataCate={dataCate} filteredCategories={filteredCategories} categoriesCTNID={categoriesCTNID} brands={filteredBrand} />
      <br />
    </>
  );
};
export default AllProduct;
