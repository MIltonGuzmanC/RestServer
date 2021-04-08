const { Router, response } = require('express');
const { userGet, userPost, userPut, userDelete, userPatch } = require('../controllers/user');
const router = Router();

router.get('/',userGet);

router.post('/',userPost);

router.put('/:id',userPut);

router.patch('/',userPatch)

router.delete('/',userDelete);


module.exports = router;
