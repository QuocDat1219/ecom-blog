
import Marquee from "react-fast-marquee";
import { brands } from "../data/Data";
const BrandSillder = () => {

    return (
        <>
            <div >
                <Marquee behavior="scroll" direction="left">
                    {brands.map((item, index) => (
                        <div key={item._id}>
                            <img src={item.image} style={{ width: "50%", height: "100px", display: "block", marginRight: "200px" }} />
                        </div>
                    ))}




                </Marquee>
            </div>
        </>
    )

}

export default BrandSillder