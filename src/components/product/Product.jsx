import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product;
    return (
        <div>
            <Link to={`/products/${id}`}>
            <div className="card bg-base-100 w-96 shadow-md">
                <figure className="">
                    <img
                        className="h-72 w-auto object-contain"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-1 text-cyan-500">{title}
                    </h2>
                    <p className="text-cyan-700">#{category}</p>
                    <p className="line-clamp-2">{description}</p>
                    <p className="text-lg text-orange-500">${price}</p>
                    <p className="text-cyan-600">Rating: {rating.rate}({rating.count})</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Product;