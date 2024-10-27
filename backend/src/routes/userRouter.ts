import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('List of users');
});

// Export the router
export default router;
