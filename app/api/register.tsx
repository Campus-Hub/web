import fs from 'fs';
import path from 'path';
import {
    NextApiRequest,
    NextApiResponse
} from 'next';

type UserData = {
    username: string;
    email_addr: string;
    password: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { user_name, email_addr, password } = req.body;

        // 确保用户名和密码不为空
        if (!user_name || !email_addr || !password) {
            return res.status(400).json({ message: 'Username, email address and password are required' });
        }

        // 读取当前的用户数据
        const filePath = path.join(process.cwd(), 'data', 'user_data.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const users = JSON.parse(fileData);

        // 检查用户名是否已存在
        if (users.some((user: UserData) => user.username === user_name)) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        // 添加新用户
        users.push({ user_name, email_addr, password }); // 注意：实际应用中应对密码进行加密处理
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

        res.status(201).json({ message: 'User registered successfully' });
    } else {
        // 不支持除 POST 外的请求方法
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}