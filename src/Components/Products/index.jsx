import { useRef } from "react";
import ProductCard from "../ProductCard";

const Products = () => {
    const sectionRef = useRef(null);

    const products = [
        {
            name: "Premium Plywood",
            price: "$45.99",
            image: "https://images.unsplash.com/photo-1700973408133-b45276ec8feb?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "High-grade, moisture-resistant plywood perfect for furniture and cabinetry",
            rating: 4.8,
            reviewCount: 128,
            badge: "Best Seller",
            specifications: [
                "18mm thickness",
                "Moisture resistant",
                "Grade A quality",
                "FSC certified"
            ]
        },
        {
            name: "MDF Sheets",
            price: "$32.99",
            image: "https://www.decowoodveneers.com/blog/wp-content/uploads/2022/02/Picture5-640x455.png",
            description: "Smooth, dense fiberboard ideal for indoor applications and painting",
            rating: 4.6,
            reviewCount: 95,
            specifications: [
                "12mm thickness",
                "Ultra-smooth surface",
                "Easy to paint",
                "Consistent density"
            ]
        },
        {
            name: "Hardwood Veneer",
            price: "$89.99",
            image:"https://images.unsplash.com/photo-1730104231026-46e3cf7c3141?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Natural oak veneer sheets for premium finishing and luxury appearance",
            rating: 4.9,
            reviewCount: 76,
            badge: "Premium",
            specifications: [
                "3mm thickness",
                "Real wood veneer",
                "Premium finish",
                "Easy application"
            ]
        }
    ];

    return (
        <section ref={sectionRef} id="products" className="py-24 bg-[#ca9569] rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-[#2F4F4F]">Our Premium Products</h2>
                    <p className="mt-4 text-[#4F4F4F] max-w-2xl mx-auto">
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
