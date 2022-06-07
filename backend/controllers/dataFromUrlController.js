import express from 'express'
import axios from 'axios'
import asyncHandler from 'express-async-handler'

const mimeType = ['mime_types=gif', 'mime_types=jpg,png']

export const getDataFromUrl = asyncHandler(async (req, res) => {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?${mimeType[Math.floor(Math.random() * 2)]}`, {
        headers: {
            "x-api-key": process.env.REACT_APP_API_KEY
        }
    });
    res.status(200).send(data);
})
