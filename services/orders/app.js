const express = require('express');


const app = express();


app.get('/orders', (req, res) => {
    res.status(200).json({message: "Orders has been fetched successfully!"});
})

app.listen(4002, () => {
    console.log('orders service running on port 4002');
});