import dbConncet from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVarificationEmail } from "@/helpers/sendVarificationEmail";


export async function POST(request:Request) {
    await dbConncet();
    try {
        const {username, email,password} = await request.json()
    } catch (error) {
        console.error('Error registring user',error)
        return Response.json({
            success: false,
            message: "Error registring user"
        },
        {
            status: 500
        }
    )
    }
}
