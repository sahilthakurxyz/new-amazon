// import {
//   CardElement,
//   useCartElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import axios from "../axios";
// import React, { useEffect, useState } from "react";
// import CurrencyFormat from "react-currency-format";
// import { Link } from "react-router-dom";

// import { useStateValue } from "../StateProvider";
// import CheckOutProduct from "./CheckOutProduct";
// import "./Paymentmethod.css";
// import { getBasketTotal } from "./reducer";
// import { useNavigate } from "react-router-dom";
// function Payent() {
//   const history = useNavigate();
//   const [{ basket, user }, dispatch] = useStateValue();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [processing, setProcessing] = useState("");
//   const [succeeded, setSucceeded] = useState(false);
//   const [clientSecret, setClientSecret] = useState(true);
//   useEffect(() => {
//     //  genrate the special secret wth allows us to charge customer
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         // Stripe exports the total in a currences submits
//         url: `/payment/create?total=${getBasketTotal(basket) * 90}`,
//       });
//       getClientSecret(response.data.clientSecret);
//     };
//     getClientSecret();
//   }, [basket]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setProcessing(true);
//     //    clintSecret , how stripe know how much you charge from customer
//     const payload = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentIntent }) => {
//         // paymentIntent =  payment confirmation
//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);
//         history("/orders");
//       });
//   };
//   const handleChange = (event) => {
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };
//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout (<Link to="/Checkout">{basket.length}</Link>)
//         </h1>
//         {/* payment__secton --- paymemt address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Dilvery address</h3>
//           </div>
//           <div className="payment__address">
//             <h2>{user ? user.email : "Please Sign In First"}</h2>
//             <p>184201</p>
//             <p>kathua, jammu & kashmir</p>
//           </div>
//         </div>
//         {/* payment__section--- review items */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h2>Review Items and Delvery</h2>
//           </div>
//           <div className="payment__items">
//             {basket.map((items) => (
//               <CheckOutProduct
//                 id={items.id}
//                 image={items.image}
//                 price={items.price}
//                 title={items.title}
//                 rating={items.rating}
//               />
//             ))}
//           </div>
//         </div>
//         {/* payement method */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">
//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />

//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => (
//                     <>
//                       <p>
//                         <h4>Total Order</h4> ({basket.length} items):{" "}
//                         <strong>{value}</strong>
//                       </p>
//                     </>
//                   )}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payent;
