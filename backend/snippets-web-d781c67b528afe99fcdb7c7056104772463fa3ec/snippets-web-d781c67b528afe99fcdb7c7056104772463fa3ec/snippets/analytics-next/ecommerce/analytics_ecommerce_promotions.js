// This snippet file was generated by processing the source file:
// ./analytics-next/ecommerce.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START analytics_ecommerce_promotions_modular]
import { getAnalytics, logEvent } from "firebase/analytics";

// Prepare ecommerce params
const params12 = {
  promotion_id: 'ABC123',
  promotion_name: 'Summer Sale',
  creative_name: 'summer2020_promo.jpg',
  creative_slot: 'featured_app_1',
  location_id: 'HERO_BANNER',
  items: [item_jeggings]
};

// Log event when a promotion is displayed
const analytics = getAnalytics();
logEvent(analytics, 'view_promotion', params12);

// Log event when a promotion is selected
logEvent(analytics, 'select_promotion', params12);
// [END analytics_ecommerce_promotions_modular]