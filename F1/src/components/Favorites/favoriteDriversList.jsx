import FavoriteDriversListItem from './favoriteDriversListItem';

const FavoriteDriversList = (props) => {
    return(
        <div>
            <h2>
                Drivers
            </h2>
            <ul>
                <FavoriteDriversListItem/>
            </ul>
        </div>
    )
}
export default FavoriteDriversList;
