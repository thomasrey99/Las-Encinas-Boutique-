import "../FormContacts/ContactUs.css"
import { Form, Input, Button, Image, Col, Row } from 'antd'
const { TextArea } = Input;
const ContactUs = () => {

    const ChangeName = (e) => {
        if ((e.target.value).lenght > 12) {
            console.log("excede los12 caracteres, ")
        }
    }
    return (
        <Form className="FormContactUs">
            <div>
                <h2>Quieres obtener nuestros productos en tu tienda?</h2>
                <h3> contáctanos para brindarte más información acerca de nuestros productos y servicios especiales disponibles </h3>
                <Image className="ImageContact" src='.././public/Contact.avif' width={380} height={280} />
            </div>
            <div className="FormInto">
                <label >Nombre:</label>
                <Input name="name"
                    placeholder="Nombre completo"
                    style={{ width: 200, height: 35 }} />
                <label>E-mail:</label>
                <Input placeholder="Correo electronico"
                    style={{ width: 200, height: 35 }} />
                <label>Mensaje:</label>
                <TextArea placeholder="Ingresa aquí tus dudas o solicitud de información"
                    style={{ width: 200, height: 35 }} />
                <Button className="btnGoogleContact ">Enviar mensaje</Button>
            </div>
        </Form>

    )
}

export default ContactUs;