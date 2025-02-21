import React, { useEffect, useState } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    const loginId = localStorage.getItem("loginId");

    useEffect(() => {
        // Simulated API Call (Replace this with real API call)
        const mockProducts = [
            { 
                id: 1, 
                name: "iPhone 14", 
                price: 999, 
                quantity: 10, 
                image: "https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg"
              },
              { 
                id: 2, 
                name: "Samsung Galaxy S23", 
                price: 899, 
                quantity: 8, 
                image: "https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
              },
              { 
                id: 3, 
                name: "MacBook Air M2", 
                price: 1199, 
                quantity: 5, 
                image: "https://5.imimg.com/data5/PX/WQ/MN/SELLER-38271709/mobile.png"
              },
              { 
                id: 4, 
                name: "Dell XPS 15", 
                price: 1499, 
                quantity: 7, 
                image: "https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg"
              },
              { 
                id: 5, 
                name: "iPad Pro 11", 
                price: 799, 
                quantity: 6, 
                image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
              },
              { 
                id: 6, 
                name: "Sony WH-1000XM5", 
                price: 399, 
                quantity: 12, 
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
              },
              { 
                id: 7, 
                name: "Apple Watch Series 8", 
                price: 499, 
                quantity: 9, 
                image: "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
              },
              { 
                id: 8, 
                name: "Samsung 4K Smart TV", 
                price: 1299, 
                quantity: 4, 
                image: "https://cdn.moglix.com/p/O9pwriEkQiChZ-xxlarge.jpg"
              },
              { 
                id: 9, 
                name: "Bose SoundLink Speaker", 
                price: 199, 
                quantity: 15, 
                image: "https://cdn.moglix.com/p/QFaUlTmCNX7EE-xxlarge.jpg"
              },
              { 
                id: 10, 
                name: "Logitech MX Master 3", 
                price: 99, 
                quantity: 20, 
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch3Q2HBC_JPxYJyHMC46qPwmRER-9tJbdWeDlrdBotiTgQCYxfMAGm7SVV04gK7mBtIY&usqp=CAU"
              },
              { 
                id: 11, 
                name: "ASUS ROG Gaming Laptop", 
                price: 1799, 
                quantity: 3, 
                image: "https://pricespy-75b8.kxcdn.com/product/standard/280/7054046.jpg"
              },
              { 
                id: 12, 
                name: "GoPro Hero 11", 
                price: 499, 
                quantity: 11, 
                image: "https://cdn.pricespy.co.nz/product/standard/280/13854672.jpg"
              },
              { 
                id: 13, 
                name: "DJI Mini 3 Drone", 
                price: 749, 
                quantity: 5, 
                image: "https://s.alicdn.com/@sc04/kf/H248ae7e4cc3f4aec8d429c6bb23df87ca.jpg_300x300.jpg"
              },
              { 
                id: 14, 
                name: "Amazon Echo Dot", 
                price: 49, 
                quantity: 30, 
                image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww"
              },
              { 
                id: 15, 
                name: "PlayStation 5", 
                price: 499, 
                quantity: 2, 
                image: "https://image.made-in-china.com/202f0j00EkUoBGvchLqj/International-Version-Original-Used-Cell-Phone-for-Phone-14-14plus-Unlocked-Phone.webp"
              }

        ];
        setProducts(mockProducts);
    }, []);

    const handleAddToCart = (product) => {
        if (!loginId) {
            alert("Please log in to add items to the cart.");
            return;
        }

        // Retrieve existing cart data
        let cart = JSON.parse(localStorage.getItem(`cart_${loginId}`)) || [];

        // Check if the product is already in the cart
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        // Save updated cart back to localStorage
        localStorage.setItem(`cart_${loginId}`, JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div style={{padding:"30px"}}>
                        <div class="card">
                            <div class="bg">

                                <div key={product.id}>
                                    <img style={{width:"50px"}} src={product.image}/>
                                    <h3>{product.name}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <center>

                                        <button type="button" class="button" onClick={() => handleAddToCart(product)}>
                                            <span class="button__text">Add Item</span>
                                            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                                        </button>
                                    </center>
                                    {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
                                </div>
                            </div>
                            <div class="blob"></div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
};

export default Product;
