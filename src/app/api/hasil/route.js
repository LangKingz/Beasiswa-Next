import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Berhasil Mendapatkan Data",
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
  } catch (error) {}
};
