import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

const initUsers = [
    {
        name: 'admin',
        email: process.env.TEST_ADMIN_ACCOUNT,
        password: bcrypt.hashSync(process.env.TEST_ADMIN_PASSWORD, Number(process.env.HASHROUNDS)),
        isAdmin: true,
        isActive: true,
        verifyToken: process.env.TEST_ADMIN_VERIFY
    },
    {
        name: 'user',
        email: process.env.TEST_USER_ACCOUNT,
        verifiedEmail: process.env.TEST_USER_ACCOUNT,
        password: bcrypt.hashSync(process.env.TEST_USER_PASSWORD, Number(process.env.HASHROUNDS)),
        isActive: true,
        verifyToken: process.env.TEST_USER_VERIFY
    }
]

export default initUsers