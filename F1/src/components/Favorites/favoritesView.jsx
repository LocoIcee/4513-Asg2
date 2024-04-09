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
            <table>
                <tbody>
                    <tr>
                        <td><FavoriteDriversList/></td>
                        <td><FavoriteConstructorsList/></td>
                        <td><FavoriteCircuitsList/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default FavoritesView;
