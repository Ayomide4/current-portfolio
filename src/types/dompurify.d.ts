declare module "dompurify" {
  interface DOMPurify {
    sanitize(dirty: string, options?: any): string;
  }
  const dompurify: DOMPurify;
  export = dompurify;
}
