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
    return NextResponse.json(
      {
        status: false,
        message:
          "This email is alredy registerd with us, please try with different email",
      },
      { status: 400 }
    );
  } else {
    console.log("ebnter ");
    const result = await User.create(body);
    if (result) {
      return NextResponse.json(
        {
          status: true,
          message: "User is registerd",
        },
        { status: 200 }
      );
    }
  }
  return NextResponse.json(body, { status: 200 });
}
