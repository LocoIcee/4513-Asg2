import ResultsListItem from './resultsListItem';

const ResultsList = (props) => {
    return (
        <div>
            <h2>
                Results
            </h2>
            <img src="image for 1st"/>

            <img src="image for 2nd"/>
                
            <img src="image for 3rd"/>
            <ol>
                <ResultsListItem/>
            </ol>
        </div>
    )
}
export default ResultsList;
