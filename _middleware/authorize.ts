import { expressjwt as jwt } from 'express-jwt';
import config from '../config.json';
import db from '../_helpers/db';

const { secret } = config;

export default function authorize(roles: any[] = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        jwt({ secret, algorithms: ['HS256'] }),
        async (req: any, res: any, next: any) => {
            try {
                const token = req.auth;

                if (!token) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                const account = await db.Account.findByPk(Number(token.sub || token.id));

                if (!account) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                const accountData = account.get({ plain: true });

                if (roles.length && !roles.includes(accountData.role)) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                req.user = {
                    ...token,
                    role: accountData.role,
                    id: accountData.id,
                    ownsToken: (t: any) => false
                };

                const refreshTokens = await db.RefreshToken.findAll({ 
                    where: { accountId: accountData.id } 
                });
                req.user.ownsToken = (t: any) => !!refreshTokens.find((x: any) => x.token === t);
                next();
            } catch(err) {
                next(err);
            }
        }
    ];
}