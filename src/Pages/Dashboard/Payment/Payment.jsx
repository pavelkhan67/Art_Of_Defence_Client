import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import useSelected from "../../../hooks/useSelected";
import CheckoutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[3]
    // console.log(id);
    const [classes, refetch] = useSelected();
    const SingleClass = classes.find(item => item._id === id);
    const PriceInitial = SingleClass.Price;
    const Price = parseFloat(PriceInitial.toFixed(2))
    // console.log(SingleClass, Price);

    const handlePay = (SingleClass) => {
        fetch(`http://localhost:5000/selected/${SingleClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            
                        }
                    })
    }
    return (
        <div className="mx-10">
            <Helmet>
                <title>Art Of Defense | Payment</title>
            </Helmet>
            <h2 className="text-3xl font-semibold py-5"> Pay Your Bill To Join Your Desire Class!</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={SingleClass} handlePay= { () => handlePay(SingleClass)} price={Price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;