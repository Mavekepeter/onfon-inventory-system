import {Router} from 'express'
import { getDashboardMetric } from '../controllers/dashboardContrller'

const router = Router();
router.get("/",getDashboardMetric);

export default router
