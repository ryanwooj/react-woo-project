import express from 'express';
import account from './account';

const router = express.router();
router.use('/account', account);

export default router;
