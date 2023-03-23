import { products } from "../data/Data"


const Product = () => {

    return (
        <>
            <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((item) => (
                    <div key={item._id} className="group relative border border-gray-200">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                                src={item.imagesThumbnail}

                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <div className="mt-4 flex justify-between pl-[10px]">
                            <div>
                                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                <h3 className="text-sm text-gray-700">
                                    <a href="">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {item.title}
                                    </a>
                                </h3>

                            </div>
                            {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    )

}

export default Product