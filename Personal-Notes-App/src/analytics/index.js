import { ANALYTICS_CATEGORIES, ANALYTICS_DIMENSIONS } from "../constants";

// import 'autotrack/lib/plugins/clean-url-tracker';
// import 'autotrack/lib/plugins/event-tracker';
// import 'autotrack/lib/plugins/impression-tracker';
import 'autotrack/lib/plugins/max-scroll-tracker';
// import 'autotrack/lib/plugins/media-query-tracker';
// import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/page-visibility-tracker';

/* global ga */

const TRACKING_ID = 'UA-142599684-1'

const ANALYTICS_CONFIG = {
  TRACKING_VERSION: '1'
}

export const init = () => {
  // Initialize the command queue in case analytics.js hasn't loaded yet.
  window.ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args));

  createTracker()
  requireAutotrackPlugins();
}

const createTracker = () => {
  ga('create', TRACKING_ID, 'auto')
  ga('set', ANALYTICS_DIMENSIONS.TRACKING_VERSION, ANALYTICS_CONFIG.TRACKING_VERSION)

  // Ensures all hits are sent via `navigator.sendBeacon()`.
  ga('set', 'transport', 'beacon');
}

const requireAutotrackPlugins = () => {
  ga('require', 'maxScrollTracker', {
    sessionTimeout: 30,
    timeZone: 'Asia/Kolkata',
  });
  ga('require', 'pageVisibilityTracker', {
    sendInitialPageview: true,
    timeZone: 'Asia/Kolkata',
  });
}

export const sendPageView = ({ page, title }) => {
  const location = `${window.location.pathname}${window.location.search}`
  ga('send', 'pageview', page, { title, location })
}

export const setUserID = data => {
  const { uid } = data || {};
  ga('set', 'userId', uid)
}

export const sendEvent = ({ category = ANALYTICS_CATEGORIES.TRACK, action, label = '' }) => {
  ga('send', 'event', {
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  })
}