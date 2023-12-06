const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

router.get("/login", AuthController.login);
router.post("/login", AuthController.loginPost);
router.get("/register", AuthController.register);
router.post('/register', AuthController.registerPost);
router.get('/logout', AuthController.logout)
router.get('/servicos',AuthController.ShowServicos)

module.exports = router