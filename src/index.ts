import queryString = require("query-string");

export class Piwik {
  private trackerUrl: string;
  private siteId: number;

  private userId: string;

  constructor(trackerHost: string, siteId: number) {
    this.trackerUrl = `${trackerHost}`;
    this.siteId = siteId;
  }

  public report(params: IHTTPQueryParams = {}) {
    // Setting Default Values According to https://developer.piwik.org/api-reference/tracking-api
    params.idsite = params.idsite || this.siteId;
    params.rec = params.rec || 1;
    params.apiv = params.apiv || 1;
    params.url = params.url || this.getUrl();

    params._id = this.userId;

    if (typeof document !== 'undefined') {
      // I'm on the web
      const ReactNative: any = require("react-native");

    }
    else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
      // I'm in react-native

    }
    else {
      // I'm in node js
    }

    const stringifiedParams = queryString.stringify(params);

    return fetch(`${this.trackerUrl}?${stringifiedParams}`, { method: "post" });
  }

  /**
   * Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
   */
  public trackEvent(
    category: string,
    action: string,
    name?: string,
    value?: number,
    additional?: IHTTPQueryParams
  ) {
    return this.report({
      e_a: action,
      e_c: category,
      e_n: name,
      e_v: value,
      ...additional
    });
  }

  /**
   * BonifyByForteil/react-native-piwik API mirror
   */

  public setUserId(id: string) {
    this.userId = id;
  }

  public trackScreen(
    screenPath: string,
    screenTitle: string,
    additional?: IHTTPQueryParams
  ) {
    return this.report({
      action_name: screenTitle,
      url: screenPath,
      ...additional
    });
  }

  public trackGoal(
    goalId: number,
    revenue: number,
    additional?: IHTTPQueryParams
  ) {
    return this.report({
      idgoal: goalId,
      revenue,
      ...additional
    });
  }

  // TODO: Implement
  // public trackAppDownload() {}

  private getUrl(): string {
    if (typeof window !== "undefined") {
      return document.location.pathname;
    }

    return "/";
  }
}
