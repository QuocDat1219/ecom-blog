
import { brands, categorys } from "../data/Data"
import { useState } from "react";

const BrandCard = () => {

    const [selectedBrands, setSelectedBrands] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCheckboxCategoryChange = (event) => {
        const categoryTitle = event.target.value;
        if (event.target.checked) {
            setSelectedCategories([...selectedCategories, categoryTitle]);
        } else {
            setSelectedCategories(selectedCategories.filter((title) => title !== categoryTitle));
        }
    };
    const handleCheckboxBrandChange = (event) => {
        const BrandTitle = event.target.value;
        if (event.target.checked) {
            setSelectedBrands(BrandTitle);
        } else {
            setSelectedBrands(selectedBrands.filter((title) => title !== BrandTitle));
        }
    };
    console.log(selectedBrands);
    return (
        <>
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                <article className="filter-group">
                    <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">
                        <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="text-decoration-none">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Danh mục sản phẩm </h6>
                        </a>
                    </div>
                    <div className="filter-content hidden opacity-100 block" id="collapse_2">
                        <div className="flex-auto p-6">
                            {categorys.map((item, index) => (
                                <label className="custom-control custom-checkbox" key={item._id}>
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        value={item.title}
                                        checked={selectedCategories.includes(item.title)}
                                        onChange={handleCheckboxCategoryChange}
                                    />
                                    <div className="custom-control-label">{item.title}</div>
                                    {/* <b className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-full py-1 px-3 bg-gray-100 text-gray-800 hover:bg-gray-200 float-right">120</b>  </div> */}
                                </label>
                            ))}

                        </div>
                    </div>

                </article>
                <article className="filter-group">
                    <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">
                        <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="text-decoration-none">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Nhãn hàng </h6>
                        </a>
                    </div>
                    <div className="filter-content hidden in" id="collapse_5">
                        <div className="flex-auto p-6">
                            {brands.map((item, index) => (
                                <label className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="myfilter_radio"
                                        className="custom-control-input"
                                        value={item.title}
                                        checked={selectedBrands.includes(item.title)}
                                        onChange={handleCheckboxBrandChange}
                                    />
                                    <div className="custom-control-label">{item.title}</div>
                                </label>
                            ))}


                        </div>
                    </div>
                </article>
                <div class="d-grid gap-2 my-2 mx-auto">
                    <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 px-5"><i class="fa fa-filter" aria-hidden="true"></i>Lọc</button>

                </div>
            </div>
        </>
    )

}

export default BrandCard