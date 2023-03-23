import "./allproduct.css"
import Path from "./path";
import Filter from "./FilterCard";
import Product from "./product";
import BrandSillder from "./brandSlider";

const AllProduct = () => {
    return (
        <>
            <Path data="" />
            <section className="section-content padding-y-4">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <Filter />



                        </aside>
                        <main className="col-md-9">

                            <Product />

                            <nav className="mt-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="#">Trước</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Kế tiếp</a></li>
                                </ul>
                            </nav>
                        </main>
                    </div>
                </div>
            </section>
            <section className="section-pagetop bg pt-3 pb-5">
                <BrandSillder />
            </section>
        </>
    );

}
export default AllProduct