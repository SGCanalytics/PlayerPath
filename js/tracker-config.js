/**
 * Configuration for each tracker type.
 *
 * To add a new tracker:
 *   1. Add an entry here keyed by its URL slug (e.g. "my-tracker")
 *   2. Add a card on index.html linking to  trackers/tracker.html?type=my-tracker
 */
var TRACKER_CONFIG = {
  'stack-wedge': {
    title: 'Stack Wedge',
    description: 'Track shot grouping and dispersion with your wedges at specific targets.',
    clubs: [
      { value: 'pw', label: 'PW' },
      { value: 'gw', label: 'GW (Gap Wedge)' },
      { value: 'sw', label: 'SW (Sand Wedge)' },
      { value: 'lw', label: 'LW (Lob Wedge)' }
    ],
    swings: [
      { value: 'full', label: 'Full' },
      { value: 'three-quarter', label: '3/4' },
      { value: 'half', label: '1/2' }
    ],
    distanceMax: 130,
    distancePlaceholder: 'e.g. 85'
  },

  'distance-wedge': {
    title: 'Distance Wedge',
    description: 'Track carry distances for each wedge and swing length.',
    clubs: [
      { value: 'pw', label: 'PW' },
      { value: 'gw', label: 'GW (Gap Wedge)' },
      { value: 'sw', label: 'SW (Sand Wedge)' },
      { value: 'lw', label: 'LW (Lob Wedge)' }
    ],
    swings: [
      { value: 'full', label: 'Full' },
      { value: 'three-quarter', label: '3/4' },
      { value: 'half', label: '1/2' }
    ],
    distanceMax: 160,
    distancePlaceholder: 'e.g. 120'
  },

  'short-iron': {
    title: 'Short Iron',
    description: 'Track distances and accuracy with your short irons.',
    clubs: [
      { value: '9i', label: '9 Iron' },
      { value: '8i', label: '8 Iron' },
      { value: '7i', label: '7 Iron' }
    ],
    swings: [
      { value: 'full', label: 'Full' },
      { value: 'three-quarter', label: '3/4' }
    ],
    distanceMax: 180,
    distancePlaceholder: 'e.g. 150'
  },

  'long-iron': {
    title: 'Long Iron',
    description: 'Track distances and shot shape with your long irons and hybrids.',
    clubs: [
      { value: '6i', label: '6 Iron' },
      { value: '5i', label: '5 Iron' },
      { value: '4i', label: '4 Iron' },
      { value: '3i', label: '3 Iron' },
      { value: '3h', label: '3 Hybrid' },
      { value: '4h', label: '4 Hybrid' }
    ],
    swings: [
      { value: 'full', label: 'Full' },
      { value: 'three-quarter', label: '3/4' }
    ],
    distanceMax: 230,
    distancePlaceholder: 'e.g. 190'
  }
};
