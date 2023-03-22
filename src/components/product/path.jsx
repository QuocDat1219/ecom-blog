
const Path = (props) => {

    return (

        <>
            <section className="section-pagetop bg pt-3">
                <div className="container">
                    <nav>
                        <ol className="breadcrumb text-white">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item"><a href="#">Sản phẩm</a></li>
                            {props.data == "" ? " " : <li className="breadcrumb-item active" aria-current="page">{props.data}</li>}
                        </ol>
                    </nav>
                </div>
            </section>


        </>
    )

}

export default Path