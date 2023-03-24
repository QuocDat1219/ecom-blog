
const Path = (props) => {

    return (

        <>
            <section className="section-pagetop bg pt-3">
                <div className=" mx-auto sm:px-4 ">
                    <nav>
                        <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-gray-100 rounded text-white">
                            <li className="inline-block px-1 py-2 "><a href="/" className=" text-black">Trang chủ</a></li>
                            <li className="inline-block px-1 py-2 "><a href="/allproduct" className=" text-black hover:text-gray">/ Sản phẩm</a></li>
                            {props.data == "" ? " " : <li className="inline-block px-1 py-2 text-gray-700 active" aria-current="page">/ {props.data}</li>}
                        </ol>
                    </nav>
                </div>
            </section>


        </>
    )

}

export default Path