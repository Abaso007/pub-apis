// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { UMAMI_SRC, UMAMI_WEBSITE_ID } from "constants/umami";

export const APP_NAME = "Public APIs";
const APP_DESCRIPTION = "Find public APIs for your next projects.";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon/apple-touch-icon.png"
          />
          <link
            rel="shortcut icon"
            href="https://sznm.dev/app_icons/pub-apis.svg"
          />
          <link rel="manifest" href="/manifest.json" />

          {/* umami self-hosted analytics */}
          <script
            async
            defer
            data-website-id={UMAMI_WEBSITE_ID}
            src={UMAMI_SRC}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
