import moment from "moment";
import React, { useState, useEffect } from "react";
import axios from "axios";
const ShowFeedBackBlog = ({propsblogid}) => {
    const [feedbackblog, setFeedBackBlog] = useState([]);
    useEffect(() => {
        const getFeedback = async () => {
            await axios.get(`https://ecom-oto.vercel.app/api/feedbackblog/feedback?blogid=${propsblogid}`).then((response) => {
                setFeedBackBlog(response.data);
            });
        }
        getFeedback();
    }, [feedbackblog]);
    return (
        <div>
            <div className="w-full font-bold text-[20px]">
                <h1>Bình luận</h1>
            </div>
            <hr />
            {feedbackblog.map((item) => (
                <div>
                    <div className="font-bold text-[14px] pt-2">
                        <p>{item.usename}</p>
                    </div>
                    <div className="text-[13px] text-gray-500 pb-2">
                        <p>
                            {item.comment}
                        </p>
                    </div>
                </div>
            )).slice(-5)}
            <hr />
        </div>
    );
}
export default ShowFeedBackBlog;