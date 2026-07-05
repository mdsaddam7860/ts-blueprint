import "dotenv/config";
import express from "express";
import type { Response, Request } from "express";
import { logger } from "./utils/winston.logger.js"
// Remove git from your repo
// remove git from your repo rmdir /s /q .git
// npm install


const app = express();


const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("TS Blueprint");
})


// app.listen(PORT, () => {
//     logger.info(`Server running at http://localhost:${PORT}`);
// })


function serverInit() {
    try {
        // Server is up and running

        app.listen(PORT, () => {
            logger.info(`Server running on PORT:${PORT}`);
            logger.info(`Environment: ${process.env.NODE_ENV}`);
        });

        // init(); // Initialize other services and forget about them
    } catch (error) {
        logger.error("❌ Critical startup failure:", {
            status: error?.status,
            response: error.response?.data,
            method: error?.method,
            url: error?.config?.url,
            message: error.message,
            stack: error?.stack || error,
        });
    }
}

serverInit();

// async function init() {
//     try {
//         // Initialize Hubspot Client
//         try {
//             // const client = getHubspotClient();
//             // logger.info(
//             //   `✅ HubSpot client initialized successfully : ${JSON.stringify(
//             //     client,
//             //     null,
//             //     2
//             //   )}`
//             // );
//             // logger.info(`HubSpot client initialized successfully`);
//         } catch (error) {
//             logger.error("HubSpot client failed to initialize:", error);
//         }
//     } catch (error) {
//         logger.error("Critical startup failure:", error);
//     }
// }
