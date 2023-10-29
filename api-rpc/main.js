import express from 'express';
import client from './client.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    client.getUsers(null, (error, data) => {
        if (!error) {
            console.log(data.Users);
            res.send(data);
        } else {
            console.error(error);
            res.status(500).send({ msg: error });
        }
    });
});

app.post('/add', (req, res) => {
    const user = req.body;
    client.addUser(user, (error, data) => {
        if (!error) {
            console.log(data);
            res.send({ msg: 'Data added successfully.' });
        } else {
            console.log(error);
            res.status(500).send({ msg: error });
        }
    });
});

app.listen(5555, () => {
    console.log('Server started on 5555.');
});