import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const router = express.Router();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node.js Sign-up and Verification API',
            version: '1.0.0',
            description: 'Node.js + MySQL - API with email sign-up, verification, authentication and forgot password'
        },
        servers: [
            {
                url: 'https://backend-repo-node-mysql-auth-api.onrender.com',
                description: 'Production server'
            },
            {
                url: 'http://localhost:4000',
                description: 'Local development server'
            }
        ]
    },
    apis: ['./accounts/*.ts']
};

const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

router.use('/', swaggerUI.serve);
router.get('/', swaggerUI.setup(swaggerDocument));

export default router;