# Quick Start Guide

## Running the Development Server

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Key Pages

- **Homepage**: `/` - Main landing page with services and information
- **Booking Page**: `/book` - Find and book appointments with practitioners

## Features to Test

### Homepage
- ✅ Hero section with call-to-action buttons
- ✅ Services grid (8 services displayed)
- ✅ Why Choose Us section
- ✅ Treatment process (4 steps)
- ✅ Customer testimonials
- ✅ Final CTA section

### Booking Page
- ✅ Search practitioners by name or specialty
- ✅ Filter by specialty
- ✅ View practitioner profiles
- ✅ See available appointment slots
- ✅ Book appointments (opens Jane App in new tab)

### Chatbot
- ✅ Click the chat button (bottom right)
- ✅ Ask questions about services
- ✅ Book appointments through chat
- ✅ Quick action buttons

## Customization

### Update Brand Colors
Edit `tailwind.config.ts` - modify the `primary`, `secondary`, and `accent` color values.

### Update Services
Edit `components/Services.tsx` - modify the `services` array.

### Update Practitioners
Edit `components/BookingPage.tsx` - modify the `practitioners` array. In production, connect to Jane App API.

### Update Contact Information
Edit `components/Footer.tsx` and `components/CTA.tsx` for phone numbers and email addresses.

## Jane App Integration

The booking system integrates with Jane App at `https://bodymotion.janeapp.co.uk/`. 

- Booking buttons open Jane App in a new tab
- User information is passed via URL parameters when available
- The booking page maintains your website's URL structure

## Production Deployment

### Build for Production
```bash
npm run build
```

### Test Production Build
```bash
npm start
```

### Deploy to Vercel
1. Push code to GitHub
2. Import to Vercel
3. Deploy automatically

## Next Steps

1. Replace mock practitioner data with real data from Jane App API
2. Add actual practitioner images
3. Customize colors to match your exact brand
4. Add more content to services pages
5. Set up analytics tracking
6. Configure SEO metadata

