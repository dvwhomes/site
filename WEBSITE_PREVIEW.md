# Approved website design implementation — review build

Base commit: 218a11d27b5fdeef1a6a6c9d0443911dc54eff9d
Branch: website-approved-design-preview
Status: local implementation; not pushed, not published.

## Design authority
Latest approved roomy image from this conversation: exec-c72fd20a-23b6-4e38-8dbe-e05fee082cc1.png. Current user instructions supersede older website blueprints. Layout is locked; changes are for content fitting, usability, and accessibility only. Sage supported by Everyman and Creator.

## Implemented
- Existing static HTML/CSS/JS structure retained; no framework or deployment changes.
- Navy #10306B, blue-gray #C3CBDA, orange #F36C21; filled buttons.
- Existing portrait and logo assets, matching section subheadings, mirrored navigation bands.
- Four philosophy rows; six roles nested in Expect More; analysis link beneath data principle.
- Specific buyer/seller service descriptions; callback, newsletter, and message form layouts.
- Mobile CSS, accessible labels, keyboard menu, visible focus, reduced-motion support.
- FAQ moved to /faq/ with copied draft content and two corrections: 16 years at Prairie Meadows is not described as 16 years as Director; service area is metro-wide.
- Existing /neighborhood-newsletter/ files unchanged.
- Real figures retain user-supplied numbers. Reporting period added from 2026 RealTrends ranking (2025 production); No. 5 is labeled by sales volume. Source: https://www.realtrends.com/ranking/best-real-estate-agents-united-states/brokerages-by-volume/
- Orange button text is dark navy for readable contrast.

## Validation completed
- Local asset and internal link targets checked.
- Form labels and unique IDs checked.
- JSON-LD parses; obsolete FAQ structured data removed from homepage.
- JavaScript syntax and git whitespace checks pass.

## Validation NOT completed
Visual browser review, computed layout/overflow, mobile menu interaction, and form interaction. Local Chromium was unavailable; browser security policy blocked local-file review. Do not claim desktop/mobile browser QA passed.

## Launch items
1. Review final copy in context, including $80M project total (user's latest supplied figure), roles, and services.
2. Configure callback/message delivery and newsletter destination; test delivery, validation, errors, and spam prevention. Current handlers are deliberately preview-only and never report success.
3. Complete market-analysis destination and approved reports. Current route is explicitly a preview placeholder.
4. Choose approved/licensed skyline image for lower-right footer. No substitute stock photo was introduced.
5. Confirm launch navigation: Selling Strategy/Home Prep currently point to the services section; separate detail pages remain future work.
6. Confirm brokerage disclosure/privacy language, official logo variants, and external links.
7. Complete desktop/mobile browser and accessibility QA; add finalized routes to sitemap.
8. Obtain explicit publication approval before merge to main. Preserve existing Cloudflare configuration.

## Review artifact
A separately packaged HTML preview embeds fonts and assets and opens FAQ/market destination previews in dialogs. It is a review export, not the production index. The repository remains authoritative for implementation.

## Visual fidelity correction
The first HTML preview was rejected for differing typography, spacing, and alignment. The revised CSS uses proportional dimensions measured from the approved image: 605/731 content width, 204/731 portrait width, 38/731 portrait-to-copy gap, top-aligned hero, centered career heading, and unified 20-unit section headings. Public Sans replaced by Arial/Helvetica styling to better approximate the raster reference. Message field labels remain accessible but no longer add visible rows. Copy unchanged. Browser visual verification remains outstanding; this is a correction pass, not a verified pixel match.
