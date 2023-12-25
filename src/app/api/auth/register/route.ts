import { connect } from "@/database/mongo.config";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
connect();
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const existingUser = await User.findOne({ email: body.email });

    if (existingUser) {
      return NextResponse.json(
        {
          status: false,
          message:
            "This email is already registered with us. Please try with a different email.",
        },
        { status: 409 } // Conflict
      );
    } else {
      body.password = await bcrypt.hash(body.password, 10);
      const newUser = await User.create(body);

      if (newUser) {
        return NextResponse.json(
          {
            status: true,
            message: "User is registered successfully",
          },
          { status: 201 }
        );
      } else {
        return NextResponse.json(
          {
            status: false,
            message: "Failed to register the user. Please try again later.",
          },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      {
        status: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
