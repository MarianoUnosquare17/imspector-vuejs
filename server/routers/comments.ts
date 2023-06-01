import { Router } from "express";

const commentRouter = Router();
/**
* @openapi
* /Comments:
*   get:
*     tags: [
*        Gomments
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

commentRouter.route("/").get((req, res) => {
    const {
        valorant_account,
        map,
        matchId
    } = req.query

    if(valorant_account){
        res.send("Get comments given the valorant account " + valorant_account)
    } else if(map){
        res.send("Get comments given the map  " + map)
    } else if(valorant_account && map){
        res.send("Get comments given the valorant account and map " + valorant_account + map)
    } else if(matchId){
        res.send("Get comments given the match id " + matchId)
    } else res.send("Get all comments")
    });
commentRouter.route("/tactics/:commentId").get((req, res) => { res.send("Get comment details given the id " + req.params.commentId ) });
commentRouter.route("/").post((req, res) => { res.send("Created comment" )});
commentRouter.route("/tactics/:commentId").put((req, res) => { res.send("Updated comment with the id " + req.params.commentId )});
commentRouter.route("/tactics/:commentId").delete((req, res) => { res.send("Deleted comment with the id" + req.params.commentId) });

export { commentRouter };
