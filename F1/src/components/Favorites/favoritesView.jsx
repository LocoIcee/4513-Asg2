import FavoriteDriversList from './favoriteDriversList';
import FavoriteConstructorsList from './favoriteConstructorsList';
import FavoriteCircuitsList from './favoriteCircuitsList';

const FavoritesView = (props) => {
    return(
        <div>
            <h2>
                Favorites
            </h2>
            <button>
                Empty Favorites
            </button>
            <button>
                Close
            </button>
            <FavoriteDriversList/>
            <FavoriteConstructorsList/>
            <FavoriteCircuitsList/>
        </div>
    )
}
export default FavoritesView;
