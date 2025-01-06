import { useRef } from "react";
import ProductCard from "../ProductCard";
import { products } from "../../data/productsData";

const Products = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} id="products" className="py-24 bg-[#ca9569] rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-[#2F4F4F]">Our Premium Products</h2>
                    <p className="mt-4 text-[#4F4F4F] max-w-2xl mx-auto text-balance">
                        Discover our selection of high-quality wood sheets, crafted for professionals and enthusiasts alike.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
