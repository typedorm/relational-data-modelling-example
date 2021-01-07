import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

const router = Router();
const { OK } = StatusCodes;

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', (req: Request, res: Response) => {
  res.status(OK).json({});
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
