import { NextRequest,NextResponse } from "next/server";
const jwt = require('jsonwebtoken')



export default function jwtMiddleware(req: NextRequest) {
    const { headers } = req;
    const token = headers.get("authorization");
    if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req = decoded;
    }
    return NextResponse.next();
}