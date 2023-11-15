import {NextResponse} from "next/server";
import {headers} from "next/headers";

// GET
export async function GET(req, res) {
    // Data caught by Query Params (String)
    const {searchParams} = new URL(req.url);
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    return NextResponse.json({status: "success", message: "GET Method", data: {name, age}});
}

// POST
export async function POST(req, res) {
    // Data caught by Body (JSON Types)
    const JSONBody = await req.json();
    return NextResponse.json({status: "success", message: "POST Method", data: JSONBody, firstName: JSONBody['fname']});
}

// PUT
export async function PUT(req, res) {
    // Data caught by Form Data (File & Text)
    const FORMDATA = await req.formData();
    const name = FORMDATA.get('name');
    const age = FORMDATA.get('age');
    return NextResponse.json({status: "success", message: "PUT Method", data: {name, age}});
}

// PATCH
export async function PATCH(req, res) {
    // Data caught by headers
    const headerList = headers();
    const token = headerList.get("token");
    return NextResponse.json({status: "success", message: "PATCH Method", data: token});
}

// DELETE
export async function DELETE(req, res) {
    // Data caught by cookie
    const Cookie = req.cookies.get('Cookie_1');
    return NextResponse.json({status: "success", message: "DELETE Method", data: Cookie});
}