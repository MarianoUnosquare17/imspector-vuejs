import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
const tacticsRouter = Router();

/**
* @openapi
* /Tactics:
*   get:
*     tags: [
*        Tactics
*     ]
*     parameters:
*       - name: map
*         in: query
*         type: string
*         description: filter maps.
*       - name: agent
*         in: query
*         type: string
*         description: filter agents.
*       - name: valorant_account
*         in: query
*         type: string
*         description: filter valorant_accounts.
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No tactic found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Tactic not found" }'
* /map/{mapId}/tactics:
*   post:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No user found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "User not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
* /agent/{agentId}/tactics:
*   post:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No user found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "User not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
* /tactics/{tactic_id}:
*   put:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No tactic found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Tactic not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
* 
*   delete:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No tactic found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Tactic not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
*
 */


tacticsRouter.route("/").get((req, res) => {
    const {
        map,
        agent,
        valorant_account
    } = req.query

    if(valorant_account){
        res.send("Get tactics given the valorant account " + valorant_account)
    } else if(map){
        res.send("Get tactics given the map  " + map)
    } else if(valorant_account){
        res.send("Get tactics given the valorant account " + valorant_account )
    } else if(agent){
        res.send("Get comments given the agent " + agent)
    } else res.send("Get all tactics")
    });
    tacticsRouter.route("map/:mapId/tactics").post(
        [
            check('username')
            .trim()
            .isLength({min: 3})
            .withMessage('Username must be at least 3 characters'),
            check('user_email')
            .trim()
            .isLength({min: 3})
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            .withMessage('Please enter a valid email address'),
            check('user_password')
            .isLength({min: 8, max: 15})
            .withMessage('Password must be at least 8 characters')
            .matches(/\d/)
            .withMessage("Your password should have at least one number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/)
            .withMessage("Your password should have at least one special character"),
            check('valorant_account')
            .trim()
            .isLength({min: 3})
            .withMessage('Please enter a valid valorant account must be at least 3 characters'),
            check('valorant_account')
            .trim()
            .isLength({min: 3})
            .withMessage('Please enter a valid valorant account'),
            check('valorant_tag')
            .trim()
            .isLength({min: 3, max: 4})
            .withMessage('Please enter a valid valorant tag')
            ],
        (req, res) => { res.send("Created tactic for the following map " + req.params.mapId )});
    tacticsRouter.route("agents/:agentId/tactics").post((req, res) => { res.send("Created tactic for the following agent " + req.params.agentId )});
    tacticsRouter.route("/tactics/:tacticId").put((req, res) => { res.send("Updated tactic with the id " + req.params.tacticId )});
    tacticsRouter.route("/tactics/:tacticId").delete((req, res) => { res.send("Deleted tactic with the id" + req.params.tacticId) });


export { tacticsRouter };