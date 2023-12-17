import { connect } from "@/database/mongo.config";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const user = await User.findOne({ email: body.email });
  console.log(user);
  if (user) {
    const result = body.password === user.password;
    if (result) {
      return NextResponse.json(
        {
          status: true,
          message: "Success",
        },
        { status: 200 }
      );
    }
  }
  return NextResponse.json(
    {
      status: false,
      message: "Wrong credentials",
    },
    { status: 400 }
  );
  return NextResponse.json(body, { status: 200 });
}
