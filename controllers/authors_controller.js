
const getAuthors = (req, res) => {
    res.send('get authors')
}

const createAuthors = (req, res) => {
    console.log(req.body);
    res.send('create authors')
}

module.exports = {createAuthors, getAuthors}