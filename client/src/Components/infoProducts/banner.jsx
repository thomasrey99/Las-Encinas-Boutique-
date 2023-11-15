import style from "./banner.module.css"
import bombones from "../../../public/bombones.png"
import combo from "../../../public/combo.png"
import huevos from "../../../public/huevos.png"
import pedido from "../../../public/pedido.png"
import Aos from "aos"
import "aos/dist/aos.css"

import {useEffect} from "react"

const Banner = () => {

    useEffect(()=>{
        Aos.init()
    }, [])

  return (
    <section className={style.bannerCont}>
        <h2 className={style.bannerTitle}>Disfrute de las mejores delicias de la region</h2>
        <div className={style.bannerItemsCont}>

            {/*primer banner*/}

            <div data-aos="fade-right" className={style.itemCont}>
                <div className={style.imgCont}>
                    <img src={pedido}/>
                </div>
                <div className={style.textBanner}>
                    <h3>Chocolates a tu Gusto: ¡Crea, Saborea, Disfruta!</h3>
                    <p>Haz tus momentos dulces aún más especiales! Descubre nuestra gama de chocolates artesanales y crea tu propio paraíso de sabor con pedidos personalizados. ¡Convierte tus ideas en exquisitas realidades chocolatosas y haz tu pedido hoy mismo!</p>
                </div>
            </div>

            {/*segundo banner*/}
            
            <div data-aos="fade-left" data-aos-offset="500" data-aos-duration="500" className={style.itemCont}>
                <div className={style.imgCont}>
                    <img src={combo}/>
                </div>
                <div className={style.textBanner}>
                    <h3>Combos Chocolatosos: ¡Encuentra Tu Dulce Equilibrio!</h3>
                    <p>¡Descubre la perfección en cada combinación! Nuestras cajoneras de chocolates artesanales te ofrecen una experiencia única. Deléitate con nuestra selección cuidadosamente elaborada, ¡donde cada mordisco es una explosión de sabor! Encuentra tu combo ideal y sumérgete en un mundo de dulces sensaciones.</p>
                </div>
            </div>

            {/*tercer banner*/}
            
            <div data-aos="fade-right" data-aos-offset="500" data-aos-duration="500" className={style.itemCont}>
                <div className={style.imgCont}>
                    <img src={bombones}/>
                </div>
                <div className={style.textBanner}>
                    <h3>Delicias Tentadoras: Bombones y Barras Artesanales para el Placer Absoluto</h3>
                    <p>¡Dulces placeres en cada bocado! Explora nuestra variedad de bombones y barras de chocolate artesanales. Desde la indulgencia de nuestros exquisitos bombones hasta la satisfacción crujiente de nuestras barras, cada producto está creado para deleitar tus sentidos. Sumérgete en un mundo de tentaciones irresistibles y déjate seducir por la calidad de nuestros chocolates.</p>
                </div>
            </div>

            {/*cuarto banner*/}
            
            <div data-aos="fade-left" data-aos-offset="500" data-aos-duration="500" className={style.itemCont}>
                <div className={style.imgCont}>
                    <img src={huevos}/>
                </div>
                <div className={style.textBanner}>
                    <h3>¡Experimenta la Magia del Chocolate en Cada Bocado! Haz tu Pedido y Endúlzate con Nuestros Deliciosos Huevos Artesanales.</h3>
                    <p>¿Qué estás esperando para deleitar tu paladar con nuestros exquisitos huevos de chocolate? Haz que cada momento sea más dulce y especial con nuestros productos artesanales. ¡Haz tu pedido ahora y deja que la magia del chocolate conquiste tu día!</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Banner