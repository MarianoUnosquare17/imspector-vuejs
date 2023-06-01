import { Router } from "express";

/**
* @openapi
* /Users:
*   get:
*     tags: [
*        Users
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


const userRouter = Router();
userRouter.route("/").get((req, res) => { res.send("Get all users") });
userRouter.route("/:userId").get((req, res) => { res.send("Get Single User" + req.params.userId) });
userRouter.route("/").post((req, res) => { res.send("Create User") });
userRouter.route("/:userId").put((req, res) => { res.send("Update User" + req.params.userId) });
userRouter.route("/:userId").delete((req, res) => { res.send("Delete User" + req.params.userId) });

export { userRouter };
