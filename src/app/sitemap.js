export default function sitemap() {
  return [
    {
      url: "https://pgsfm.uk",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      url: "https://pgsfm.uk/about",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: "https://pgsfm.uk/services",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: "https://pgsfm.uk/cleaning",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: "https://pgsfm.uk/contact",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}
