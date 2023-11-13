import "../FormContacts/ContactUs.css"
import {Form,Input,Button,Image, Col, Row} from 'antd'
const { TextArea } = Input;
const ContactUs = () => {
  
    const ChangeName= (e) => {
        if((e.target.value).lenght > 12){
            console.log("excede los12 caracteres, ")
        }
    }
  return (
    <Form className="FormContactUs"> 
    <div>
        <p className="FormContactUs">Deja aquí tus dudas</p>
        <Image  className="ImageContact" src='.././public/Contact.avif' width={380} height={280} />
    </div>
    <div  className="FormInto">
        <label >Nombre:</label>
        <Input onChange = {ChangeName} style={{ width: 150, height:35}}/>
        <label>E-mail:</label>
        <Input style={{ width: 150, height:35}}/>
        <label>Mensaje:</label>
        <TextArea style={{ width: 150, height:35}}/>
        <Button>Enviar mensaje</Button>
    </div>
    </Form>
      
  )
}

export default ContactUs;