export const resetPassword = ({
  subject,
  otpCode,
  timeExpired,
  phoneContact,
}: {
  subject: string;
  otpCode: string;
  timeExpired: string;
  phoneContact: string;
}) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject} Đặt lại mật khẩu</title>
        </head>
        <body>
            <p>Xin chào,</p>
            <p>Bạn đang sử dụng tính năng của hệ thống của <strong>${subject}</strong>. Sử dụng mã OTP bên dưới để hoàn tất quá trình đặt lại mật khẩu. Mã OTP chỉ có hiệu lực trong <strong>${timeExpired}</strong> phút.</p>
            <p><strong style="font-size: 24px;">${otpCode}</strong></p>
            <p>Mọi thắc mắc, Quý khách vui lòng liên hệ tổng đài hỗ trợ <strong>${phoneContact}</strong> từ 8:00 - 17:00.</p>
            <p>Trân trọng,</p>
            <p>${subject}</p>
        </body>
        </html>
      `;
};

export const createUser = ({
  subject,
  otpCode,
  timeExpired,
  phoneContact,
}: {
  subject: string;
  otpCode: string;
  timeExpired: string;
  phoneContact: string;
}): string => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject} Tạo tài khoản</title>
        </head>
        <body>
            <p>Xin chào,</p>
            <p>Bạn đang sử dụng tính năng của hệ thống của <strong>${subject}</strong>. Sử dụng mã OTP bên dưới để hoàn tất quá trình tạo tài khoản. Mã OTP chỉ có hiệu lực trong <strong>${timeExpired}</strong> phút.</p>
            <p><strong style="font-size: 24px;">${otpCode}</strong></p>
            <p>Mọi thắc mắc, Quý khách vui lòng liên hệ tổng đài hỗ trợ <strong>${phoneContact}</strong> từ 8:00 - 17:00.</p>
            <p>Trân trọng,</p>
            <p>${subject}</p>
        </body>
        </html>
      `;
};
