const router = require('./routes/index');
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());

app.use(cors())
//app.use(cors({
//   origin: "http://localhost:19006",
//}))

app.use('/api/v1/', router);

app.listen(port, () => console.log(`running server in port: ${port}`))
//192.168.43.27
