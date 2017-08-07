import { Piwik } from "./index";

describe("isomorphic-piwik", () => {
  let tracker: Piwik;

  beforeAll(() => {
    tracker = new Piwik("localhost/piwik.php", 1);
  });

  beforeEach(() => {
    fetch.resetMocks();
  });

  it("does a basic request", async () => {
    await tracker.report({});
    expect(fetch.mock.calls).toMatchSnapshot();
  });
});
