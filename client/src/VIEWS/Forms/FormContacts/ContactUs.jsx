import style from "./ContactUs.module.css"
import { Form, Input, Button, Image, Col, Row } from 'antd'
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
        <Form className={style.formCont}>
            <div className={style.leftSection}>
                <h2>{t("contactUS.Description1")}</h2>
                <p>{t("contactUS.Description2")}</p>
                <Image src='.././public/Contact.avif' width={380} height={280} />
            </div>
            <div className={style.rigthSection}>
                <h2>Contactanos!</h2>
                <label >{t("contactUS.Name")}</label>
                <Input name="name"
                    placeholder={t("contactUS.NameHolder")}
                    style={{ width: 200, height: 35 }} />
                <label>{t("contactUS.E-mail")}</label>
                <Input placeholder={t("contactUS.E-mailHolder")}
                    style={{ width: 200, height: 35 }} />
                <label>{t("contactUS.Message")}</label>
                <TextArea placeholder={t("contactUS.MessageHolder")}
                    style={{ width: 200, height: 35 }} />
                <Button className="btnGoogleContact ">{t("contactUS.SendMessage")}</Button>
            </div>
        </Form>

    )
}

export default ContactUs;