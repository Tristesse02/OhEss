import withServerStyleSheet from "utils/withStyledComponent";
import type { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await withServerStyleSheet(ctx);
  }
}

export default MyDocument;
