import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Message from ${name}`,
      text: message,
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          <div style="background: linear-gradient(135deg, #0073e6, #005bb5); padding: 20px; border-radius: 10px 10px 0 0; text-align: center; color: #fff;">
            <h2 style="margin: 0;">🚀 New Contact Message</h2>
          </div>
          
          <div style="background: #fff; padding: 20px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 18px; font-weight: bold; color: #333;">📌 Details:</p>
            
            <p style="font-size: 16px;"><strong>👤 Name:</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #0073e6; text-decoration: none;">${email}</a></p>
    
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0073e6; margin: 15px 0; border-radius: 5px;">
              <p style="margin: 0; font-size: 16px; color: #333;"><strong>📝 Message:</strong></p>
              <p style="color: #555; font-size: 15px;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p style="text-align: center; font-size: 14px; color: #666;">Sent from your website's contact form 📬</p>
          </div>
        </div>
      `,
    });
    

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
