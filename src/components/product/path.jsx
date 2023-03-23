
const Path = (props) => {

    return (

        <>
            <section className="section-pagetop bg pt-3">
                <div className="container mx-auto sm:px-4">
                    <nav>
                        <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-gray-200 rounded text-white">
                            <li className="inline-block py-2 text-gray-700"><a href="#">Trang chủ </a></li>
                            <li className="inline-block py-2 text-gray-700"><a href="#">/ Sản phẩm</a></li>
                            {props.data == "" ? " " : <li className="inline-block px-2 py-2 text-gray-700 active" aria-current="page">{props.data}</li>}
                        </ol>
                    </nav>
                </div>
            </section>


        </>
    )

}

export default Path