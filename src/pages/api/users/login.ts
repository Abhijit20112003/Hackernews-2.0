import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  const user: any = await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (!user) {
    res.status(400).send(JSON.stringify({ message: "User does not exist" }));
  } else if (!bcrypt.compareSync(password, user.password)) {
    res.status(400).send(JSON.stringify({ message: "Incorrect Passowrd" }));
  } else {
    // create a jwt token
    res.status(200).json([user.username, user.email]);
  }
};
