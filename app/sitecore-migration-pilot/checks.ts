const legacyPath = "/en/cms-services";
const englishPath = "/en/services/cms";
const frenchPath = "/fr/services/cms";
const retiredPath = "/en/cms-event-2019";
const expectedVersion = 4;

type PageResponse = {
  status: number;
  canonical: string;
  indexable: boolean;
  alternate: string;
};

type PilotSample = {
  redirects: { status: number; location: string }[];
  publishedVersion: number;
  english: PageResponse;
  french: PageResponse;
  retiredStatus: number;
};

const english = { status: 200, canonical: englishPath, indexable: true, alternate: frenchPath };
const french = { status: 200, canonical: frenchPath, indexable: true, alternate: englishPath };

export const samples = [
  {
    label: "Before fixes",
    responses: {
      redirects: [
        { status: 302, location: "/en/content-platforms" },
        { status: 301, location: englishPath },
      ],
      publishedVersion: 3,
      english,
      french: { ...french, canonical: englishPath },
      retiredStatus: 404,
    },
  },
  {
    label: "After fixes",
    responses: {
      redirects: [{ status: 301, location: englishPath }],
      publishedVersion: 4,
      english,
      french,
      retiredStatus: 404,
    },
  },
] satisfies { label: string; responses: PilotSample }[];

export function evaluatePilot({
  redirects,
  publishedVersion,
  english,
  french,
  retiredStatus,
}: PilotSample) {
  const redirect = redirects[0];
  const englishIsIndexable = english.status === 200 && english.indexable
    && english.canonical === englishPath;
  const frenchIsIndexable = french.status === 200 && french.indexable
    && french.canonical === frenchPath;

  return [
    {
      title: "Legacy URL redirect",
      expected: `${legacyPath} returns one 301 or 308 hop to ${englishPath}. The destination returns 200 with a self-referencing canonical and allows indexing.`,
      observed: [legacyPath, ...redirects.map(({ status, location }) => `${status} → ${location}`)].join(" · ")
        + ` · destination ${english.status}, canonical ${english.canonical}, ${english.indexable ? "indexable" : "noindex"}`,
      passed: redirects.length === 1 && (redirect.status === 301 || redirect.status === 308)
        && redirect.location === englishPath && englishIsIndexable,
    },
    {
      title: "Published content version",
      expected: `${englishPath} returns version ${expectedVersion} after publishing.`,
      observed: `${englishPath} returned version ${publishedVersion} with HTTP ${english.status}.`,
      passed: english.status === 200 && publishedVersion === expectedVersion,
    },
    {
      title: "French page and language links",
      expected: `${frenchPath} returns 200 and is indexable. Both pages use their own canonical URL and link to each other with hreflang.`,
      observed: `French response ${french.status}, canonical ${french.canonical}, ${french.indexable ? "indexable" : "noindex"}. English points to ${english.alternate} and French points to ${french.alternate}.`,
      passed: englishIsIndexable && frenchIsIndexable
        && english.alternate === frenchPath && french.alternate === englishPath,
    },
    {
      title: "Retired page with no replacement",
      expected: `${retiredPath} returns 404 or 410.`,
      observed: `${retiredPath} returned ${retiredStatus}.`,
      passed: retiredStatus === 404 || retiredStatus === 410,
    },
  ];
}
