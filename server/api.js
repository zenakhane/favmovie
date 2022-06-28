const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


module.exports = function (app, db) {
    app.post('/api/posts', verifyToken, async function (req, res) {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({
                    message: 'Post created...',
                    authData
                })
            }
        })

    });
    app.post('/api/login', async function (req, res) {
        try {
            const { username, password } = req.body

            const users = await db.manyOrNone(`select * from users `)
            console.log(username)
            res.json({
                users
            })
        } catch (error) {
            console.log(error);
            res.json({ error })
        }
    });

    app.post('/api/signup', async function (req, res) {
        try {
            const { username, password } = req.body

            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt);

            const userN = `insert into users (username,password) values ($1,$2) `
            await db.manyOrNone(userN, [username, hashpassword]),
                username

                res.json({
                  status:  "success"
                })
        } catch (error) {
            res.json(error.message)
        }
    })


    app.post('/api/playlist', async function (req, res) {
        try {
            const { user, password } = req.body
            const users = await db.manyOrNone(`select * from favmovie `)
            console.log(user)
            res.json({
                users

            })
        } catch (error) {
            console.log(error);
            res.json({ error })
        }
    });

    function verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403)
        }
    }
}