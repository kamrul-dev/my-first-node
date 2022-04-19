const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

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
    res.send(users)
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.listen(port, () => {
    console.log('Listening to port', port);
});