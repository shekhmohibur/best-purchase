import { useEffect, useState } from "react";

const Products = () => {
     const [productCategory, setProductCategory] = useState([]);
     const [activeCategory, setActiveCategory] = useState('');
     const [allProducts, setAllProducts] = useState([]);
     useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => setProductCategory(data))
     }, [])
     useEffect(() => {
         fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
     },[])
     console.log(allProducts)
     const handleActiveCategory = cate => {
        setActiveCategory(cate)
     }
     console.log(activeCategory)
    return (
        <div>
            <div className="flex  flex-col justify-center items-center gap-3">
                <h2 className="text-xl font-semibold text">Choose A Category</h2>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {
                        productCategory.map((category, index) =>
                             <button onClick={()=>handleActiveCategory(category)}
                             className={`text-cyan-500 py-2 px-4 border-2 border-cyan-500 rounded-3xl hover:bg-cyan-500 hover:text-white transition-all ease-in-out uppercase font-semibold text-xs ${activeCategory === category ? 'customActive' : ''}`}
                             category={category}
                             key={index}
                             >{category}</button>)
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
    
};

export default Products;