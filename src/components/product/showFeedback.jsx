import moment from "moment";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './StarRating.css';
const ShowFeedBackProduct = ({ idproductfeedback }) => {
    const [feedbackproduct, setFeedbackProduct] = useState([]);

    console.log(idproductfeedback);
    const renderStar = (starIndex) => {
        return (
            <span
                key={starIndex}
                className={"star selected"}

            >
                &#9733;
            </span>
        );
    };
    useEffect(() => {
        const getFeedback = async () => {
            await axios.get(`https://ecom-oto.vercel.app/api/feedbackproduct/feedback?idproducts=${idproductfeedback}`).then((response) => {
                console.log(response.data);
                setFeedbackProduct(response.data);
            });
        }
        getFeedback();
    }, [feedbackproduct]);
    return (
        <div>
            <div className="w-full font-bold text-[20px]">
                <h1>Đánh giá</h1>
            </div>
            <div className="overflow-y-scroll h-[350px]">
                <hr />
                {feedbackproduct.map((item) => (
                    <div>
                        <div className="font-bold text-[14px] pt-2">
                            <p>{item.usename}</p>
                        </div>
                        <div className="text-[13px] ">
                            <p className=" text-gray-400">Thời gian:
                                <span className="italic text-gray-600 ">{moment(item.createdAt).format("DD-MM-YYYY " + " " + "HH:mm")}</span>
                            </p>
                            {[...Array(item.quality)].map((n, i) => renderStar(i))}{" "}

                            <p  className="text-gray-600 ">
                                {item.comment}
                            </p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ShowFeedBackProduct;