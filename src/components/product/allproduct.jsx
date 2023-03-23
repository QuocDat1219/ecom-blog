
import React from "react";
import FilterCard from "./FilterCard";
import Path from "./path";
import Product from "./product";
import BrandSillder from "./brandSlider";


const AllProduct = () => {
    return (
        <>
            <div className="p-5">
                <BrandSillder />
            </div>
            <Path />
            <section >
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <FilterCard />

                        <main className="md:w-2/3 lg:w-3/4 w-4/4 px-3">

                            <Product />

                        </main>
                    </div>
                </div>
            </section>


        </>
    );

}
export default AllProduct