import axios from 'axios';
import { useState, useRef, useEffect } from 'react'
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Form, Input, Checkbox, Button } from 'antd';
import emailjs from '@emailjs/browser'
import mercadopago from 'mercadopago';
import { MercadoPagoResponse } from 'mercadopago';
import { json, useLocation } from 'react-router-dom';
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

const Product = () => {
    const [preferenceId, setPreferenceId] = useState(null);
    
    /*It is for handleAdminMail */
    const refTemplate = useRef();
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const status = searchParams.get('status')
    
    useEffect(() => {
        if (status === 'approved') {
            handleAdminMail()
        }
    }, [status])
    /*----------------------------------------- */

    initMercadoPago('TEST-d6eb9512-989a-4e82-a378-43c986c7833b');

    const createPreference = async () => {


        try {
            const response = await axios.post(`${URL_SERVER}/products/create_preference`, {
                description: 'air jordan',
                price: 100,
                quantity: 1,
                currency_id: 'ARS'
            });
            // console.log('response.data', response.data)
            const { id } = response.data.id;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async (event) => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        };

    };


    const handleAdminMail = () => {
        // console.log('init email')
        const serviceId = "service_zigdlws"
        const templateAdminId = "template_8gadd5r"
        const templateClientId = "template_gs77yab"

        const apikey = "jYr3TGnr-3SdDMbpq"

        emailjs.send("service_zigdlws", "template_8gadd5r", {
            admin_name: "Admin encinas boutique",
        }, "jYr3TGnr-3SdDMbpq")
            .then(response => { console.log('SUCCESS!', response.status, response.text); })
            .catch(err => { console.log('FAILED...', err); })

        emailjs.send("service_zigdlws", "template_gs77yab", {
            user_name: "usuario",
        }, "jYr3TGnr-3SdDMbpq")
            .then(response => { console.log('SUCCESS!', response.status, response.text); })
            .catch(err => { console.log('FAILED...', err); })
    }

    return (
        <div>
            <div>
                <div>
                    <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/074/983/products/62d3781006afa79e7ef25ebb702c19fd841ac132965d69a4d3065661c486ba851066621-1d0e581bac3e246d4616766831999849-480-0.webp" alt="air jordan" />
                    <h3>air jordan</h3>
                    <p>precio: $100</p>
                    <Button onClick={handleBuy}>Comprar</Button>
                    {preferenceId && <Wallet initialization={{ preferenceId }} customization={handleAdminMail} />}

                </div>
            </div>
        </div>
    )
};


export default Product;