import { useEffect, useState } from 'react';

const Header = (props) => {

    const years = [];
    for (let year = 2000; year <= 2023; year++) {
        years.push(year);
    }

    const fillSelector = (year) => {
        return (
            <option key={year}>
                {year}
            </option>
        )
    }

    const [selectedYear, setYear] = useState(null);

    const yearChange = (event) => {
        console.log(event.target.value);
        setYear(event.target.value);
    };

    useEffect( () => {
        if( selectedYear != null){
            const url = `https://four513-asg1.onrender.com/api/races/season/${selectedYear}`;
            console.log("fetching … here to check if I've gone infinite");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { props.seasonData(data);}) 
        }
    }, [selectedYear] );

    return (
            <div className="header">
                <select onChange={yearChange}>
                    <option>
                        Selector
                    </option>
                    {years.map((y) => fillSelector(y))}

                </select>
                <h2>
                    Header Title
                </h2>
                <button>
                    Favorites
                </button>
                <button>
                    About
                </button>
            </div>
       )
}
export default Header;
