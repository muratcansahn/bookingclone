import express from "express";
const router = express.Router();
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("You are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("You are admin and you can delete any user");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

////DELETE
router.delete("/:id", verifyUser, deleteUser);

///GET
router.get("/:id", verifyUser, getUser);

///GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
