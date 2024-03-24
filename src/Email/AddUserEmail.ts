export const getAddUserEmail = (
    fullname: string,
    email: string,
    otp: string,
  ) => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Document</title>
      </head>
      <body style="padding: 0; margin: 0">
        <div>
          <div
            style="
            background-image: url('http://stagingapi.lifti.io/media-upload/mediaFiles/backgroundemail/078b508b0d375b4fb53046f34cb499ae.png');
            background-size: cover;
            background-repeat: no-repeat;
    
            padding-bottom: 10%;
            padding-top: 10%;
            "
          >
            <h1
              style="
                color: white;
                font-family: 'Sometype Mono', monospace;
                margin: 0 auto;
                text-align: center;
                font-size: 40px;
                font-weight: 700;
                letter-spacing: 8.6px;
              "
            >
              Plantino Motors
            </h1>
          </div>
          <div
            style="
              font-family: 'Inter';
              padding: 1rem;
              margin: 1% 6%;
              background-color: white;
              box-shadow: 5px 5px white;
              margin-top: -12%;
            
              border-radius: 6px;
            "
          >
            <div style="padding: 0rem 1%">
              <h2
                style="
                font-weight: 700;
                font-size: 36px;
                color: #2e3f51;
                line-height: 100%;
                letter-spacing: -0.36px;
              
                "
              >
                User Invitation
              </h2>
              <div
                style="
                margin-top: 1rem;
                font-weight: 400;
                color: #2e3f51;
                font-size: 16px;
                font-style: normal;
                "
              >
                <p style="line-height: 26px">Hi ${fullname},</p>
                <p style="line-height: 26px">
                  Congratulations! You've been added as an administrator on Avant Labs.
                  To get started, please click the link below to complete your
                  registration and set up your admin account:
                </p>
                <h6 style="font-weight: bold; margin-bottom: 0.75rem">
                  <a
                    href="http://localhost:3000/verifyUserPage?email=${email}&otp=${otp}"
                    style="color: #100d0d; font-weight: 700; font-size: 16px"
                  >
                    [Registration Link]
                  </a>
                </h6>
                <p style="line-height: 26px">
                  Once registered, you'll have access to the Plantino Motors,
                  where you can manage and oversee the innovative luggage-sharing
                  platform.
                </p>
                <p style="line-height: 26px">
                  If you have any questions or need assistance, feel free to contact
                  our support team.
                </p>
              </div>
              <p
                style="
                  margin-top: 1rem;
                  margin-bottom: 0;
                  font-weight: bold;
                  color: #000;
                  font-size: 16px;
                "
              >
                Best regards,
              </p>
              <p style="color: #2e3f51; font-size: 16px">The Avant Labs Team</p>
  
            </div>
          </div>
          <div style="padding-top: 1rem; margin: 2% 8% 10px 8%; color: #767e9d">
            <h3
              style="
                display: flex;
                align-items: center;
                gap: 10px;
                font-family: 'Sometype Mono', monospace;
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 4.3px;
              "
            >
              <img src="http://stagingapi.lifti.io/media-upload/mediaFiles/lifti_logo_red/fcea1106815102399e461048dda2f541734.png" style="
              width: 30px; height: 30px;"
              alt="logo"/> Avant Labs
            </h3>
            <div
              style="display: flex; align-items: center; font-size: 16px"
            >
              <p style="margin: 0; margin-right: 12px;">Facebook</p>
              <p style="margin: 0; margin-right: 12px;">|</p>
              <p style="margin: 0; margin-right: 12px;">Twitter</p>
              <p style="margin: 0; margin-right: 12px;">|</p>
              <p style="margin: 0; margin-right: 12px;">Instagram</p>
            </div>
            <hr />
            <p style="font-weight: 400; font-size: 14px; line-height: 16px">
              If you have questions or need help, don't hesitate to contact our
              support team!
            </p>
           
            <div
              style="
                display: flex;
                align-items: center;
            
                font-size: 16px;
                flex-wrap: wrap;
              "
            >
              <p style="margin: 0; margin-right: 12px;">Terms & conditions</p>
              <p style="margin: 0; margin-right: 12px;">|</p>
              <p style="margin: 0; margin-right: 12px;">Privacy policy</p>
              <p style="margin: 0; margin-right: 12px;">|</p>
              <p style="margin: 0; margin-right: 12px;">Contact us</p>
            </div>
            <p style="font-weight: 400; font-size: 14px; line-height: 16px">
              This message was sent to ${email}. If you don't want to receive
              these emails from Avant Labs in the future, you can
              <span style="color: #2e3f51">edit your profile</span> or
              <span style="color: #2e3f51">unsubscribe.</span>
            </p>
          </div>
        </div>
      </body>
    </html>
    
  
  
      `;
  };