import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render () {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' /> 
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png" />
          <link rel='stylesheet' href='../static/css/nprogress.css' />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
