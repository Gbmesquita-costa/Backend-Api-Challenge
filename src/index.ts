import { config } from "dotenv"

config()

import express, { NextFunction, Request, Response } from "express"
import cors from "cors"

import "express-async-errors"
import "reflect-metadata"
import "./shared/container"
import "./database"

import { router } from "./routes/index"
import { AppError } from "./errors/AppError"

const app = express()
const localhost = 3333

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.text())

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(router)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(localhost, () => {
    console.log(`⚡ Server is running on host: ${localhost}`)
})