import { products } from "../data/Data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Product = () => {

    return (
        <>
            <div className="mt-4 grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((item) => (
                    <div key={item._id} className="group relative border border-color-basic rounded-md">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-color-basic group-hover:opacity-75 lg:aspect-none lg:h-50">
                            <img
                                src={item.imagesThumbnail}

                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <hr />
                        <div className="mt-4 flex justify-between pl-[10px]">
                            <div>
                                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                <h3 className="text-sm text-gray-700">
                                    <a href={`/productdetail/${item._id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {item.title}
                                    </a>
                                </h3>

                            </div>
                            {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                        </div>
                        <hr />
                        <div className="pt-2">
                            <a href={`/productdetail/${item._id}`}>
                                <button type="button" className="bg-color-basic hover:bg-blue-400 text-text-color font-bold py-2 px-4 border border-blue-700 rounded text-center mr-2 mb-2 w-[100%] ">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Xem thêm
                                </button>
                            </a>
                        </div>

                    </div>

                ))}

            </div>



        </>
    )

}

export default Product