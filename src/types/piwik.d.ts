/**
 * Tracking HTTP API params as defined by Piwik.
 * https://developer.piwik.org/api-reference/tracking-api
 */
interface IHTTPQueryParams {
  /**
   * Required Params
   */

  /** The ID of the website we're tracking a visit/action for. */
  idSite?: number;
  /** Required for tracking, must be set to one, eg, `&rec=1`. */
  rec?: number;
  /** The full URL for the current action. */
  url?: string;

  /**
   * Recommended Params
   */

  /** The title of the action being tracked. It is possible to use slashes / to set one or several categories for this action. For example, Help / Feedback will create the Action Feedback in the category Help. */
  action_name?: string;
  /** The unique visitor ID, must be a 16 characters hexadecimal string. Every unique visitor must be assigned a different ID and this ID must not change after it is assigned. If this value is not set Piwik will still track visits, but the unique visitors metric might be less accurate. */
  _id?: string;
  /**  Meant to hold a random value that is generated before each request. Using it helps avoid the tracking request being cached by the browser or a proxy. */
  rand?: string;
  /** The parameter &apiv=1 defines the api version to use (currently always set to 1) */
  apiv?: number;

  /**
   * Optional User Info
   */

  /** The full HTTP Referrer URL. This value is used to determine how someone got to your website (ie, through a website, search engine or campaign). */
  urlref?: string;
  /** Visit scope custom variables. This is a JSON encoded string of the custom variable array (see below for an example value). */
  _cvar?: string;
  /** The current count of visits for this visitor. To set this value correctly, it would be required to store the value for each visitor in your application (using sessions or persisting in a database). Then you would manually increment the counts by one on each new visit or "session", depending on how you choose to define a visit. This value is used to populate the report Visitors > Engagement > Visits by visit number. */
  _idvc?: string;
  /** The UNIX timestamp of this visitor's previous visit. This parameter is used to populate the report Visitors > Engagement > Visits by days since last visit. */
  _viewts?: string;
  /** The UNIX timestamp of this visitor's first visit. This could be set to the date where the user first started using your software/app, or when he/she created an account. This parameter is used to populate the Goals > Days to Conversion report. */
  _idts?: string;
  /** The Campaign name (see Tracking Campaigns). Used to populate the Referrers > Campaigns report. Note: this parameter will only be used for the first pageview of a visit. */
  _rcn?: string;
  /** The Campaign Keyword (see Tracking Campaigns). Used to populate the Referrers > Campaigns report (clicking on a campaign loads all keywords for this campaign). Note: this parameter will only be used for the first pageview of a visit. */
  _rck?: string;
  /** The resolution of the device the visitor is using, eg 1280x1024. */
  res?: string;
  /** The current hour (local time). */
  h?: number;
  /** The current minute (local time). */
  m?: number;
  /** The current second (local time). */
  s?: number;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (Flash) */
  fla?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (Java) */
  java?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (Director) */
  dir?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (QuickTime) */
  qt?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (Real Player) */
  realp?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (PDF) */
  pdf?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (Windows Media) */
  wma?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (Gears) */
  gears?: 0 | 1;
  /** plugins used by the visitor can be specified by setting the following parameters to 1: (Silverlight) */
  ag?: 0 | 1;
  /** when set to 1, the visitor's client is known to support cookies. */
  cookie?: 0 | 1;
  /** An override value for the User-Agent HTTP header field. The user agent is used to detect the operating system and browser used */
  ua?: string;
  /** An override value for the Accept-Language HTTP header field. This value is used to detect the visitor's country if GeoIP is not enabled. */
  lang?: string;
  /** defines the User ID for this request. User ID is any non empty unique string identifying the user (such as an email address or a username). To access this value, users must be logged-in in your system so you can fetch this user ID from your system, and pass it to Piwik. The User ID appears in the visitor log, the Visitor profile, and you can Segment reports for one or several User ID (userId segment). When specified, the User ID will be "enforced". This means that if there is no recent visit with this User ID, a new one will be created. If a visit is found in the last 30 minutes with your specified User ID, then the new action will be recorded to this existing visit. */
  uid?: string;
  /** defines the visitor ID for this request. You must set this value to exactly a 16 character hexadecimal string (containing only characters 01234567890abcdefABCDEF). We recommended to set the User ID via uid rather than use this cid. */
  cid?: string;
  /** f set to 1, will force a new visit to be created for this action. This feature is also available in JavaScript. */
  new_visit?: 0 | 1;
  /** A Custom Dimension value for a specific Custom Dimension ID (requires Piwik 2.15.1 + Custom Dimensions plugin see the Custom Dimensions guide). If Custom Dimension ID is 2 use dimension2=dimensionValue to send a value for this dimension. The configured Custom Dimension has to be in scope "Visit". */
  // dimesion[0-999]: string;

  /**
   * Optional Action Info
   */

  /** Page scope custom variables. This is a JSON encoded string of the custom variable array (see below for an example value). */
  cvar?: string;
  /** An external URL the user has opened. Used for tracking outlink clicks. We recommend to also set the url parameter to this same value. */
  link?: string;
  /** URL of a file the user has downloaded. Used for tracking downloads. We recommend to also set the url parameter to this same value. */
  download?: string;
  /** The Site Search keyword. When specified, the request will not be tracked as a normal pageview but will instead be tracked as a Site Search request. */
  search?: string;
  /** when search is specified, you can optionally specify a search category with this parameter. */
  search_cat?: string;
  /** when search is specified, we also recommend to set the search_count to the number of search results displayed on the results page. When keywords are tracked with &search_count=0 they will appear in the "No Result Search Keyword" report. */
  search_count?: string;
  /** Accepts a six character unique ID that identifies which actions were performed on a specific page view. When a page was viewed, all following tracking requests (such as events) during that page view should use the same pageview ID. Once another page was viewed a new unique ID should be generated. Use [0-9a-Z] as possible characters for the unique ID. */
  pv_id?: string;
  /** If specified, the tracking request will trigger a conversion for the goal of the website being tracked with this ID. */
  idgoal?: number;
  /** A monetary value that was generated as revenue by this goal conversion. Only used if idgoal is specified in the request. */
  revenue?: number;
  /** The amount of time it took the server to generate this action, in milliseconds. This value is used to process the Page speed report Avg. generation time column in the Page URL and Page Title reports, as well as a site wide running average of the speed of your server. Note: when using the JavaScript tracker this value is set to the ime for server to generate response + the time for client to download response. */
  gt_ms?: number;
  /** The charset of the page being tracked. Specify the charset if the data you send to Piwik is encoded in a different character set than the default utf-8. */
  cs?: string;
  /** A Custom Dimension value for a specific Custom Dimension ID (requires Piwik 2.15.1 + Custom Dimensions plugin see the Custom Dimensions guide). If Custom Dimension ID is 2 use dimension2=dimensionValue to send a value for this dimension. The configured Custom Dimension has to be in scope "Action". */
  // dimension[0-999]: string;

  /**
   * Optional Event Tracking Info
   */

  /** The event category. Must not be empty. (eg. Videos, Music, Games...) */
  e_c?: string;
  /** The event action. Must not be empty. (eg. Play, Pause, Duration, Add Playlist, Downloaded, Clicked...) */
  e_a?: string;
  /** The event name. (eg. a Movie name, or Song name, or File name...) */
  e_n?: string;
  /** The event value. Must be a float or integer value (numeric), not a string. */
  e_v?: number;

  /**
   * Optional Content Tracking Info
   */

  /** The name of the content. For instance 'Ad Foo Bar' */
  c_n?: string;
  /** The actual content piece. For instance the path to an image, video, audio, any text */
  c_p?: string;
  /** The target of the content. For instance the URL of a landing page */
  c_t?: string;
  /** The name of the interaction with the content. For instance a 'click' */
  c_i?: string;

  /**
   * Optional Ecommence Info
   *
   * you must set &idgoal=0 in the request to track an ecommerce interaction: cart update or an ecommerce order.
   */

  /** The unique string identifier for the ecommerce order (required when tracking an ecommerce order) */
  ec_id?: string;
  /**  Items in the Ecommerce order. This is a JSON encoded array of items. Each item is an array with the following info in this order: item sku, item name, item category, item price, item quantity. */
  ec_items?: string;
  /** The sub total of the order; excludes shipping. */
  ec_st?: number;
  /** Tax Amount of the order */
  ec_tx?: number;
  /** Shipping cost of the Order */
  ex_sh?: number;
  /** Discount offered */
  ex_dt?: number;
  /** The UNIX timestamp of this customer's last ecommerce order. This value is used to process the "Days since last order" report. */
  _ects?: number;

  /**
   * Other Parameters (Require Authentication via `token_auth`)
   */

  /** 32 character authorization key used to authenticate the API request. */
  token_auth?: string;
  /** Override value for the visitor IP (both IPv4 and IPv6 notations supported). */
  cip?: string;
  /** Override for the datetime of the request (normally the current time is used). This can be used to record visits and page views in the past. The expected format is either a datetime such as: 2011-04-05 00:11:42 (remember to URL encode the value!), or a valid UNIX timestamp such as 1301919102. The datetime must be sent in UTC timezone. Note: if you record data in the past, you will need to force Piwik to re-process reports for the past dates. If you set cdt to a datetime older than 24 hours then token_auth must be set. If you set cdt with a datetime in the last 24 hours then you don't need to pass token_auth. */
  cdt?: string;
  /** An override value for the country. Should be set to the two letter country code of the visitor (lowercase), eg fr, de, us. */
  country?: string;
  /** An override value for the region. Should be set to the two letter region code as defined by MaxMind's GeoIP databases. See here for a list of them for every country (the region codes are located in the second column, to the left of the region name and to the right of the country code). */
  region?: string;
  /** An override value for the city. The name of the city the visitor is located in, eg, Tokyo. */
  city?: string;
  /** An override value for the visitor's latitude, eg 22.456. */
  lat?: number;
  /** An override value for the visitor's longitude, eg 22.456. */
  long?: number;

  /**
   * Media Analytics Parameters
   */

  ma_id?: string;
  ma_ti?: string;
  ma_re?: string;
  ma_mt?: string;
  ma_pn?: string;
  ma_st?: string;
  ma_le?: string;
  ma_ps?: string;
  ma_ttp?: string;
  ma_w?: string;
  ma_h?: string;
  ma_fs?: string;

  /**
   * Other Parameters
   */

  /** If set to 0 (send_image=0) Piwik will respond with a HTTP 204 response code instead of a GIF image. This improves performance and can fix errors if images are not allowed to be obtained directly (eg Chrome Apps). Available since Piwik 2.10.0 */
  send_image?: 0;

  /**
   * Tracking Bots
   */

  /** By default Piwik does not track bots. If you use the Tracking HTTP API directly, you may be interested in tracking bot requests. To enable Bot Tracking in Piwik, set the parameter &bots=1 in your requests to piwik.php. */
  bots?: 1;
}
