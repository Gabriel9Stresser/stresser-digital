export type PreviewMetric = {
  id: string;
  label: string;
  old: number;
  new: number;
  unit: string;
  invert?: boolean;
};

export type PreviewCompareData = {
  oldHost: string;
  newLabel: string;
  headline: string;
  headlineSub: string;
  metrics: PreviewMetric[];
  badges: string[];
};

export type PreviewCompareOptions = Partial<
  Pick<PreviewCompareData, "metrics" | "badges" | "headline" | "headlineSub" | "newLabel">
>;
