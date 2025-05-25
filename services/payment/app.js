const express = require('express');


const app = express();

app.get('/payments', (req, res) => {
    res.status(200).json({message: "Payment has been done successfully!"});
})
app.listen(4001, () => {
    console.log('payment service running on port 4001');
});