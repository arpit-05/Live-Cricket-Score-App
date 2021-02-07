const API_KEY="";
export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`
    return fetch(url)
    .then(response=>response.json())
    .catch(error=>{console.log("Error",error)})
}
//get match details
export const getMatchDeatils=(id)=>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`
    return fetch(url).then(response=>response.json())
    .catch(error=>{console.log("Error :"+ error)})
}
