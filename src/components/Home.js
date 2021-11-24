import React, { useState, useEffect } from 'react';
//API
import API from '../API';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//Components

//Hook

//Image
import noImage from '../images/no_image.jpg';

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchBooks = async () => {
        try{
            setError(false);
            setLoading(true);
            
        } catch (error) {
            setError(true);
        }
    }

    return <div>Home Page</div>;
}