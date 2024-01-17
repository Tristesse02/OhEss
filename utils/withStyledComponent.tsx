import React from "react";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { DocumentContext, DocumentInitialProps } from "next/document";

const withStyledComponents = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const view = ctx.renderPage;
  const sheet = new ServerStyleSheet();

  try {
    ctx.renderPage = async () =>
      await view({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    };
  } finally {
    sheet.seal();
  }
};

export default withStyledComponents;
