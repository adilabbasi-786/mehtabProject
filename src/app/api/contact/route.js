import { NextResponse } from "next/server";
import mongoose from "mongoose";
import sgMail from "@sendgrid/mail";

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to database");
  }
};

// Define Contact schema and model directly here to avoid issues
let Contact;
try {
  Contact = mongoose.model("Contact");
} catch {
  const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String },
    smsConsent: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  });
  Contact = mongoose.model("Contact", contactSchema);
}

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    await connectDB();

    // Parse request body
    const body = await request.json();
    const { name, email, phone, message, smsConsent } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, message, smsConsent });
    await newContact.save();

    // Send email notification with improved error handling
    try {
      const msg = {
        to: process.env.EMAIL, // Admin email from .env
        from: process.env.EMAIL, // Must be a verified sender in SendGrid
        subject: "New Contact Form Submission",
        text: `You received a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${
          message || "N/A"
        }\nSMS Consent: ${smsConsent ? "Yes" : "No"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
          <p><strong>SMS Consent:</strong> ${smsConsent ? "Yes" : "No"}</p>
        `,
      };

      const [response] = await sgMail.send(msg);
      console.log("SendGrid response status:", response?.statusCode);

      if (response?.statusCode >= 200 && response?.statusCode < 300) {
        console.log("Email sent successfully");
      } else {
        console.warn("Email may not have been sent properly");
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // Continue execution - we still want to return success even if email fails
      // The form data is already saved to the database
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
