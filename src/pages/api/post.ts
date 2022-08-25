import { prisma } from "../../db/client";

const post = async (req: any, res: any) => {
    const { email, password } = req.body;
    const post = await prisma.user.create({
        data: {
            email,
            password
        }
    });
    res.json(post);
}
export default post;