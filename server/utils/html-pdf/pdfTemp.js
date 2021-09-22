export const pdfTemp = (body, id) => {
  console.log(id);
  return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
    <title>Invoice</title>
  </head>
  <style>
    body {
      margin-top: 20px;
      background: #eee;
    }
    .main_title {
      text-align: center;
      font-weight: 700;
      font-size: 36px;
      color: #000;
    }
    .invoice {
      padding: 30px;
    }

    .invoice h2 {
      margin-top: 0px;
      line-height: 0.8em;
      color: #000;
    }

    .invoice .small {
      font-weight: 300;
    }

    .invoice hr {
      margin-top: 10px;
      border-color: #ddd;
    }

    .invoice .table tr.line {
      border-bottom: 1px solid #ccc;
    }

    .invoice .table td {
      border: none;
    }

    .invoice .identity {
      margin-top: 10px;
      font-size: 1.1em;
      font-weight: 300;
    }

    .invoice .identity strong {
      font-weight: 600;
    }

    .grid {
      position: relative;
      width: 100%;
      background: #fff;
      color: #000;
      border-radius: 2px;
      margin-bottom: 25px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
    .bold {
      font-size: 18px;
      font-weight: 600;
    }
  </style>
  <body>
    <div class="container">
      <div class="row">
        <!-- BEGIN INVOICE -->
        <div class="col-xs-12">
          <div class="grid invoice">
            <div class="grid-body">
              <div class="invoice-title">
                <div class="row">
                  <div class="col-xs-12 main_title">FR Store</div>
                </div>
                <br />
                <div class="row">
                  <div class="col-xs-12">
                    <h2>
                      invoice<br />
                      <span class="small">order #${id}</span>
                    </h2>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xs-6 text-right">
                  <address>
                    <strong>Shipped To:</strong><br />
                    Elaine Hernandez<br />
                    P. Sherman 42,<br />
                    Wallaby Way, Sidney<br />
                    <abbr title="Phone">P:</abbr> (123) 345-6789
                  </address>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6">
                  <address>
                    <strong>Payment Method:</strong><br />
                    bkash<br />
                    01638418833<br />
                  </address>
                </div>
                <div class="col-xs-6 text-right">
                  <address>
                    <strong>Order Date:</strong><br />
                    17/06/14
                  </address>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h3>ORDER SUMMARY</h3>
                  <table class="table table-striped">
                    <thead>
                      <tr class="line">
                        <td><strong>#</strong></td>
                        <td class="text-center"><strong>PRODUCT</strong></td>
                        <td class="text-center"><strong>QTY</strong></td>
                        <td class="text-center"><strong>PRICE</strong></td>
                        <td class="text-right"><strong>SUBTOTAL</strong></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="flex">
                        <td>1</td>
                        <td>
                          <strong>Template Design</strong><br />A website
                          template is a pre-designed webpage, or set of
                          webpages, that anyone can modify with their own
                          content and images to setup a website.
                        </td>
                        <td class="text-center bold">15</td>
                        <td class="text-center bold">$75</td>
                        <td class="text-right bold">$1,125.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <strong>Template Development</strong><br />Web
                          development is a broad term for the work involved in
                          developing a web site for the Internet (World Wide
                          Web) or an intranet (a private network).
                        </td>
                        <td class="text-center">15</td>
                        <td class="text-center">$75</td>
                        <td class="text-right">$1,125.00</td>
                      </tr>
                      <tr class="line">
                        <td>3</td>
                        <td>
                          <strong>Testing</strong><br />Take measures to check
                          the quality, performance, or reliability of
                          (something), especially before putting it into
                          widespread use or practice.
                        </td>
                        <td class="text-center">2</td>
                        <td class="text-center">$75</td>
                        <td class="text-right">$150.00</td>
                      </tr>align-items: center;
                        
                          
                        
                      <tr>
                        <td colspan="3"></td>
                        <td class="text-right"><strong>Taxes</strong></td>
                        <td class="text-right"><strong>N/A</strong></td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td style="width: 180px" class="text-right">
                          <strong>Payment Charge</strong>
                        </td>
                        <td class="text-right"><strong>N/A</strong></td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td class="text-right">
                          <strong>Delivery Charge</strong>
                        </td>
                        <td class="text-right"><strong>N/A</strong></td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td class="text-right"><strong>Total</strong></td>
                        <td class="text-right"><strong>$2,400.00</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-right identity">
                  <p>Author Signature <br /><strong>Fahim Arif</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END INVOICE -->
      </div>
    </div>
  </body>
</html>

`;
};
