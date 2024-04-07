import FavoriteCircuitsListItem from './favoriteCircuitsListItem';

const FavoriteCircuitsList = (props) => {
    return(
        <div>
            <h2>
                Circuits
            </h2>
            <ul>
                <FavoriteCircuitsListItem/>
            </ul>
        </div>
    )
}
export default FavoriteCircuitsList;
