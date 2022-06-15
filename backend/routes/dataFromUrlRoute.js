import express from 'express'
const router = express.Router()
import getDataFromUrl from '../controllers/dataFromUrlController.js'

router.route('/').get(getDataFromUrl)
export default router