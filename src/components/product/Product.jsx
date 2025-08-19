const Product = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product;
    console.log(id)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="">
                    <img
                        className="h-72 w-auto object-contain"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-1">{title}
                    </h2><p>{category}</p>
                    <p className="line-clamp-2">{description}</p>
                    <p>${price}</p>
                    <p>Rating {rating.rate} of {rating.count}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-cyan-500">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;