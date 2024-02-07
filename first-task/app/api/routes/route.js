import toDoDB from "@/models/ToDoData";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, stat } = await request.json();
    console.log("status: ", stat);
    await connectDB();
    await toDoDB.create({ title, description, stat });
    return NextResponse.json({ message: "ToDo Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const todoData = await toDoDB.find();
    return NextResponse.json({ todoData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await toDoDB.findByIdAndDelete(id);
    return NextResponse.json({ message: "ToDo Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
