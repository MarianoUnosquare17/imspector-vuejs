import { Router } from "express";


const authenticationRouter = Router()
const authenticationController = require('../controllers/authentication')

authenticationRouter.route('/').post(authenticationController.authenticate)



export {authenticationRouter}