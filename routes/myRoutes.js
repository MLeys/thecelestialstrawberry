import express from 'express';
const router = express.Router();

/*---------- Public Routes ----------*/
router.get('/', function(req, res){
	res.json({data: 'Hello World'})
});



/*---------- Protected Routes ----------*/


export default router;