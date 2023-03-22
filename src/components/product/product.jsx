import { products } from "../data/Data"


console.log(products);
const Product = () => {

    return (
        <>
            <div className="row">
                {products.map((item, index) => (
                    <div className="col-md-4" key={item._id}>
                        <figure className="card card-product-grid">
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
                                <a href="#" className="btn btn-outline-primary btn-sm btn-block text-decoration-none"><i className="fa fa-search-plus"></i> Xem thêm</a>
                            </div>
                        </figure>
                    </div>
                ))}



            </div>
        </>
    )

}

export default Product