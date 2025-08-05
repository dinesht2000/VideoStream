import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { acceptFriendRequest, getFriendRequests, getMyFriends, getOutGoingFriendReq, getRecommendedUsers, sendFriendRequest } from "../controllers/userController.js";

const router=express.Router();

//this applies auth middleware to all routes
router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);
router.post("/friend-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept",acceptFriendRequest);
router.get("/friend-requests",getFriendRequests);
router.get("/outgoing-friend-requests",getOutGoingFriendReq);





export default router;