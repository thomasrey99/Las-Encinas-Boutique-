import "../FormContacts/ContactUs.css"
import { useState } from "react";
import { Form, Input, Button, Image, Flex } from 'antd'
const { TextArea } = Input;



const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        message: '',
    });

    const [errors, setErrors] = useState({

    });

    const validation = (input, { field: name }) => {
        console.log('input', input)
        console.log('name', name)
        let errors = {}
        const nameValidate = /^[a-zA-ZñÑ\s]+$/
        const mailValidate = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/

        if (name === "name" && nameValidate.test(input) !== true) {
            errors[name] = "Ingrese solo caracteres alfabéticos"
        } else if (input.length > 25 && name === "name") {
            errors[name] = "Excede los 25 caracteres, su msm no será enviado "
        }

        if (name === "mail") {
            if (input.length > 15 && !mailValidate.test(input)) {
                errors[name] = "Debe llevar @ y extension correspondiente como .com o .co "
            }
        } else if (input.length > 50 && name === "mail") {
            errors[name] = "Excede los 50 caracteres"
        }

        if (name === "message") {
            if (input.length > 150) {
                errors[name] = "No debe exceder 150 caracteres"
            }
        } else if (input.length > 50 && name === "mail") {
            errors[name] = "Excede los 50 caracteres"
        }

        return errors


    }
    const handleInputChange = async (name, value) => {
        console.log("entrando al inputChang", value)
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors(
            {
                ...errors,
                [name.field]: validation(value, name).name
            }
        )
        console.log('errors', errors)
        if (Object.keys(errors).length === 0 || Object.keys(errors) === undefined) {
            return Promise.resolve();
        }
        return errors
    };

    const onClickMail = (values) => {
        console.log('values', values)
    }

    return (
        
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onClickMail}>
                <div>
                    <h2>Quieres obtener nuestros productos en tu tienda?</h2>
                    <h3> contáctanos para brindarte más información acerca de nuestros productos y servicios especiales disponibles </h3>
                    <Image className="ImageContact" src='/Contact.avif' width={380} height={280} />
                </div>
                <Form.Item
                    label="Nombre"
                    placeholder="Nombre completo"
                    name="name"
                    hasFeedback
                    validateFirst
                    rules={[{ validator: handleInputChange }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    placeholder="Correo electronico"
                    name="mail"
                    rules={[{ required: true, message: 'Ingrese un correo electronico!' }]}>
                    <Input />
                    {errors && errors.message}
                </Form.Item>
                <TextArea
                    label="message"
                    name="message"
                    placeholder="Ingresa aquí tus dudas o solicitud de información"
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    style={{ width: 380, height: 75 }} />
                {errors && errors.message}
                <Button className="btnGoogleContact " htmlType="submit">Enviar mensaje</Button>
            </Form>

    )
}

export default ContactUs;