import Express from "express";

const APP_PORT = 3000;
const app = Express();

app.use(Express.static(__dirname + "/../../dist"));

app.get("*", (req: Express.Request, res: Express.Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset='utf-8'>
	    <meta name='viewport' content='width=device-width,initial-scale=1'>
      <script defer src="/client.bundle.js"></script>
    </head>
    <body>
    </body>
    </html>
  `);
});

app.listen(APP_PORT, () => {
  console.log(`listening on ${APP_PORT}`);
});
