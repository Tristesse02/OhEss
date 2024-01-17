import withStyledComponents from "utils/withStyledComponent";
import type { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await withStyledComponents(ctx);
  }
}

export default MyDocument;
