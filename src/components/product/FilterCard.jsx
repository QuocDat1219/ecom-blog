
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
            <div className="card">
                <article className="filter-group">
                    <div className="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="text-decoration-none">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Danh mục sản phẩm </h6>
                        </a>
                    </div>
                    <div className="filter-content collapse show" id="collapse_2">
                        <div className="card-body">
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
                                    {/* <b className="badge badge-pill badge-light float-right">120</b>  </div> */}
                                </label>
                            ))}

                        </div>
                    </div>

                </article>
                <article className="filter-group">
                    <div className="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="text-decoration-none">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Nhãn hàng </h6>
                        </a>
                    </div>
                    <div className="filter-content collapse in" id="collapse_5">
                        <div className="card-body">
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
                    <button className="btn btn-primary px-5"><i class="fa fa-filter" aria-hidden="true"></i>Lọc</button>

                </div>
            </div>
        </>
    )

}

export default BrandCard