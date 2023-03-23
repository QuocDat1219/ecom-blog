
const Path = (props) => {

    return (

        <>
            <section className="section-pagetop bg pt-3">
                <div className=" mx-auto sm:px-4 ">
                    <nav>
                        <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-blue-500 rounded text-white">
                            <li className="inline-block py-2 "><a href="#" className=" text-white">Trang chủ </a></li>
                            <li className="inline-block py-2 "><a href="#" className=" text-white">/ Sản phẩm</a></li>
                            {props.data == "" ? " " : <li className="inline-block px-2 py-2 text-gray-700 active" aria-current="page">{props.data}</li>}
                        </ol>
                    </nav>
                </div>
            </section>


        </>
    )

}

export default Path