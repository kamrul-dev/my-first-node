const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('I can Code Node Now Yayyyy!')
});

const users = [
    { id: 1, name: 'Kamrul', email: 'kamrulprl@gmail.com', phone: '215653621' },
    { id: 2, name: 'Hasan', email: 'Hasan@gmail.com', phone: '215653621' },
    { id: 3, name: 'Babu', email: 'Babu@gmail.com', phone: '215653621' },
    { id: 4, name: 'Ratul', email: 'Ratul@gmail.com', phone: '215653621' },
    { id: 5, name: 'Nayem', email: 'Nayem@gmail.com', phone: '215653621' },
    { id: 6, name: 'Abdullah', email: 'Abdullah@gmail.com', phone: '215653621' },
    { id: 7, name: 'Abuilla', email: 'Abuilla@gmail.com', phone: '215653621' },
]

app.get('/users', (req, res) => {
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {

        res.send(users)
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('rquest', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});

app.get('/fruits/mango/fazzle', (req, res) => {
    res.send('sour sound fazzle flavor')
});

app.listen(port, () => {
    console.log('Listening to port', port);
});