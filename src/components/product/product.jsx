import { products } from "../data/Data"


console.log(products);
const Product = () => {

    return (
        <>
            <div className="flex flex-wrap ">
                {products.map((item, index) => (
                    <div className="md:w-1/3 pr-4 pl-4" key={item._id}>
                        <figure className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-product-grid">
                            <div className="img-wrap">
                                <img src={item.imagesThumbnail} width={30} height={30} />

                            </div>
                            <div className="d-grid gap-2  mx-auto ">
                                <p>{item.category}</p>
                            </div>
                            <figcaption className="info-wrap ">
                                <div class="fix-height px-2">
                                    <a href="#" class="title text-decoration-none">{item.title}</a>
                                </div>
                            </figcaption>
                            <div >
                                <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600 py-1 px-2 leading-tight text-xs  block w-full text-decoration-none"><i className="fa fa-search-plus"></i> Xem thêm</a>
                            </div>
                        </figure>
                    </div>
                ))}



            </div>
        </>
    )

}

export default Product