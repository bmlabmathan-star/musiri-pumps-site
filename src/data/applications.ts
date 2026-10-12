export type Application = {
  slug: string;
  title: string;
  summary: string;
  details: string;
};

export const applications: Application[] = [
  {
    slug: "agriculture",
    title: "Agriculture",
    summary:
      "Placeholder: describe how MusiR Pumps may be used for irrigation, livestock water, and farm supply once official details are available.",
    details:
      "Placeholder content. Add crop types, typical duties, and product recommendations here. Do not treat this as a performance claim.",
  },
  {
    slug: "domestic-water-supply",
    title: "Domestic water supply",
    summary:
      "Placeholder: describe household and residential water-supply uses once official details are available.",
    details:
      "Placeholder content. Add notes about pressure boosting, storage, and bore or municipal supply when they are confirmed.",
  },
  {
    slug: "industrial-use",
    title: "Industrial use",
    summary:
      "Placeholder: describe industrial transfer, process, and utility water uses once official details are available.",
    details:
      "Placeholder content. Add industry examples and duty notes only after they are confirmed by the business.",
  },
  {
    slug: "other-applications",
    title: "Other applications",
    summary:
      "Placeholder: list other relevant pump applications such as construction, municipal, or commercial sites when confirmed.",
    details:
      "Placeholder content. Replace this section with uses that MusiR Pumps actually supports.",
  },
];
