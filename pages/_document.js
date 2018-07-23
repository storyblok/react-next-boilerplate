import Document, { Head, Main, NextScript } from 'next/document'
import StoryblokService from '../utils/StoryblokService'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <script dangerouslySetInnerHTML={{__html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';` }}></script>
          <style jsx global>{`
            html {
              font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-size: 16px;
              word-spacing: 1px;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              box-sizing: border-box;
            }

            *, *:before, *:after {
              box-sizing: border-box;
              margin: 0;
            }

            .teaser,
            .column {
              font-size: 2rem;
              text-align: center;
              line-height: 3;
              background: #ebeff2;
              border-radius: 10px;
              margin: 10px 5px;
            }

            .grid {
              display: flex;
            }

            .column {
              flex: 1;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
