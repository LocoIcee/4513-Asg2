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
            console.log("fetching season");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { props.seasonData(data);})
            .catch(error => {
                console.error('Error fetching season:', error);
            });
        }
    }, [selectedYear] );

    return (
            <div className="header">
                {/*
                 <h2>
                    Header Title
                </h2>*/}
                <select onChange={yearChange}>
                    <option>
                        Year
                    </option>
                    {years.map((y) => fillSelector(y))}

                </select>
               
                <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                    Favorites
                </button>
                <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                    About
                </button>
            </div>
       )
}
export default Header;
