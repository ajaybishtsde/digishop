import { connect } from "@/database/mongo.config";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const user = await User.findOne({ email: body.email });
    if (user) {
      const isPasswordMatch = body.password === user.password;
      if (isPasswordMatch) {
        return NextResponse.json(
          {
            status: true,
            message: "Success",
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            status: false,
            message: "Wrong credentials",
          },
          { status: 401 } // Unauthorized
        );
      }
    } else {
      // If the user does not exist
      return NextResponse.json(
        {
          status: false,
          message: "User not found",
        },
        { status: 404 } // Not Found
      );
    }
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      {
        status: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
