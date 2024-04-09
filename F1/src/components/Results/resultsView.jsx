import ResultsTable from './resultsTable';
import QualifyingTable from '../Qualifying/qualifyingTable';



const ResultsView = (props) =>{

    return (
        <div>
            <h2>
                Results
            </h2>
            <h3>
                {props.race.name}, Round #{props.race.round}, {props.race.year}, {props.race.date}, {props.race.url}
            </h3>
            <QualifyingTable raceId={props.race.raceId}/>
            <ResultsTable raceId={props.race.raceId}/>
        </div>
    )
}
export default ResultsView;
