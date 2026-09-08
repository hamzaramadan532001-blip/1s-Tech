// Fallback type declarations — safety net in case Next's own CSS types
// aren't picked up yet by the editor's TypeScript server.
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
