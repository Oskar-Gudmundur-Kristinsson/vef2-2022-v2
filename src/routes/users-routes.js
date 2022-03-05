import express from 'express';
import { catchErrors } from '../lib/catch-errors.js';
import bcrypt from 'bcrypt';
import xss from 'xss';
import jsonwebtoken from 'jsonwebtoken';
import query from '../lib/db.js';
import { body, validationResult } from 'express-validator';

export const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
    async function listUsers() {
        if(false){//!checkAuth){
            res.sendStatus(401);
        }else{
            let usrs = await query("SELECT username FROM users", []);
            let ret = []
            usrs.rows.forEach((item)=> {
                console.log(item)
                ret.push(item.username);
            })
            res.render("users.ejs", { users : ret});
        }
    }
    listUsers();
    }
);

usersRouter.get('/:id', (req, res) => {
    async function listUsers() {
        const { id } = req.params;
        if(false){//!checkAuth){
            res.sendStatus(401);
        }else{
            let usrs = await query("SELECT username FROM users WHERE id = $1", [id]);
            res.render("user.ejs", { users : usrs.rows[0].username, id:id});
        }
    }
    listUsers();
    }
);

usersRouter.post('/register', (req, res) => {
    async function createUser() {
        if(req.body.password == null){
            req.sendStatus(401)
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        const xssSanitizationMiddleware = [
            body('username').customSanitizer((v) => xss(v))
        ];
        const sanitizationMiddleware = [
            body('username').trim().escape()
        ];

        let usrs = await query("SELECT username FROM users WHERE id = $1", [id]);
        res.render("register.ejs", { users : usrs.rows[0].username, id:id});
    }
    createUser();
    }
);


function checkAuth(req, res, next){
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

function isAdmin(){
    //run query to check if admin 
}