import { Piwik } from "./index";

describe("isomorphic-piwik", () => {
  let tracker: Piwik;

  beforeAll(() => {
    tracker = new Piwik("localhost/piwik.php", 1);
  });

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("posts a basic report", () => {
    it("with an empty object", async () => {
      await tracker.report({});
      expect(fetch.mock.calls).toMatchSnapshot();
    });

    it("without an empty object", async () => {
      await tracker.report();
      expect(fetch.mock.calls).toMatchSnapshot();
    });
  });
});
