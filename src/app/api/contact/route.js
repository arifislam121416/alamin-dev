import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: "AL AMIN Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],

      // Visitor's email
      replyTo: email,

      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="
          max-width: 650px;
          margin: 0 auto;
          padding: 30px;
          font-family: Arial, sans-serif;
          background: #f8fafc;
          border-radius: 20px;
        ">

          <h1 style="
            margin-bottom: 25px;
            color: #0891b2;
          ">
            New Message from AL AMIN.dev
          </h1>

          <div style="
            padding: 25px;
            background: #ffffff;
            border-radius: 15px;
          ">

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject}
            </p>

            <hr style="
              margin: 20px 0;
              border: none;
              border-top: 1px solid #e2e8f0;
            " />

            <p>
              <strong>Message:</strong>
            </p>

            <p style="
              color: #475569;
              line-height: 1.8;
              white-space: pre-line;
            ">
              ${message}
            </p>

          </div>

          <p style="
            margin-top: 20px;
            color: #64748b;
            font-size: 13px;
          ">
            This message was sent from your AL AMIN.dev portfolio contact form.
          </p>

        </div>
      `,
    });

    // Resend error
    if (error) {
      console.error("Resend Error:", error);

      return Response.json(
        {
          success: false,
          message: "Failed to send message. Please try again.",
        },
        { status: 500 }
      );
    }

    // Success
    return Response.json(
      {
        success: true,
        message: "Message sent successfully!",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}