import { formattedPrice } from "src/utils/formatPrice"

export const checkoutTemplate = (checkoutInfo) => {
    `
    <!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
    <title> Welcome to Coded Mails </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
    <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
  
        .mj-column-per-50 {
          width: 50% !important;
          max-width: 50%;
        }
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
  
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css">
      a,
      span,
      td,
      th {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
      }
    </style>
  </head>
  
  <body style="background-color:#ffffff;">
    <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Preview - Welcome to Coded Mails </div>
    <div style="background-color:#ffffff;">
      <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody><tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:150px;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:0px;word-break:break-word;">
                        <!--[if mso | IE]>
      
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">
        
      <![endif]-->
                        <div style="height:20px;">   </div>
                        <!--[if mso | IE]>
      
          </td></tr></table>
        
      <![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:600px;">
                                <a href="https://google.com" target="_blank" style="color: #2e58ff; text-decoration: none;">
                                  <img alt="image description" height="auto" src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;h=100&amp;q=80" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody></table>
                </div>
                <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody><tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;line-height:32px;text-align:center;color:#434245;">
                          <h1 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;">Xác nhận đơn hàng </h1>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                          <p style="margin: 0;">Cảm ơn bạn đã đặt hàng! Thông tin đặt mua của bạn được hiển thị dưới đây. Vui lòng giữ email này làm xác nhận đơn hàng của bạn. </p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                </div>
                <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0 25px;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:550px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                              <tbody><tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:22px;text-align:left;color:#434245;">
                                    <h3 style="margin: 0; font-weight: bold;">Hóa đơn</h3>
                                    <p style="margin: 0;"><small>Date: 15-11-2023</small></p>
                                    <p style="margin: 0;"></p>
                                  </div>
                                </td>
                              </tr>
                            </tbody></table>
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="background:#fcfcfc;background-color:#fcfcfc;margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fcfcfc;background-color:#fcfcfc;width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="width:550px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]>
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation"
          >
            <tr>
          
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                          
                            <!--[if mso | IE]>
                </td>
                
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                           
                            <!--[if mso | IE]>
                </td>
                
            </tr>
            </table>
          <![endif]-->
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="background:#fcfcfc;background-color:#fcfcfc;margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fcfcfc;background-color:#fcfcfc;width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="width:550px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]>
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation"
          >
            </table>
          <![endif]-->
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="background:#fcfcfc;background-color:#fcfcfc;margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fcfcfc;background-color:#fcfcfc;width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="width:550px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]>
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation"
          >            
           
            </table>
          <![endif]-->
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="width:550px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]>
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation"
          >
            <tr>
          
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody><tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                                    <p style="margin: 0;"><small>Giảm giá</small></p>
                                      <p style="margin: 0;"><small>Thuế</small></p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody><tr>
                                  <td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:right;color:#434245;">
                                    <p style="margin: 0;"><small>${formattedPrice(checkoutInfo.price_sale || 0)} VND</small></p>
                                      <p style="margin: 0;"><small>25.000 VND</small></p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
            </tr>
            </table>
          <![endif]-->
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="background:#fcfcfc;background-color:#fcfcfc;margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fcfcfc;background-color:#fcfcfc;width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="width:550px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]>
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation"
          >
            <tr>
          
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody><tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#434245;">
                                      <p style="margin: 0;">Tổng</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody><tr>
                                  <td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:right;color:#434245;">
                                      <p style="margin: 0;">${formattedPrice(checkoutInfo.total_price)}</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
            </tr>
            </table>
          <![endif]-->
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="width:550px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]>
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation"
          >
            <tr>
          
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody><tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:22px;text-align:left;color:#434245;">
                                      <h3 style="margin: 0; font-weight: bold;">Thông tin người gửi</h3>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:left;color:#999999;">
                                      <p style="margin: 0;">BHHD Shop<br /> Huflit <br /> Hóc Môn<br /> 111111<br /> Việt Nam<br />
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
                <td
                   style="vertical-align:top;width:275px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody><tr>
                                  <td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:22px;text-align:right;color:#434245;">
                                      <h3 style="margin: 0; font-weight: bold;">Người nhận</h3>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:right;color:#999999;">
                                      <p style="margin: 0;">${checkoutInfo.full_name}<br /> ${checkoutInfo.address} <br /> ${checkoutInfo.phone_number}<br /> 22330<br /> Việt Nam<br />
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
            </tr>
            </table>
          <![endif]-->
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody><tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                          <p style="margin: 0;">Tempora culpa porro labore: In quisquam optio quibusdam fugiat perspiciatis nobis </p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                </div>
                <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        <![endif]-->
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fafafa;background-color:#fafafa;width:100%;">
        <tbody>
          <tr>
            <td>
              <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
              <div style="margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                        <div style="margin:0px auto;max-width:600px;">
                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                            <tbody>
                              <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                  <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                      <tbody><tr>
                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                          <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
        >
          <tr>
        
                <td>
              <![endif]-->
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                            <tbody><tr>
                                              <td style="padding:4px;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:32px;">
                                                  <tbody><tr>
                                                    <td style="font-size:0;height:32px;vertical-align:middle;width:32px;">
                                                      <a href="#" target="_blank" style="color: #2e58ff; text-decoration: none;">
                                                        <img alt="twitter-logo" height="32" src="https://codedmails.com/images/social/color/twitter-logo-transparent.png" style="border-radius:3px;display:block;" width="32" />
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody></table>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                          <!--[if mso | IE]>
                </td>
              
                <td>
              <![endif]-->
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                            <tbody><tr>
                                              <td style="padding:4px;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:32px;">
                                                  <tbody><tr>
                                                    <td style="font-size:0;height:32px;vertical-align:middle;width:32px;">
                                                      <a href="#" target="_blank" style="color: #2e58ff; text-decoration: none;">
                                                        <img alt="facebook-logo" height="32" src="https://codedmails.com/images/social/color/facebook-logo-transparent.png" style="border-radius:3px;display:block;" width="32" />
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody></table>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                          <!--[if mso | IE]>
                </td>
              
                <td>
              <![endif]-->
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                            <tbody><tr>
                                              <td style="padding:4px;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:32px;">
                                                  <tbody><tr>
                                                    <td style="font-size:0;height:32px;vertical-align:middle;width:32px;">
                                                      <a href="#" target="_blank" style="color: #2e58ff; text-decoration: none;">
                                                        <img alt="instagram-logo" height="32" src="https://codedmails.com/images/social/color/insta-logo-transparent.png" style="border-radius:3px;display:block;" width="32" />
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody></table>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                          <!--[if mso | IE]>
                </td>
              
                <td>
              <![endif]-->
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                            <tbody><tr>
                                              <td style="padding:4px;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:32px;">
                                                  <tbody><tr>
                                                    <td style="font-size:0;height:32px;vertical-align:middle;width:32px;">
                                                      <a href="#" target="_blank" style="color: #2e58ff; text-decoration: none;">
                                                        <img alt="youtube-logo" height="32" src="https://codedmails.com/images/social/color/youtube-logo-transparent.png" style="border-radius:3px;display:block;" width="32" />
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody></table>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                          <!--[if mso | IE]>
                </td>
              
            </tr>
          </table>
        <![endif]-->
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                          <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">Update your <a class="footer-link" href="https://google.com" style="color: #2e58ff; text-decoration: none;">email preferences</a> to choose the types of emails you receive, or you can <a href="https://google.com" class="footer-link" style="color: #2e58ff; text-decoration: none;"> unsubscribe </a>from all future emails.</div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                          <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:20px;text-align:center;color:#bfbfbf;">© Coded Mails Inc., All Rights Reserved.</div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="font-size:0px;word-break:break-word;">
                                          <!--[if mso | IE]>
      
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">
        
      <![endif]-->
                                          <div style="height:20px;">   </div>
                                          <!--[if mso | IE]>
      
          </td></tr></table>
        
      <![endif]-->
                                        </td>
                                      </tr>
                                    </tbody></table>
                                  </div>
                                  <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
                    </table>
                  <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
  
  </body></html>
    `
}