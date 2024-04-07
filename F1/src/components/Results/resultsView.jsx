import ResultsList from './resultsList';
import QualifyingList from '../Qualifying/qualifyingList';

const ResultsView = (props) =>{
    return (
        <div>
            <h2>
                Results
            </h2>
            <h1>
                Race Information
            </h1>
            <QualifyingList/>
            <ResultsList/>
        </div>
    )
}
export default ResultsView;
