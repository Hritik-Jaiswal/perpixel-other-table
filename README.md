# Other Table

A self-initiated, fictional restaurant concept by PerPixel. This repository is the independent Next.js application intended for `ot.perpixel.agency`.

## Run locally

Use Node.js 22.13 or newer in the 22.x line. Then:

```bash
npm ci
npm run dev
```

Visit `http://localhost:3000`. Check `npm run lint` and `npm run build` before deployment.

## Structure

- `src/app/`: homepage, menu, restaurant, gatherings, reserve and visit routes; root layout and scoped visual system.
- `src/components/`: menu filter, reservation simulator and gatherings enquiry preview.
- `src/lib/other-table.ts`: illustrative menu content and INR prices.
- `public/images/`: original concept imagery generated for this project and optimized to WebP.
- `public/graphics/`: original invitation seal, table etching and olive illustration used across the site.

The tablet and mobile header uses a keyboard-accessible native dialog. The footer wordmark and selected imagery respond continuously to scroll position; reduced-motion visitors see static treatments. Keep animation work in `src/components/OtherTableMotion.tsx` outside React render state.

There is no booking provider, enquiry backend, payment, live address or real restaurant behind this demo. Reservation times and private dining formats are examples. The forms do not collect or send personal details. Restaurant pages have `noindex` metadata while the concept remains fictional.

The PerPixel case study lives separately at `perpixel.agency/case-studies/other-table`. Its synthetic legacy-site comparison is clearly labelled, and the case study should link to `https://ot.perpixel.agency` once the subdomain is live. The studio should own DNS and hosting configuration; this repository contains no credentials.

## Before a real restaurant launch

Replace sample dishes, prices, hours, capacity, access details and photography as needed with operator-approved information. Connect availability and confirmation to an authorized booking provider. Add consent, secure submission and a staffed response process for enquiries. Verify accessibility, responsive layouts and performance in production.
