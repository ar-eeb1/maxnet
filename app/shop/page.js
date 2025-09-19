"use client";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

function ShopPage() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    const placeOrder = () => {
        if (cart.length === 0) return alert("Your cart is empty!");

        // Build WhatsApp order message
        let message = `
🛒 New Product Order
--------------------------
Items:
${cart
                .map(
                    (item, i) =>
                        `${i + 1}. ${item.name} - Rs ${item.price}\n   ${item.description}`
                )
                .join("\n\n")}
--------------------------
Total: Rs ${cart.reduce((sum, item) => sum + parseInt(item.price), 0)}
    `;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/923194703862?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
        setCart([])
    };
    return (
        <div className="mt-8 flex flex-col items-center">
            {/* Products */}
            <div className="flex gap-5 ml-10 mr-10 flex-wrap justify-around text-center">
                <ProductCard
                    image="/shop/c5.png"
                    name="HUAWEI HS8145C5 ~ NO WARRANTY"
                    description="Fibre optic router 2.4Ghz"
                    price="3500"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/VSOL.png"
                    name="VSOL V2802GWT ~ 1 YEAR WARRANTY"
                    description="Fibre Optic Router 2.4Ghz"
                    price="4700"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/VSOL5g.png"
                    name="VSOL V2802ACT ~ 1 YEAR WARRANTY"
                    description="Fibre Optic Dual band Router 2.4/5Ghz"
                    price="7200"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/huawei5g.png"
                    name="Huawei Router HG8245Q2 XPON 5Ghz ~ NO WARRANTY"
                    description="Huawei Fibre Optic Dual band Router 2.4/5Ghz"
                    price="5500"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/dlink850.png"
                    name="DLink DIR-850 5Ghz ~ NO WARRANTY"
                    description="D-Link DIR-850L Wireless AC1200 Dual Band Gigabit Cloud Router (Used)"
                    price="3500"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/tp841.png"
                    name="TP-Link WR841N ~ 1 YEAR WARRANTY"
                    description="300Mbps wireless speed ideal for interruption sensitive applications like HD video streaming"
                    price="4500"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/tp940.png"
                    name="TP-Link WR940N ~ 1 YEAR WARRANTY"
                    description="450Mbps wireless speed ideal for interruption sensitive applications like HD video streaming"
                    price="5200"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/cat5.png"
                    name="Cat 5e - Dual PVC Ethernet"
                    description="Cat5e UTP LDPE | Good performance exceeding ANSI/TIA Enhanced Category 5 specifications"
                    price="40/m"
                    onAddToCart={handleAddToCart}
                />
                <ProductCard
                    image="/shop/2core.png"
                    name="Fiber Optic | 2 Core"
                    description="Commonly used for FTTH, networking, and reliable long-distance communication"
                    price="25/m"
                    onAddToCart={handleAddToCart}
                />
            </div>

            {/* Floating Cart Button */}
            <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="fixed bottom-6 right-6 bg-blue-50 text-white p-4 rounded-full shadow-lg hover:bg-blue-300 transition cursor-pointer"
            >
                <lord-icon
                    src="https://cdn.lordicon.com/edkuxwya.json"
                    trigger="hover"
                    colors="primary:#0a2e5c,secondary:#25cef4"
                    style={{ width: [250], height: [250] }}>
                </lord-icon>
                {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                        {cart.length}
                    </span>
                )}
            </button>

            {/* Cart Drawer */}
            {isCartOpen && (
                <div className="fixed bottom-20 right-6 w-80 bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2">Your Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-500">No items added yet.</p>
                    ) : (
                        <ul className="divide-y max-h-60 overflow-y-auto">
                            {cart.map((item, i) => (
                                <li key={i} className="py-2 flex justify-between text-sm">
                                    <span>{item.name}</span>
                                    <span>Rs {item.price}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {cart.length > 0 && (
                        <button
                            onClick={placeOrder}
                            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                        >
                            Place Order via WhatsApp
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default ShopPage;
