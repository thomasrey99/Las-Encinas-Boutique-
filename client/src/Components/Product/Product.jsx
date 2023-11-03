import axios from 'axios';
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Form, Input, Checkbox, Button } from 'antd';

const Product = () => {
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-d6eb9512-989a-4e82-a378-43c986c7833b');

    const createPreference = async () => {
        
        try {
            const response = await axios.post("http://localhost:3001/products/create_preference", {
                description: 'air jordan',
                price: 100,
                quantity: 1,
                currency_id: 'ARS'
            });

            const {id} = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();

        if (id) {
            setPreferenceId(id);
        };
    };

    return (
        <div>
            <div>
                <div>
                    <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/074/983/products/62d3781006afa79e7ef25ebb702c19fd841ac132965d69a4d3065661c486ba851066621-1d0e581bac3e246d4616766831999849-480-0.webp" alt="air jordan" />
                    <h3>air jordan</h3>
                    <p>precio: $100</p>
                    <Button onClick={handleBuy}>Comprar</Button>
                    {preferenceId && <Wallet initialization={{ preferenceId }} />}
                </div>
            </div>
        </div>
    )
};

export default Product;