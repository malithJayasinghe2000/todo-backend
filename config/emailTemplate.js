

export const PASSWORD_RESET_TEMPLATE = (otp) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Password Reset</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
      }
      .container {
        padding: 20px;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
      }
      .header {
        background-color: #4a90e2;
        color: white;
        padding: 15px;
        text-align: center;
        border-radius: 5px 5px 0 0;
        margin: -20px -20px 20px;
      }
      .otp-container {
        background-color: #f8f9fa;
        border: 1px dashed #ced4da;
        border-radius: 5px;
        padding: 15px;
        text-align: center;
        margin: 20px 0;
      }
      .otp {
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 5px;
        color: #4a90e2;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #777;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Password Reset</h1>
      </div>
      <p>Hello,</p>
      <p>We received a request to reset your password. Please use the following One-Time Password (OTP) to complete the process:</p>
      
      <div class="otp-container">
        <div class="otp">${otp}</div>
      </div>
      
      <p>This OTP will expire in <strong>15 minutes</strong>.</p>
      <p>If you did not request a password reset, please ignore this email or contact support if you have concerns.</p>
      
      <p>Best regards,<br>Todo-Auth Team</p>
      
      <div class="footer">
        <p>This is an automated message, please do not reply to this email.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};