const express = requires('express');

const app = express();

const PORT = 8080;

app.get('*', (req, res) => {
    return res.json({
        msg: 'Sending data'
    })
});

app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
});