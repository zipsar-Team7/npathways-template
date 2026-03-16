# Bootcamp Calendar and Map Views - Implementation Guide

## Overview

This implementation adds comprehensive bootcamp session management with:

- **Online/Offline Categorization**: Filter bootcamps by delivery mode
- **Calendar View**: Interactive monthly calendar showing available sessions
- **Map View**: Interactive map with markers for offline locations
- **Grid View**: Traditional card-based layout
- **JSON Data Structure**: Clean, API-ready data format

## Files Created

### Data Layer

- `src/data/bootcamps.json` - Sample bootcamp data with 8 sessions (4 online, 4 offline)
- `src/data/bootcampHelpers.js` - Helper functions for filtering and data manipulation

### Components

- `src/components/bootcamp/BootcampCard.jsx` - Reusable bootcamp session card
- `src/components/bootcamp/BootcampCard.css` - Card styles
- `src/components/bootcamp/BootcampCalendar.jsx` - Calendar component
- `src/components/bootcamp/BootcampCalendar.css` - Calendar styles
- `src/components/bootcamp/BootcampMap.jsx` - Map component with Leaflet
- `src/components/bootcamp/BootcampMap.css` - Map styles

### Pages

- `src/pages/ecommerce/categories/BootcampList.jsx` - Main bootcamp page (updated)
- `src/pages/ecommerce/categories/BootcampList.css` - Page-specific styles

## Dependencies Added

```json
{
  "leaflet": "^1.9.4",
  "react-leaflet": "^4.2.1",
  "date-fns": "^3.0.0"
}
```

## Data Structure

The `bootcamps.json` file contains an array of bootcamp objects with the following structure:

```json
{
  "bootcamps": [
    {
      "id": "unique-id",
      "name": "Bootcamp Name",
      "type": "online|offline",
      "description": "Description",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "time": "HH:MM - HH:MM IST",
      "duration": "X Weeks",
      "mode": "Live Online Sessions|In-Person Workshop",
      "price": 14999,
      "currency": "INR",
      "capacity": 30,
      "enrolled": 18,
      "instructor": "Instructor Name",
      "platform": "Zoom|Google Meet", // for online only
      "location": {
        // for offline only
        "venue": "Venue Name",
        "address": "Full Address",
        "city": "City Name",
        "coordinates": {
          "lat": 12.9352,
          "lng": 77.6245
        }
      },
      "features": ["Feature 1", "Feature 2"],
      "prerequisites": "Prerequisites",
      "image": "https://image-url.com/image.jpg"
    }
  ]
}
```

## API Integration

To replace the JSON file with an API:

1. **Update** `src/data/bootcampHelpers.js`:

   ```javascript
   // Replace the import
   // import bootcampsData from './bootcamps.json';

   // Add API fetch
   const API_BASE_URL = "https://your-api.com/api";

   export const getAllBootcamps = async () => {
     const response = await fetch(`${API_BASE_URL}/bootcamps`);
     const data = await response.json();
     return data.bootcamps || [];
   };
   ```

2. **Update components** to handle async data:

   ```javascript
   const [bootcamps, setBootcamps] = useState([]);

   useEffect(() => {
     getAllBootcamps().then(setBootcamps);
   }, []);
   ```

## Features

### View Modes

1. **Grid View**: Card-based layout with all bootcamp details
2. **Calendar View**: Monthly calendar with color-coded indicators (blue for online, green for offline)
3. **Map View**: Interactive map showing offline bootcamp locations with markers

### Filters

- **All**: Show all bootcamps
- **Online**: Show only online bootcamps
- **Offline**: Show only offline bootcamps

### Calendar Features

- Month navigation (previous/next buttons)
- Color-coded indicators for online/offline sessions
- Click on dates to view bootcamps scheduled
- Responsive grid layout

### Map Features

- Custom black markers for locations
- Popup details on marker click
- View full details button in popup
- Automatic zoom to India
- Offline-only (shows notice for online filter)

### Modal

- Single bootcamp details view
- Multiple bootcamps list view (when clicking a date with multiple bootcamps)
- Comprehensive information display
- Registration CTA button
- Capacity indicator

## Responsive Design

- Desktop: Full features with side-by-side layouts
- Tablet: Adjusted grid columns and spacing
- Mobile: Stacked layouts, simplified navigation

## Usage

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Navigate to
http://localhost:5173/products/bootcamps
```

## Customization

### Adding More Bootcamps

Edit `src/data/bootcamps.json` and add more objects to the `bootcamps` array.

### Changing Map Provider

Replace Leaflet with Google Maps or Mapbox in `BootcampMap.jsx`.

### Styling

All colors follow the B&W theme. Modify CSS files for custom branding.

## Future Enhancements

- Add search functionality
- Add date range filter
- Add city/location filter for map view
- Add booking/registration integration
- Add instructor profiles
- Add reviews and ratings
- Add favorite/bookmark feature
