import { Router } from "express";
const tacticsRouter = Router();

/**
* @openapi
* /Tactics:
*   get:
*     tags: [
*        Tactics
*     ]
*     parameters:
*       - name: offset
*         in: query
*         type: integer
*         description: The number of items to skip before starting to collect the result set.
*       - name: limit
*         in: query
*         type: integer
*         description: The maximum numbers of items to return.
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "firstName": "Sundar", "lastName": "Pichai", "displayImageUrl": https://thispersondoesnotexist.com/image, "email": sundar.pichai@google.com, "phone": "0800001066", "jobTitle": "CEO", "role": { "id": 1, "description": "Admin" } }, { "id": 2, "firstName": "Matt", "lastName": "Cutts", "displayImageUrl": https://thispersondoesnotexist.com/image, "email": matt.cutts@google.com, "phone": "0800001066", "jobTitle": "Software Dev", "role": { "id": 2, "description": "Sales Rep" } }]'
*       204:
*         description: No Content
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "No Content" }'
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
    tacticsRouter.route("map/:mapId/tactics").post((req, res) => { res.send("Created tactic for the following map " + req.params.mapId )});
    tacticsRouter.route("agents/:agentId/tactics").post((req, res) => { res.send("Created tactic for the following agent " + req.params.agentId )});
    tacticsRouter.route("/tactics/:tacticId").put((req, res) => { res.send("Updated tactic with the id " + req.params.tacticId )});
    tacticsRouter.route("/tactics/:tacticId").delete((req, res) => { res.send("Deleted tactic with the id" + req.params.tacticId) });


export { tacticsRouter };