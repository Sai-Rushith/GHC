const grannyOtpTemplate = (otp, expiryMinutes = 5) => {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Seoul N Wok — OTP Verification</title>
  <style>
    /* Basic fallback styles for email clients */
    body { margin:0; padding:0; background:#000000; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    table { border-collapse:collapse; }
    img { border:0; line-height:100%; text-decoration:none; -ms-interpolation-mode:bicubic; display:block; }
    .container { max-width:600px; width:100%; margin:0 auto; }
    @media only screen and (max-width:480px) {
      .content { padding:18px !important; }
      .otp { font-size:28px !important; }
    }
  </style>
</head>
<body style="background:#000000; font-family: Arial, Helvetica, sans-serif; color:#ffffff;">
  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <!-- Card -->
        <table class="container" role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">
          <tr>
            <td style="background:#0b0b0b; border-radius:8px; padding:28px; box-shadow:0 6px 18px rgba(0,0,0,0.6);">
              
              <!-- LOGO: replace src below with your logo URL or cid (see instructions after code) -->
              <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:18px;">
                    <img src="https://ibb.co/KpZS8Jt2" alt="Seoul N Wok Logo" style="max-width:200px; width:70%; height:auto; display:block;" />
                  </td>
                </tr>
              </table>

              <!-- Header -->
              <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center; padding-bottom:12px;">
                    <h1 style="margin:0; font-size:20px; color:#ffffff; font-weight:700;">OTP Verification</h1>
                    <div style="margin-top:6px; font-size:13px; color:#d6d6d6;">Seoul N Wok — Secure sign in</div>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                <tr>
                  <td class="content" style="padding:0 24px 8px; color:#e6e6e6; font-size:15px; line-height:1.5;">
                    <p style="margin:0 0 12px 0;">Hello,</p>
                    <p style="margin:0 0 12px 0;">Use the One-Time Password (OTP) below to verify your account or complete your action at Seoul N Wok. This code is valid for <strong>${expiryMinutes} minutes</strong>.</p>
                  </td>
                </tr>
              </table>

              <!-- OTP block -->
              <table width="100%" role="presentation" cellpadding="0" cellspacing="0" style="margin-top:8px;">
                <tr>
                  <td align="center" style="padding:10px 24px 20px;">
                    <div class="otp" style="display:inline-block; padding:16px 22px; border-radius:8px; background:linear-gradient(90deg,#1a0000,#3b0000); color:#fff; font-weight:700; font-size:32px; letter-spacing:4px;">
                      ${otp}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- CTA (optional) -->
              <table width="100%" role="presentation" cellpadding="0" cellspacing="0" style="margin-top:10px;">
                <tr>
                  <td align="center" style="padding:0 24px;">
                    <a href="#" style="display:inline-block; text-decoration:none; padding:12px 22px; border-radius:6px; background:#E10600; color:#ffffff; font-weight:700; font-size:14px;">
                      Verify Now
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <table width="100%" role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                <tr>
                  <td style="padding:12px 24px 0; color:#bdbdbd; font-size:13px; text-align:center;">
                    <div>If you did not request this, ignore this email. For help, contact <a href="mailto:info@seoulnwok.example" style="color:#ff6b6b; text-decoration:none;">info@seoulnwok.example</a></div>
                    <div style="margin-top:8px; color:#8f8f8f; font-size:12px;">© ${new Date().getFullYear()} Seoul N Wok</div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

module.exports = grannyOtpTemplate;