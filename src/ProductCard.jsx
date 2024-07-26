const ProductCard = ({ image, name, price, salePrice, buttonText, isOnSale, rating }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            {isOnSale && <div className="sale">Sale</div>}
            <h3>{name}</h3>
            {rating && <Rating rating={rating} />}
            {salePrice ? (
                <p>
                    <span className="price">{price}</span> <span className="sale-price">{salePrice}</span>
                </p>
            ) : (
                <p>{price}</p>
            )}
            <button>{buttonText}</button>
        </div>
    );
};

export default ProductCard;