const ProductImage = ({ image, name }) => {
    return (
        <div className="relative">
            <img
                src={image || "https://www.applewudindia.com/wp-content/uploads/2024/01/Applewud-Premium-Graphic-for-website-1024x1024.png"}
                alt={name}
                className="object-cover w-full h-56"
            />
        </div>
    );
};

export default ProductImage;
