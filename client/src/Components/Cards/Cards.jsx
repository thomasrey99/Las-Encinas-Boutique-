import Card from "../Card/Card"

const Cards = ({products}) => {

  return (
    <div>
        {products.map(c => (
        <Card key={c.name} name={c.name} image={c.image} price={c.price}
        />))}
    </div>
  )
}

export default Cards