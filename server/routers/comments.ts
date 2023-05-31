import { Router } from "express";

const commentRouter = Router();

commentRouter.route("/comments").get((req, res) => {
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
commentRouter.route("/comments").post((req, res) => { res.send("Created comment" )});
commentRouter.route("/tactics/:commentId").put((req, res) => { res.send("Updated comment with the id " + req.params.commentId )});
commentRouter.route("/tactics/:commentId").delete((req, res) => { res.send("Deleted comment with the id" + req.params.commentId) });

export { commentRouter };
