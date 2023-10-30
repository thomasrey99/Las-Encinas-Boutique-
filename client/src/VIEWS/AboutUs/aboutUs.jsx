import React from 'react'
import './aboutUs.css'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import {MdOutlineMailOutline} from 'react-icons/md'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const coders = [
  {
    id: 1,
    fullName: "Cristian Puyo",
    linkAvatar: "/public/cris.jpeg",
    linkedin: " https://www.linkedin.com/in/christian-dustin-puyo-torres-b08082253/",
    github: "#",
    email: "#"
  },
  {
    id: 2,
    fullName: "Mariano Masondo",
    linkAvatar: "/public/Mariano.jpg",
    linkedin: "https://www.linkedin.com/in/mariano-masondo-7026b0254",
    github: "https://github.com/MarianoMasondo",
    email: "nanomason@gmail.com"
  },
  {
    id: 3,
    fullName: "Javier Sosa",
    linkAvatar: "/public/CP.webp",
    linkedin: "https://www.linkedin.com/in/pablo-javier-sosa-179a31195/",
    github: "https://github.com/JavierSosaAdm",
    email: "javier.sosa.1911@mail.com"
  },
  {
    id: 4,
    fullName: "Nahim Mora",
    linkAvatar: "/public/Nah.webp",
    linkedin: "in/fernando-nahim-mora-developer",
    github: "https://github.com/NahimMora",
    email: "nahimprogramming@gmail.com"
  },
  {
    id: 5,
    fullName: "Mateo Leon",
    linkAvatar: "/public/CP.webp",
    linkedin: " https://www.linkedin.com/in/mateo-le%C3%B3n-097b57268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    github: "https://github.com/MateoLeon505",
    email: "mateolt505@gmail.com "
  },
  {
    id: 6,
    fullName: "Thomas Rey",
    linkAvatar: "/public/CP.webp",
    linkedin: "#",
    github: "https://github.com/thomasrey99",
    email: "#"
  },
  {
    id: 7,
    fullName: "Liliana Rosada",
    linkAvatar: "/public/lil.jpeg",
    linkedin: "https://www.linkedin.com/in/liliana-rosada-46114516a",
    github: "https://github.com/LILYCERON",
    email: "lilyceron00@gmail.com"
  }
]

const aboutUs = () => {

  return (
    <div className='container'>
      <h3 style={{fontFamily: 'var(--primary-font)'}}>Un equipo excelente</h3>
      <div>
        <p style={{fontFamily: 'var(--primary-font)', textAlign: 'center', margin: '0px 150px'}}>Nace de la inspiración, pasión y práctica del conocimiento para el
          servicio de cada emprendedor.
          Capacitados y comprometidos con la realización de proyectos, un equipo conformado por 8
          personas con grandes habilidades comunicativas, laborales y sociales.</p>
      </div>
      <div className='cards__container'>
        {coders.map((coder) => {
          return (
            <div key={coder.id} className='card'>
              <img className='card__image' src={`${coder.linkAvatar}`} width="200" height="200" />
              <h5 className='card__text'>{coder.fullName}</h5>
              <p style={{fontFamily: 'var(--primary-font)', textAlign: 'center'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consequatur!</p>
              <div className='card__links'>
                <a href={`${coder.github}`}><GithubOutlined /></a>
                <a href={`mailto:${coder.email}`}><MailOutlined /></a>
                <a href={`${coder.linkedin}`}><LinkedinOutlined /></a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default aboutUs