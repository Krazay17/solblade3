import { io } from "socket.io-client";

export class SolCNet {
    socket = io("https://localhost:8080", {
        transports: ["websocket", "polling"]
    });
    constructor() {
        this.socket.on("connect_error", () => {
            console.log("CONNECTION ERROR");
        })
    }
    connect() {
        this.socket.connect();
    }
}