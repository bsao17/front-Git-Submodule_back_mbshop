import {Request, Response} from "express";
import express from "express";

export default class Server {

    readonly port: number

    constructor(port: number) {
        this.port = port
    }

    start(){
        const app = express()
        app.get('/', (req: Request, res: Response)=>{
            res.send("hello world")
        })
        app.listen(this.port, ()=>{
            console.log("server démarré !")
        })
    }
}