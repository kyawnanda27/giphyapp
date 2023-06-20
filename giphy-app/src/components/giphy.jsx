import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchField from './searchBox';
import GifCard from './gifCard';

const TrendingGiphyApp = () => {
    const [gifsList, setGifsList] = useState([]);

    useEffect(() => {
        loadTrendingGifs();
    }, []);

    const loadTrendingGifs = async () => {
        try{
            //format of http://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY 
            const list = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=8JWy3nY5QIBR19urNori4NgG39huqvKz`);
            setGifsList(list.data.data);
        } catch(error) {
            console.log('Error: ', error)
        }
    };

    const handleSearch = async (searchStr) => {
        try{
            //searchStr.preventDefault();
            console.log(searchStr);
            //format of http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
            const list = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=8JWy3nY5QIBR19urNori4NgG39huqvKz`);
            setGifsList(list.data.data)
        } catch(error) {
            console.log('Error: ', error);
        }
    };

    return(
        <div>
            <h1>Trending Gifs</h1>
            <SearchField onSearch = {handleSearch}/>
            <br></br>
            {gifsList.map((gifs, ind) => {
                //{console.log(gifs);}
                return(
                <GifCard gif = {gifs}/>)

                
            })}
        </div>
    );
};
export default TrendingGiphyApp