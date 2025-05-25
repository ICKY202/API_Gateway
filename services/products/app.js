const express = require('express');


const app = express();

app.get('/products', (req, res) => {
    res.status(200).json({message: "Products has been fetched successfully!"});
})

app.listen(4000, () => {
    console.log('products service running on port 4000');
});