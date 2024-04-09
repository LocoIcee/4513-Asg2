import ResultsList from './resultsList';
import QualifyingList from '../Qualifying/qualifyingList';



const ResultsView = (props) =>{

    return (
        <div>
            <h2>
                Results
            </h2>
            <h3>
                {props.race.name}, Round #{props.race.round}, {props.race.year}, {props.race.date}, {props.race.url}
            </h3>
            <QualifyingList raceId={props.race.raceId}/>
            <ResultsList raceId={props.race.raceId}/>
        </div>
    )
}
export default ResultsView;
