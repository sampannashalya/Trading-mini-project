// // import { useState } from "react";
// // import StockCard from "../components/StockCard";
// // import PortfolioCard from "../components/PortfolioCard";

// // export default function Dashboard() {
// //   const stocks = [
// //     { symbol: "reliance", price: 185, change: 2.5 },
// //     { symbol: "bajaj finance", price: 210, change: -1.8 },
// //   ];

// //   const portfolio = [
// //     { symbol: "reliance", quantity: 10, totalValue: 1850, profitLoss: 50 },
// //     { symbol: "bajaj finance", quantity: 5, totalValue: 1050, profitLoss: -20 },
// //   ];

// //   return (
// //     <div className="container">
// //       <h1>Stock Dashboard</h1>
// //       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
// //         {stocks.map((stock) => (
// //           <StockCard key={stock.symbol} {...stock} />
// //         ))}
// //       </div>

// //       <h2>My Portfolio</h2>
// //       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
// //         {portfolio.map((item) => (
// //           <PortfolioCard key={item.symbol} {...item} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";

// export default function StockDashboard() {
//   const [stocks, setStocks] = useState([
//     { symbol: "Reliance", price: 1300, change: 2.5 },
//     { symbol: "Bajaj Finance", price: 8400, change: -1.8 },
//   ]);

//   const [portfolio, setPortfolio] = useState([
//     { symbol: "Reliance", quantity: 1000, totalValue: 1850, profitLoss: 50 },
//     { symbol: "Bajaj Finance", quantity: 500, totalValue: 1050, profitLoss: -20 },
//   ]);

//   // Function to update stock prices randomly
//   const updateStocks = () => {
//     setStocks((prevStocks) =>
//       prevStocks.map((stock) => {
//         const randomChange = (Math.random() * 4 - 2).toFixed(2); // Random change between -2 and +2
//         const newPrice = Math.max(1, stock.price + parseFloat(randomChange)); // Ensure price doesn't go negative
//         return { ...stock, price: newPrice, change: parseFloat(randomChange) };
//       })
//     );
//   };

//   // Function to update portfolio values based on new stock prices
//   const updatePortfolio = () => {
//     setPortfolio((prevPortfolio) =>
//       prevPortfolio.map((holding) => {
//         const stock = stocks.find((s) => s.symbol === holding.symbol);
//         if (stock) {
//           const newTotalValue = (holding.quantity * stock.price).toFixed(2);
//           const profitLoss = (newTotalValue - holding.totalValue).toFixed(2);
//           return { ...holding, totalValue: parseFloat(newTotalValue), profitLoss: parseFloat(profitLoss) };
//         }
//         return holding;
//       })
//     );
//   };

//   // Run every 3 seconds to simulate real-time stock price changes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateStocks();
//       updatePortfolio();
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [stocks]); // Re-run when stocks change

//   return (
//     <div>
//       <h2>Live Stock Prices</h2>
//       {stocks.map((stock, index) => (
//         <div key={index}>
//           <p>
//             {stock.symbol}: ₹{stock.price} (<span style={{ color: stock.change >= 0 ? "green" : "red" }}>
//               {stock.change >= 0 ? "+" : ""}{stock.change}%
//             </span>)
//           </p>
//         </div>
//       ))}

//       <h2>Your Portfolio</h2>
//       {portfolio.map((holding, index) => (
//         <div key={index}>
//           <p>
//             {holding.symbol} - {holding.quantity} shares | Total: ₹{holding.totalValue} | 
//             <span style={{ color: holding.profitLoss >= 0 ? "green" : "red" }}>
//               {holding.profitLoss >= 0 ? " +" : " "}{holding.profitLoss}
//             </span>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// 

// import { useState, useEffect } from "react";

// export default function StockDashboard() {
//   const [stocks, setStocks] = useState([
//     { symbol: "Reliance", price: 1300, change: 2.5 },
//     { symbol: "Bajaj Finance", price: 8400, change: -1.8 },
//   ]);

//   const [portfolio, setPortfolio] = useState([
//     { symbol: "Reliance", quantity: 1000, totalValue: 1850, profitLoss: 50 },
//     { symbol: "Bajaj Finance", quantity: 500, totalValue: 1050, profitLoss: -20 },
//   ]);

//   // Function to update stock prices randomly
//   const updateStocks = () => {
//     setStocks((prevStocks) =>
//       prevStocks.map((stock) => {
//         const randomChange = (Math.random() * 4 - 2).toFixed(2); // Random change between -2 and +2
//         const newPrice = Math.max(1, stock.price + parseFloat(randomChange)); // Ensure price doesn't go negative
//         return { ...stock, price: newPrice, change: parseFloat(randomChange) };
//       })
//     );
//   };

//   // Function to update portfolio values based on new stock prices
//   const updatePortfolio = () => {
//     setPortfolio((prevPortfolio) =>
//       prevPortfolio.map((holding) => {
//         const stock = stocks.find((s) => s.symbol === holding.symbol);
//         if (stock) {
//           const newTotalValue = (holding.quantity * stock.price).toFixed(2);
//           const profitLoss = (newTotalValue - holding.totalValue).toFixed(2);
//           return { ...holding, totalValue: parseFloat(newTotalValue), profitLoss: parseFloat(profitLoss) };
//         }
//         return holding;
//       })
//     );
//   };

//   // Run every 3 seconds to simulate real-time stock price changes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateStocks();
//       updatePortfolio();
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [stocks]); // Re-run when stocks change

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
//       <h2 style={{ color: "#333", marginBottom: "20px" }}>Live Stock Prices</h2>
      
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {stocks.map((stock, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#f4f4f4",
//               padding: "15px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "200px",
//               textAlign: "center",
//             }}
//           >
//             <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{stock.symbol}</p>
//             <p style={{ margin: "5px 0", fontSize: "16px" }}>₹{stock.price}</p>
//             <p style={{ color: stock.change >= 0 ? "green" : "red", fontWeight: "bold" }}>
//               {stock.change >= 0 ? "+" : ""}{stock.change}%
//             </p>
//           </div>
//         ))}
//       </div>

//       <h2 style={{ color: "#333", margin: "30px 0 20px" }}>Your Portfolio</h2>
      
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {portfolio.map((holding, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#f4f4f4",
//               padding: "15px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "250px",
//               textAlign: "center",
//             }}
//           >
//             <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{holding.symbol}</p>
//             <p style={{ margin: "5px 0", fontSize: "16px" }}>
//               {holding.quantity} shares | Total: ₹{holding.totalValue}
//             </p>
//             <p
//               style={{
//                 color: holding.profitLoss >= 0 ? "green" : "red",
//                 fontWeight: "bold",
//               }}
//             >
//               {holding.profitLoss >= 0 ? "+" : ""}{holding.profitLoss}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";

// export default function StockDashboard() {
//   const [stocks, setStocks] = useState([
//     { symbol: "Reliance", price: 1300, change: 2.5 },
//     { symbol: "Bajaj Finance", price: 8400, change: -1.8 },
//   ]);

//   const [portfolio, setPortfolio] = useState([]);

//   // Function to update stock prices randomly
//   const updateStocks = () => {
//     setStocks((prevStocks) =>
//       prevStocks.map((stock) => {
//         const randomChange = (Math.random() * 4 - 2).toFixed(2); // Random change between -2% and +2%
//         const newPrice = Math.max(1, stock.price + parseFloat(randomChange)); // Ensure price doesn't go negative
//         return { ...stock, price: newPrice, change: parseFloat(randomChange) };
//       })
//     );
//   };

//   // Run every 3 seconds to simulate real-time stock price changes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateStocks();
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [stocks]); // Re-run when stocks change

//   // Function to handle buying stocks
//   const handleBuy = (symbol, price) => {
//     const quantity = parseInt(prompt(`Enter quantity to buy for ${symbol}:`), 10);
//     if (isNaN(quantity) || quantity <= 0) return;

//     setPortfolio((prevPortfolio) => {
//       const existingStock = prevPortfolio.find((s) => s.symbol === symbol);

//       if (existingStock) {
//         return prevPortfolio.map((stock) =>
//           stock.symbol === symbol
//             ? {
//                 ...stock,
//                 quantity: stock.quantity + quantity,
//                 totalValue: (stock.quantity + quantity) * price,
//               }
//             : stock
//         );
//       } else {
//         return [...prevPortfolio, { symbol, quantity, totalValue: quantity * price }];
//       }
//     });
//   };

//   // Function to handle selling stocks
//   const handleSell = (symbol, price) => {
//     const quantity = parseInt(prompt(`Enter quantity to sell for ${symbol}:`), 10);
//     if (isNaN(quantity) || quantity <= 0) return;

//     setPortfolio((prevPortfolio) =>
//       prevPortfolio
//         .map((stock) =>
//           stock.symbol === symbol
//             ? { ...stock, quantity: stock.quantity - quantity, totalValue: (stock.quantity - quantity) * price }
//             : stock
//         )
//         .filter((stock) => stock.quantity > 0) // Remove stock if quantity is 0
//     );
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
//       <h2 style={{ color: "#333", marginBottom: "20px" }}>Live Stock Prices</h2>

//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {stocks.map((stock, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#f4f4f4",
//               padding: "15px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "220px",
//               textAlign: "center",
//             }}
//           >
//             <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{stock.symbol}</p>
//             <p style={{ margin: "5px 0", fontSize: "16px" }}>₹{stock.price}</p>
//             <p style={{ color: stock.change >= 0 ? "green" : "red", fontWeight: "bold" }}>
//               {stock.change >= 0 ? "+" : ""}{stock.change}%
//             </p>
//             <button
//               onClick={() => handleBuy(stock.symbol, stock.price)}
//               style={{
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 12px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 marginRight: "5px",
//               }}
//             >
//               Buy
//             </button>
//             <button
//               onClick={() => handleSell(stock.symbol, stock.price)}
//               style={{
//                 backgroundColor: "#E74C3C",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 12px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Sell
//             </button>
//           </div>
//         ))}
//       </div>

//       <h2 style={{ color: "#333", margin: "30px 0 20px" }}>Your Portfolio</h2>

//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {portfolio.length > 0 ? (
//           portfolio.map((holding, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#f4f4f4",
//                 padding: "15px",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 width: "250px",
//                 textAlign: "center",
//               }}
//             >
//               <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{holding.symbol}</p>
//               <p style={{ margin: "5px 0", fontSize: "16px" }}>
//                 {holding.quantity} shares | Total: ₹{holding.totalValue}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p style={{ fontSize: "16px", fontWeight: "bold", color: "#777" }}>No stocks in your portfolio.</p>
//         )}
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";

// export default function StockDashboard() {
//   // Initial Balance
//   const [balance, setBalance] = useState(100000); // ₹1,00,000 fixed balance

//   // Popular Indian Stocks
//   const [stocks, setStocks] = useState([
//     { symbol: "Reliance", price: 2400.75, change: 1.2 },
//     { symbol: "TCS", price: 3900.50, change: -0.8 },
//     { symbol: "Infosys", price: 1580.30, change: 2.5 },
//     { symbol: "HDFC Bank", price: 1460.10, change: -1.2 },
//     { symbol: "ICICI Bank", price: 950.75, change: 1.8 },
//     { symbol: "Adani Enterprises", price: 2300.45, change: -0.9 },
//   ]);

//   const [portfolio, setPortfolio] = useState([]);

//   // Simulate real-time stock price updates
//   const updateStocks = () => {
//     setStocks((prevStocks) =>
//       prevStocks.map((stock) => {
//         const randomChange = (Math.random() * 4 - 2).toFixed(2); // Random between -2% & +2%
//         const newPrice = Math.max(1, (stock.price + stock.price * (parseFloat(randomChange) / 100)).toFixed(2));
//         return { ...stock, price: newPrice, change: parseFloat(randomChange) };
//       })
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(updateStocks, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Handle Buy Stocks
//   const handleBuy = (symbol, price) => {
//     const quantity = parseInt(prompt(`Enter quantity to buy for ${symbol}:`), 10);
//     if (isNaN(quantity) || quantity <= 0) return;

//     const totalCost = quantity * price;
//     if (totalCost > balance) {
//       alert("Insufficient balance!");
//       return;
//     }

//     setBalance((prev) => prev - totalCost);
//     setPortfolio((prev) => {
//       const existingStock = prev.find((s) => s.symbol === symbol);
//       if (existingStock) {
//         return prev.map((stock) =>
//           stock.symbol === symbol
//             ? { ...stock, quantity: stock.quantity + quantity, buyPrice: price }
//             : stock
//         );
//       } else {
//         return [...prev, { symbol, quantity, buyPrice: price }];
//       }
//     });
//   };

//   // Handle Sell Stocks
//   const handleSell = (symbol, price) => {
//     const quantity = parseInt(prompt(`Enter quantity to sell for ${symbol}:`), 10);
//     if (isNaN(quantity) || quantity <= 0) return;

//     setPortfolio((prev) =>
//       prev
//         .map((stock) =>
//           stock.symbol === symbol
//             ? { ...stock, quantity: stock.quantity - quantity }
//             : stock
//         )
//         .filter((stock) => stock.quantity > 0)
//     );

//     setBalance((prev) => prev + quantity * price);
//   };

//   // Calculate Profit/Loss for Each Stock
//   const calculateProfitLoss = (symbol, currentPrice, buyPrice, quantity) => {
//     const profitLoss = ((currentPrice - buyPrice) * quantity).toFixed(2);
//     return profitLoss >= 0 ? `+₹${profitLoss}` : `-₹${Math.abs(profitLoss)}`;
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", background: "#f5f5f5" }}>
//       <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>📈 Live Stock Market Dashboard</h2>
//       <h3 style={{ color: "#27ae60" }}>💰 Balance: ₹{balance.toFixed(2)}</h3>

//       {/* Display Nifty & Sensex */}
//       <div style={{
//         display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px",
//       }}>
//         <div style={{ padding: "10px", backgroundColor: "#3498db", color: "white", borderRadius: "5px" }}>
//           Nifty 50: 17,800.45 (+0.95%)
//         </div>
//         <div style={{ padding: "10px", backgroundColor: "#e74c3c", color: "white", borderRadius: "5px" }}>
//           Sensex: 60,300.25 (-1.2%)
//         </div>
//       </div>

//       {/* Stocks List */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {stocks.map((stock, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "white",
//               padding: "15px",
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "250px",
//               textAlign: "center",
//             }}
//           >
//             <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{stock.symbol}</p>
//             <p style={{ fontSize: "16px", fontWeight: "bold" }}>₹{stock.price}</p>
//             <p style={{ color: stock.change >= 0 ? "green" : "red", fontWeight: "bold" }}>
//               {stock.change >= 0 ? "+" : ""}{stock.change}%
//             </p>
//             <button
//               onClick={() => handleBuy(stock.symbol, stock.price)}
//               style={{
//                 backgroundColor: "#2ecc71",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 12px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 marginRight: "5px",
//               }}
//             >
//               Buy
//             </button>
//             <button
//               onClick={() => handleSell(stock.symbol, stock.price)}
//               style={{
//                 backgroundColor: "#e74c3c",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 12px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Sell
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Portfolio */}
//       <h2 style={{ color: "#2c3e50", margin: "30px 0 20px" }}>📊 Your Portfolio</h2>

//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {portfolio.length > 0 ? (
//           portfolio.map((holding, index) => {
//             const currentStock = stocks.find((stock) => stock.symbol === holding.symbol);
//             return (
//               <div
//                 key={index}
//                 style={{
//                   backgroundColor: "white",
//                   padding: "15px",
//                   borderRadius: "10px",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                   width: "250px",
//                   textAlign: "center",
//                 }}
//               >
//                 <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{holding.symbol}</p>
//                 <p style={{ fontSize: "16px" }}>Shares: {holding.quantity}</p>
//                 <p style={{ fontSize: "16px" }}>
//                   Profit/Loss: <span style={{ color: calculateProfitLoss(holding.symbol, currentStock.price, holding.buyPrice, holding.quantity) >= 0 ? "green" : "red" }}>
//                     {calculateProfitLoss(holding.symbol, currentStock.price, holding.buyPrice, holding.quantity)}
//                   </span>
//                 </p>
//               </div>
//             );
//           })
//         ) : (
//           <p style={{ fontSize: "16px", fontWeight: "bold", color: "#777" }}>No stocks in your portfolio.</p>
//         )}
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";

// export default function StockDashboard() {
//   // Increased Wallet Size
//   const [balance, setBalance] = useState(1000000); // ₹10,00,000

//   // Popular Indian Stocks
//   const [stocks, setStocks] = useState([
//     { symbol: "Reliance", price: 2400.75, change: 1.2 },
//     { symbol: "TCS", price: 3900.50, change: -0.8 },
//     { symbol: "Infosys", price: 1580.30, change: 2.5 },
//     { symbol: "HDFC Bank", price: 1460.10, change: -1.2 },
//     { symbol: "ICICI Bank", price: 950.75, change: 1.8 },
//     { symbol: "Adani Enterprises", price: 2300.45, change: -0.9 },
//   ]);

//   const [portfolio, setPortfolio] = useState([]);

//   // Simulate real-time stock price updates
//   const updateStocks = () => {
//     setStocks((prevStocks) =>
//       prevStocks.map((stock) => {
//         const randomChange = (Math.random() * 100 - 50).toFixed(2); // Random between -₹50 & +₹50
//         const newPrice = Math.max(1, (stock.price + parseFloat(randomChange)).toFixed(2));
//         return { ...stock, price: newPrice, change: parseFloat(randomChange) };
//       })
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(updateStocks, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Handle Buy Stocks
//   const handleBuy = (symbol, price) => {
//     const quantity = parseInt(prompt(`Enter quantity to buy for ${symbol}:`), 10);
//     if (isNaN(quantity) || quantity <= 0) return;

//     const totalCost = quantity * price;
//     if (totalCost > balance) {
//       alert("Insufficient balance!");
//       return;
//     }

//     setBalance((prev) => prev - totalCost);
//     setPortfolio((prev) => {
//       const existingStock = prev.find((s) => s.symbol === symbol);
//       if (existingStock) {
//         return prev.map((stock) =>
//           stock.symbol === symbol
//             ? { ...stock, quantity: stock.quantity + quantity, buyPrice: price }
//             : stock
//         );
//       } else {
//         return [...prev, { symbol, quantity, buyPrice: price }];
//       }
//     });
//   };

//   // Handle Sell Stocks
//   const handleSell = (symbol, price) => {
//     const quantity = parseInt(prompt(`Enter quantity to sell for ${symbol}:`), 10);
//     if (isNaN(quantity) || quantity <= 0) return;

//     setPortfolio((prev) =>
//       prev
//         .map((stock) =>
//           stock.symbol === symbol
//             ? { ...stock, quantity: stock.quantity - quantity }
//             : stock
//         )
//         .filter((stock) => stock.quantity > 0)
//     );

//     setBalance((prev) => prev + quantity * price);
//   };

//   // Calculate Profit/Loss for Each Stock
//   const calculateProfitLoss = (symbol, currentPrice, buyPrice, quantity) => {
//     const profitLoss = ((currentPrice - buyPrice) * quantity).toFixed(2);
//     return profitLoss >= 0 ? `+₹${profitLoss}` : `-₹${Math.abs(profitLoss)}`;
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", background: "#121212", color: "white" }}>
//       <h2 style={{ color: "#ffffff", marginBottom: "20px" }}>📈 Live Stock Market Dashboard</h2>
//       <h3 style={{ color: "#2ecc71" }}>💰 Balance: ₹{balance.toFixed(2)}</h3>

//       {/* Display Nifty & Sensex */}
//       <div style={{
//         display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px",
//       }}>
//         <div style={{ padding: "10px", backgroundColor: "#27ae60", color: "white", borderRadius: "5px" }}>
//           Nifty 50: 18,250.60 (+1.05%)
//         </div>
//         <div style={{ padding: "10px", backgroundColor: "#e74c3c", color: "white", borderRadius: "5px" }}>
//           Sensex: 61,800.75 (-0.75%)
//         </div>
//       </div>

//       {/* Stocks List */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {stocks.map((stock, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#1e1e1e",
//               padding: "15px",
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
//               width: "250px",
//               textAlign: "center",
//             }}
//           >
//             <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{stock.symbol}</p>
//             <p style={{ fontSize: "16px", fontWeight: "bold" }}>₹{stock.price}</p>
//             <p style={{ color: stock.change >= 0 ? "#2ecc71" : "#e74c3c", fontWeight: "bold" }}>
//               {stock.change >= 0 ? "+" : ""}{stock.change}%
//             </p>
//             <button
//               onClick={() => handleBuy(stock.symbol, stock.price)}
//               style={{
//                 backgroundColor: "#2ecc71",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 12px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 marginRight: "5px",
//               }}
//             >
//               Buy
//             </button>
//             <button
//               onClick={() => handleSell(stock.symbol, stock.price)}
//               style={{
//                 backgroundColor: "#e74c3c",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 12px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Sell
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Portfolio */}
//       <h2 style={{ color: "#ffffff", margin: "30px 0 20px" }}>📊 Your Portfolio</h2>

//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {portfolio.length > 0 ? (
//           portfolio.map((holding, index) => {
//             const currentStock = stocks.find((stock) => stock.symbol === holding.symbol);
//             return (
//               <div
//                 key={index}
//                 style={{
//                   backgroundColor: "#1e1e1e",
//                   padding: "15px",
//                   borderRadius: "10px",
//                   boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
//                   width: "250px",
//                   textAlign: "center",
//                 }}
//               >
//                 <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{holding.symbol}</p>
//                 <p style={{ fontSize: "16px" }}>Shares: {holding.quantity}</p>
//                 <p style={{ fontSize: "16px", color: calculateProfitLoss(holding.symbol, currentStock.price, holding.buyPrice, holding.quantity) >= 0 ? "#2ecc71" : "#e74c3c" }}>
//                   Profit/Loss: {calculateProfitLoss(holding.symbol, currentStock.price, holding.buyPrice, holding.quantity)}
//                 </p>
//               </div>
//             );
//           })
//         ) : (
//           <p style={{ fontSize: "16px", fontWeight: "bold", color: "#bbb" }}>No stocks in your portfolio.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";

export default function StockDashboard() {
  // Increased Wallet Size
  const [balance, setBalance] = useState(1000000); // ₹10,00,000

  // Popular Indian Stocks
  const [stocks, setStocks] = useState([
    { symbol: "Reliance", price: 2400.75 },
    { symbol: "TCS", price: 3900.50 },
    { symbol: "Infosys", price: 1580.30 },
    { symbol: "HDFC Bank", price: 1460.10 },
    { symbol: "ICICI Bank", price: 950.75 },
    { symbol: "Adani Enterprises", price: 2300.45 },
  ]);

  const [portfolio, setPortfolio] = useState([]);

  // Simulate real-time stock price updates
  const updateStocks = () => {
    setStocks((prevStocks) =>
      prevStocks.map((stock) => {
        const percentageChange = (Math.random() * 100 - 50).toFixed(2); // -50% to +50%
        const newPrice = Math.max(1, (stock.price * (1 + percentageChange / 100)).toFixed(2));
        return { ...stock, price: newPrice, change: percentageChange };
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(updateStocks, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle Buy Stocks
  const handleBuy = (symbol, price) => {
    const quantity = parseInt(prompt(`Enter quantity to buy for ${symbol}:`), 10);
    if (isNaN(quantity) || quantity <= 0) return;

    const totalCost = quantity * price;
    if (totalCost > balance) {
      alert("Insufficient balance!");
      return;
    }

    setBalance((prev) => prev - totalCost);
    setPortfolio((prev) => {
      const existingStock = prev.find((s) => s.symbol === symbol);
      if (existingStock) {
        return prev.map((stock) =>
          stock.symbol === symbol
            ? { ...stock, quantity: stock.quantity + quantity, buyPrice: price }
            : stock
        );
      } else {
        return [...prev, { symbol, quantity, buyPrice: price }];
      }
    });
  };

  // Handle Sell Stocks
  const handleSell = (symbol, price) => {
    const quantity = parseInt(prompt(`Enter quantity to sell for ${symbol}:`), 10);
    if (isNaN(quantity) || quantity <= 0) return;

    setPortfolio((prev) =>
      prev
        .map((stock) =>
          stock.symbol === symbol
            ? { ...stock, quantity: stock.quantity - quantity }
            : stock
        )
        .filter((stock) => stock.quantity > 0)
    );

    setBalance((prev) => prev + quantity * price);
  };

  // Calculate Profit/Loss for Each Stock
  const calculateProfitLoss = (symbol, currentPrice, buyPrice, quantity) => {
    const profitLoss = ((currentPrice - buyPrice) * quantity).toFixed(2);
    return { value: profitLoss, color: profitLoss >= 0 ? "#2ecc71" : "#e74c3c" }; // Green for profit, Red for loss
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", background: "#121212", color: "white" }}>
      <h2 style={{ color: "#ffffff", marginBottom: "20px" }}>📈 Live Stock Market Dashboard</h2>
      <h3 style={{ color: "#2ecc71" }}>💰 Balance: ₹{balance.toFixed(2)}</h3>

      {/* Display Nifty & Sensex */}
      <div style={{
        display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px",
      }}>
        <div style={{ padding: "10px", backgroundColor: "#27ae60", color: "white", borderRadius: "5px" }}>
          Nifty 50: 18,250.60 (+1.05%)
        </div>
        <div style={{ padding: "10px", backgroundColor: "#e74c3c", color: "white", borderRadius: "5px" }}>
          Sensex: 61,800.75 (-0.75%)
        </div>
      </div>

      {/* Stocks List */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {stocks.map((stock, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1e1e",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
              width: "250px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{stock.symbol}</p>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>₹{stock.price}</p>
            <p style={{ color: stock.change >= 0 ? "#2ecc71" : "#e74c3c", fontWeight: "bold" }}>
              {stock.change >= 0 ? "+" : ""}{stock.change}%
            </p>
            <button
              onClick={() => handleBuy(stock.symbol, stock.price)}
              style={{
                backgroundColor: "#2ecc71",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              Buy
            </button>
            <button
              onClick={() => handleSell(stock.symbol, stock.price)}
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sell
            </button>
          </div>
        ))}
      </div>

      {/* Portfolio */}
      <h2 style={{ color: "#ffffff", margin: "30px 0 20px" }}>📊 Your Portfolio</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {portfolio.length > 0 ? (
          portfolio.map((holding, index) => {
            const currentStock = stocks.find((stock) => stock.symbol === holding.symbol);
            if (!currentStock) return null;
            const profitLoss = calculateProfitLoss(holding.symbol, currentStock.price, holding.buyPrice, holding.quantity);
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#1e1e1e",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{holding.symbol}</p>
                <p style={{ fontSize: "16px" }}>Shares: {holding.quantity}</p>
                <p style={{ fontSize: "16px", color: profitLoss.color }}>
                  Profit/Loss: {profitLoss.value >= 0 ? `+₹${profitLoss.value}` : `-₹${Math.abs(profitLoss.value)}`}
                </p>
              </div>
            );
          })
        ) : (
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "#bbb" }}>No stocks in your portfolio.</p>
        )}
      </div>
    </div>
  );
}


