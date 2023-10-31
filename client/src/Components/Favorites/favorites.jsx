import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Style from '../Card/Card.module.css'

const Favorites = () => {

    const favorites = useSelector(state => state.favorites.favoriteProducts)
    console.log(favorites);

    return(
        <div>
            {favorites.length > 0 ?
                        favorites.map(fav => (
                            <div key={fav.id} className={Style.Container}>
                              <Card key={fav.id} {...fav} />
                              {console.log(fav)}
                            </div>
                          ))
            : <div>
                No hay productos favoritos en este momento
            </div>}
        </div>
    );
}

export default Favorites;