import { buildJsonLd } from "./seo";

export function LibelaStructuredData() {
  return (
    <>
      {buildJsonLd().map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
}
