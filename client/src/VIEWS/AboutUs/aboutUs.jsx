import React from 'react'
import './aboutUs.css'

const coders = [
  {
    id: 1,
    fullName: "Cristian Puyo",
    linkAvatar: "/public/CP.webp",
    linkedin: "#",
    instagram: "#",
    github: "#",
    email: "#"
  },
  {
    id: 2,
    fullName: "Mariano Masondo",
    linkAvatar: "/public/Mariano.jpg",
    linkedin: "#",
    instagram: "#",
    github: "#",
    email: "#"
  },
  {
    id: 3,
    fullName: "Javier Sosa",
    linkAvatar: "/public/CP.webp",
    linkedin: "#",
    instagram: "#",
    github: "#",
    email: "#"
  },
  {
    id: 4,
    fullName: "Nahim Mora",
    linkAvatar: "/public/Nah.webp",
    linkedin: "#",
    instagram: "#",
    github: "#",
    email: "#"
  },
  {
    id: 5,
    fullName: "Mateo",
    linkAvatar: "/public/CP.webp",
    linkedin: "#",
    instagram: "#",
    github: "#",
    email: "#"
  },
  {
    id: 6,
    fullName: "Thomas Rey",
    linkAvatar: "/public/CP.webp",
    linkedin: "#",
    instagram: "#",
    github: "#",
    email: "#"
  },
  {
    id: 7,
    fullName: "Liliana Rosada",
    linkAvatar: "/public/lil.webp",
    linkedin: "#",
    instagram: "#",
    github: "#",
    email: "#"
  }
]

const aboutUs = () => {

  return (
    <div>
      <h3>Un equipo excelente</h3>
      <div>
        <p>Nace de la inspiración, pasión y práctica del conocimiento para el
          servicio de cada emprendedor.
          Capacitados y comprometidos con la realización de proyectos, un equipo conformado por 8
          personas con grandes habilidades comunicativas, laborales y sociales.</p>
      </div>
      <div className='cards__container'>
        {coders.map((coder) => {
          return (
            <div key={coder.id} className='card'>
              <img className='card__image' src={`${coder.linkAvatar}`} width="300" height="200" />
              <h5 className='card__text'>{coder.fullName}</h5>
              <a href={`${coder.github}`}>GitHub</a>
              <a href={`${coder.instagram}`}>Instagram</a>
              <a href={`${coder.email}`}>Email</a>
              <a href={`${coder.linkedin}`}>LinkedIn</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default aboutUs