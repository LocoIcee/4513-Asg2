import FavoriteDriversList from './favoriteDriversList';
import FavoriteConstructorsList from './favoriteConstructorsList';
import FavoriteCircuitsList from './favoriteCircuitsList';

const FavoritesView = (props) => {
    return(
        <div>
            <h2>
                Favorites
            </h2>
            <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                Empty Favorites
            </button>
            <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
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
