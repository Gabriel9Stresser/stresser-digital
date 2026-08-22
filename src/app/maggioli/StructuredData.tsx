import { buildJsonLd } from "./seo";

export function MaggioliStructuredData() {
  const graphs = buildJsonLd();

  return (
    <>
      {graphs.map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
}
