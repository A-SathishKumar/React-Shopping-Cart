import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (productName) => {
        setCartItems((prevCartItems) => {
            if (prevCartItems.includes(productName)) {
                setCartCount(cartCount - 1);
                return prevCartItems.filter(item => item !== productName);
            } else {
                setCartCount(cartCount + 1);
                return [...prevCartItems, productName];
            }
        });
    };

    return (
        <div>
            <Navbar cartCount={cartCount} />
            <Hero />
            <Products handleAddToCart={handleAddToCart} cartItems={cartItems} />
            <Footer/>
            
        </div>
    );
};

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar">
            <a href="#">Start Bootstrap</a>
            <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Shop</a>
                <a href="#">Cart ({cartCount})</a>
            </div>
        </nav>
    );
};

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Copyright © Your Website 2024</p>
    </footer>
  );
}

const Hero = () => {
    return (
        <div className="hero">
            <h1>Shop in style</h1>
            <p>With this shop homepage template</p>
        </div>
    );
};

const Products = ({ handleAddToCart, cartItems }) => {
    const products = [
        { name: 'Fancy Product', price: '$40.00 - $80.00', image: 'https://via.placeholder.com/450x300' },
        { name: 'Special Item', price: '$20.00', salePrice: '$18.00', image: 'https://via.placeholder.com/450x300', isOnSale: true, rating: 5 },
        { name: 'Sale Item', price: '$50.00', salePrice: '$25.00', image: 'https://via.placeholder.com/450x300', isOnSale: true },
        { name: 'Popular Item', price: '$40.00', image: 'https://via.placeholder.com/450x300', rating: 5 },
    ];

    return (
        <div className="products">
            {products.map(product => (
                <ProductCard
                    key={product.name}
                    {...product}
                    isInCart={cartItems.includes(product.name)}
                    
                    handleAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
};

const ProductCard = ({ image, name, price, salePrice, buttonText, isOnSale, rating, handleAddToCart, isInCart }) => {
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
            <button onClick={() => handleAddToCart(name)}>
                {isInCart ? 'Remove from cart' : 'Add to cart'}
            </button>
        </div>
    );
};

const Rating = ({ rating }) => {
    const stars = Array(rating)
        .fill()
        .map((_, index) => (
            <span key={index}>⭐</span>
        ));
    return <div>{stars}</div>;
};

export default App;
