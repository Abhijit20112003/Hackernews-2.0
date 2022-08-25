import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";
const bcrypt = require("bcryptjs");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, password2 } = req.body;

  const exists:any = await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (exists) {
    res.status(400).send(JSON.stringify({ message: "User already exists" }));
  }
  else if(password !== password2) {
    res.status(400).send(JSON.stringify({ message: "Passwords do not match" }));
  }
  else {
    let salt:string = await bcrypt.genSalt(10);
    let hashed_password :string = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
        data: {
          email,
          password:hashed_password,
        },
      });
      res.status(201).json(user.email);
  }
};
