import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const router = express.Router();

const swaggerDocument = YAML.load(path.join(process.cwd(), 'swagger.yaml'));

router.use('/', swaggerUI.serve);
router.get('/', swaggerUI.setup(swaggerDocument));

export default router;