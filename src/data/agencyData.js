export const AGENCY_METRICS = [
  {
    id: 'contracts',
    label: 'Signed Roofing Contracts',
    value: 48,
    prefix: '$',
    suffix: 'M+',
    decimals: 0,
    subtext: 'Residential & Commercial Jobs',
    status: 'VERIFIED REVENUE',
    color: 'neon-emerald',
  },
  {
    id: 'estimates',
    label: 'In-Person Estimates Booked',
    value: 14200,
    prefix: '',
    suffix: '+',
    decimals: 0,
    subtext: 'Direct on roofer calendars',
    status: '100% EXCLUSIVE',
    color: 'neon-cyan',
  },
  {
    id: 'ticket',
    label: 'Average Job Value',
    value: 14.8,
    prefix: '$',
    suffix: 'k',
    decimals: 1,
    subtext: 'Full replacements & re-roofs',
    status: 'HIGH-TICKET JOBS',
    color: 'neon-purple',
  },
  {
    id: 'speed',
    label: 'Speed-to-Lead Follow-up',
    value: 45,
    prefix: '<',
    suffix: 's',
    decimals: 0,
    subtext: 'Automated text & call dispatch',
    status: 'ZERO MISSED LEADS',
    color: 'neon-amber',
  },
];

export const CORE_SERVICES = [
  {
    id: 'google-ads',
    title: 'Google Search Ads for Roof Replacements',
    category: 'HIGH-INTENT HOMEOWNERS',
    tagline: 'Get your phone ringing when local homeowners search for a new roof.',
    description: 'When a storm hits or an old roof starts leaking, homeowners search Google for a trusted local roofer. We put your company at the very top of Google for high-ticket searches like "roof replacement near me" and block cheap tire-kickers with strict negative keyword filters.',
    accent: 'cyan',
    stats: { primary: '$65', label: 'Avg Cost Per Estimate', secondary: '100%', subLabel: 'Exclusive to Your Company' },
    features: [
      'Top-of-Page Google Search & Map Placement',
      'Negative Keyword Filters (blocks DIYers & cheap seekers)',
      'High-Ticket Residential & Commercial Keyword Targeting',
      'Human-Managed Bidding: Real ad pros optimizing your budget daily'
    ],
    badge: 'TOP GOOGLE RANKINGS'
  },
  {
    id: 'meta-ads',
    title: 'Facebook & Instagram Ads That Show Your Work',
    category: 'LOCAL HOMEOWNER TARGETING',
    tagline: 'Show real photos and videos of your crew installing gorgeous roofs.',
    description: 'Homeowners buy from roofers they trust. We run high-converting Facebook and Instagram video ads showing your actual crew, your clean trucks, and before-and-after roof installations targeted specifically to homeowners with roofs 15+ years old.',
    accent: 'emerald',
    stats: { primary: '20-40', label: 'Monthly Inbound Leads', secondary: '34%', subLabel: 'Average Close Rate' },
    features: [
      'Targeted to Local Homeowners Aged 35+ in Your Service Area',
      'Before & After Job Showcases and Video Walkthroughs',
      'Exclusive Leads Delivered Directly to Your Estimator',
      'Financing & Warranty Highlights That Boost Response'
    ],
    badge: 'TRUST BUILDER'
  },
  {
    id: 'speed-to-lead',
    title: 'Instant 45-Second Text & Call Follow-Up',
    category: 'AUTOMATED LEAD CAPTURE',
    tagline: 'Never lose a roofing job because someone called 20 minutes late.',
    description: 'Homeowners request estimates from 2 or 3 roofers and usually hire the first one that calls back. The second a lead comes in, our automated system instantly texts the homeowner and rings your phone to connect your estimator in under 60 seconds.',
    accent: 'amber',
    stats: { primary: '<45s', label: 'Response Time', secondary: '+60%', subLabel: 'More Estimates Set' },
    features: [
      'Instant Automated SMS: "Hey [Name], saw you need a roof quote..."',
      'Live Call Bridge connecting your estimator directly to the homeowner',
      'Automated Appointment Reminders to stop estimate no-shows',
      'Review Request Automations once the roof is finished'
    ],
    badge: 'SPEED TO LEAD'
  },
  {
    id: 'tiktok-video',
    title: 'Drone Footage & Short-Form Video Content',
    category: 'VIRAL LOCAL REACH',
    tagline: 'Drone flyovers of your finished jobs that make neighbors want a new roof.',
    description: 'Nothing sells a $15,000 roof replacement faster than a crisp 4K drone shot of a clean roof installation. We turn your phone recordings and job site clips into high-energy video ads that dominate local feeds.',
    accent: 'purple',
    stats: { primary: '4K', label: 'Drone & Crew Quality', secondary: '5X', subLabel: 'Higher Local Brand Recall' },
    features: [
      'Clean Video Editing of Your Crew on Job Sites',
      'Drone Flyovers of Finished Shingle & Metal Roofs',
      'Video Ads on TikTok, Facebook Reels, and YouTube Shorts',
      'Builds Instant Neighborhood Credibility'
    ],
    badge: 'HIGH-VISIBILITY MEDIA'
  },
  {
    id: 'websites',
    title: 'High-Converting Roofing Websites & Funnels',
    category: 'MOBILE-FIRST DESIGN',
    tagline: 'A fast, clean website built strictly to get homeowners to call you.',
    description: 'Most roofing websites look outdated and lose 80% of their visitors. We build modern, mobile-friendly landing pages equipped with instant estimate request forms, trust badges, financing calculators, and one-tap calling.',
    accent: 'cyan',
    stats: { primary: '0.8s', label: 'Load Speed', secondary: '3X', subLabel: 'Higher Phone Call Conversion' },
    features: [
      'Mobile-First Design with One-Tap "Call for Free Estimate"',
      'Interactive Roof Cost Estimator on the Page',
      'Trust Badges: Owens Corning, GAF, CertainTeed, BBB Certified',
      'Photo Galleries of Real Local Jobs'
    ],
    badge: 'BUILT TO CONVERT'
  },
  {
    id: 'storm-damage',
    title: 'Storm Restoration & Hail Event Campaigns',
    category: 'WEATHER TRIGGERED',
    tagline: 'Turn local hail and wind storms into full insurance roof replacements.',
    description: 'When severe weather hits your market, speed is everything. We can launch targeted storm campaigns within 24 hours of a hail event, targeting exact neighborhood storm paths to book insurance claims before out-of-state storm chasers arrive.',
    accent: 'emerald',
    stats: { primary: '24h', label: 'Storm Campaign Launch', secondary: '45+', subLabel: 'Claims per Storm' },
    features: [
      'Rapid Deployment to Hail-Hit Zip Codes',
      'Insurance Claim Assistance Messaging',
      'Free Roof Inspection Offer Funnels',
      'Protects Your Territory from Out-of-State Storm Chasers'
    ],
    badge: 'STORM RESPONSE'
  }
];

export const WORKFLOW_NODES = [
  {
    step: '01',
    title: 'LOCAL HOMEOWNER CLICKS',
    desc: 'Homeowner in your service area sees your Google or Facebook ad and requests an estimate',
    badge: 'EXCLUSIVE LEAD',
    type: 'trigger',
  },
  {
    step: '02',
    title: 'INSTANT 45-SEC TEXT',
    desc: 'System immediately texts homeowner: "Hey John! Saw you requested a roof inspection..."',
    badge: '<45s SPEED',
    type: 'process',
  },
  {
    step: '03',
    title: 'ESTIMATE ON YOUR CALENDAR',
    desc: 'Homeowner confirms a date/time; satellite roof view and address pop up on your estimator\'s phone',
    badge: 'CONFIRMED',
    type: 'decision',
  },
  {
    step: '04',
    title: 'YOU INSPECT & CLOSE JOB',
    desc: 'Your sales rep walks the roof, delivers the estimate, and closes an average $14,000+ replacement',
    badge: 'SIGNED CONTRACT',
    type: 'action',
  }
];

export const CASE_STUDIES = [
  {
    id: 'titan-roofing',
    client: 'TITAN PEAK ROOFING',
    location: 'Austin & Central Texas',
    specialty: 'Residential Re-Roofs & Shingles',
    tagline: 'From 5 Re-Roofs a Month to 24 Consistent Replacements ($330k/mo Revenue)',
    beforeMetric: '5 Jobs / mo',
    afterMetric: '24 Jobs / mo',
    avgTicket: '$13,800 Avg Ticket',
    costPerEstimate: '$58 per Inspection',
    channels: ['Google Search Ads', 'Facebook Video Ads', 'Instant Text Follow-Up'],
    summary: 'Titan Peak was tired of paying Angi and HomeAdvisor for shared leads where 6 roofers were undercutting each other. We built them a dedicated Google Ads campaign and instant text follow-up system. In month 2, they closed 24 roof replacements.',
  },
  {
    id: 'summit-commercial',
    client: 'SUMMIT RIDGE ROOFING',
    location: 'Denver, Colorado',
    specialty: 'Commercial TPO & Flat Roofs',
    tagline: '$1.2M in Commercial TPO & Metal Contracts Signed in 90 Days',
    beforeMetric: '$45k / mo',
    afterMetric: '$410k / mo',
    avgTicket: '$48,000 Avg Ticket',
    costPerEstimate: '$140 per Lead',
    channels: ['Google Search Commercial', 'High-Converting Web Funnel', 'Review Automation'],
    summary: 'Summit wanted high-ticket commercial building owners, warehouse managers, and HOA boards instead of small repair calls. We built a targeted commercial Google Search campaign that landed three massive flat-roof replacements in their first 90 days.',
  },
  {
    id: 'shield-guard',
    client: 'SHIELD GUARD RESTORATION',
    location: 'Dallas / Fort Worth, TX',
    specialty: 'Hail & Wind Storm Damage',
    tagline: '52 Approved Insurance Roof Replacements Booked After Spring Hail Storms',
    beforeMetric: 'Unpredictable',
    afterMetric: '52 Full Claims',
    avgTicket: '$16,500 Avg Claim',
    costPerEstimate: '$42 per Inspection',
    channels: ['Storm Swath Targeting', 'Facebook Video Showcases', 'Automated Booking'],
    summary: 'When severe hail hit North Texas, we had Shield Guard\'s campaigns live in targeted zip codes within 18 hours. They booked 52 full insurance roof replacements before door-to-door competitors even showed up.',
  }
];

export const CLIENT_LOGOS = [
  { name: 'TITAN PEAK ROOFING', city: 'AUSTIN, TX' },
  { name: 'SUMMIT RIDGE ROOFING', city: 'DENVER, CO' },
  { name: 'SHIELD GUARD RESTORATION', city: 'DALLAS, TX' },
  { name: 'APEX ROOFING & SOLAR', city: 'TAMPA, FL' },
  { name: 'BLUE SKY COMMERCIAL', city: 'PHOENIX, AZ' },
  { name: 'HERITAGE SHINGLE CO', city: 'CHARLOTTE, NC' },
];

export const TYPEWRITER_PHRASES = [
  'MORE EXCLUSIVE ROOF REPLACEMENTS ON YOUR CALENDAR.',
  'STOP BUYING JUNK SHARED LEADS FROM ANGI & HOMEADVISOR.',
  'WE RUN ADS & BUILD SITES THAT MAKE HOMEOWNERS CALL YOU.',
  'INSTANT 45-SECOND TEXT & CALL LEAD FOLLOW-UP.',
  'HIGH-TICKET RESIDENTIAL & COMMERCIAL ROOFING JOBS.'
];
