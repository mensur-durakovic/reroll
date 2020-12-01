import navigationClasses from '../data/navigationClasses.json';

export async function fetchNavigationClasses(){
    //TODO make connection to the REST API in future
    //TODO for now read data from JSON file and return it as simulation
    /* const urlToFetchData = 'some URL for fetching data';
    fetch(urlToFetchData)
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((err) => console.error("An error occurred on fetching game data!")); */
    
    return navigationClasses;
}