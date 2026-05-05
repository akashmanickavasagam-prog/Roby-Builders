import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, phone, email, service, budget, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Roby Builders Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email || undefined,
      subject: `New Enquiry from ${name} — Roby Builders`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e8d5b5;border-radius:8px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#3E1F0E,#6B3A20);padding:28px 32px;">
            <h2 style="margin:0;color:#C9A87C;font-size:22px;letter-spacing:0.04em;">New Enquiry — Roby Builders</h2>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.65);font-size:13px;">Received from the website contact form</p>
          </div>
          <div style="padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;width:36%;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7A5C40;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:14px;color:#2A1508;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7A5C40;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:14px;color:#2A1508;"><a href="tel:${phone}" style="color:#6B3A20;text-decoration:none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7A5C40;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:14px;color:#2A1508;">${email || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7A5C40;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:14px;color:#2A1508;">${service || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7A5C40;">Budget</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e4d0;font-size:14px;color:#2A1508;">${budget || '—'}</td>
              </tr>
            </table>
            ${message ? `
            <div style="margin-top:20px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7A5C40;">Project Details</p>
              <p style="margin:0;font-size:14px;color:#2A1508;line-height:1.7;background:#FAF6EF;padding:14px 16px;border-left:3px solid #C9A87C;">${message.replace(/\n/g, '<br/>')}</p>
            </div>` : ''}
          </div>
          <div style="background:#FAF6EF;padding:16px 32px;border-top:1px solid #e8d5b5;">
            <p style="margin:0;font-size:11px;color:#7A5C40;">Roby Builders · Karaikudi, Tamil Nadu · +91 97916 38957</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
