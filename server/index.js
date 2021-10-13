import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express()
app.use(bodyParser.json({extended: true, limit: "30mb"}))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors())