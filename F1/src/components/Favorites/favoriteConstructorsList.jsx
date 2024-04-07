import FavoriteConstructorsListItem from './favoriteConstructorsListItem';

const FavoriteConstructorsList = (props) => {
    return(
        <div>
            <h2>
                Constructors
            </h2>
            <ul>
                <FavoriteConstructorsListItem/>
            </ul>
        </div>
    )
}
export default FavoriteConstructorsList;
