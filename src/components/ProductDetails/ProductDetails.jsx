import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const navigate = useNavigate();
    const productDetails = useLoaderData();
    const { id, title, price, description, image, rating } = productDetails;
    return (
        <div className="px-4 bg-slate-100">
            <h1 className="p-3 bg-cyan-600 text-white font-bold">{title}</h1>
            <div>
                <img src={image} alt={`image of ${title}`} />
            </div>
            <div>
                <p className="text-lg text-orange-500">${price}</p>
                <p className="text-cyan-600">Rating: {rating.rate}({rating.count})</p>
            </div>

            <div className="flex gap-3">
                <button className="py-2 px-4 border-2  rounded-3xl border-cyan-500 hover:bg-cyan-500 hover:text-white">Buy Now</button>
                <button className="py-2 px-4 border-2  rounded-3xl border-cyan-500 hover:bg-cyan-500 hover:text-white">Add to Cart</button>
            </div>
            <div>
                <h2>Product details of {title}</h2>
                <p className="line-clamp-2">{description}</p>
            </div>
            <button className=" px-2 border-2  rounded-3xl border-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={() => navigate(-1)}>Previous Page</button>
        </div>
    );
};

export default ProductDetails;