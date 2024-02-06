import connectDB from "@/utils/connectDB";
import toDoDB from "@/models/ToDoData";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const {
      new_title: title,
      new_description: description,
      new_status: status,
    } = request.json();
    await connectDB();
    await toDoDB.findByIdAndUpdate(id, { title, description, status });
    return NextResponse.json({ message: "ToDo Editted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const data = await toDoDB.findById({ _id: id });
    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
