const auth = (req, res, next) => {
    const { user } = req.query
    if ( user === 'rahul') {
        req.user = { name: 'rahul', id: 1 }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }

}

module.exports = auth