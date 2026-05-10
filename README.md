# Extreme Explorers - Global Adventure Platform

A comprehensive blogging and exploration platform for the world's most dangerous and beautiful destinations. Share your adventures, read deep insights from fellow explorers, and discover places that push human limits.

## Features

### Content & Reading
- **Multi-destination coverage**: Amazon Rainforest, Sahara Desert, Mount Everest, Antarctica, Death Valley, and more
- **Deep, comprehensive guides**: 10,000+ word articles with detailed survival information
- **Interactive reading experience**: Highlight and annotate text while reading
- **Rich image galleries**: Multiple high-quality images from the internet for each story
- **Markdown support**: Beautiful formatted content with headings, lists, and emphasis

### User Experience
- **Blog writing**: Create and share your adventure stories with markdown editor
- **Auto-save drafts**: Never lose your work with automatic local storage saving
- **Search functionality**: Find places and stories quickly
- **Responsive design**: Beautiful experience on all devices
- **Modern UI/UX**: Smooth animations and intuitive navigation

### Information
- **Comprehensive place details**: Climate, dangers, highlights, survival tips, equipment needed
- **Real-world adventure stories**: Detailed accounts from actual expeditions
- **Survival techniques**: Practical tips for extreme environments
- **Wildlife guides**: Information about dangerous animals and plants
- **Medical preparedness**: Health considerations for each destination

## Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, custom animations
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Performance**: Image optimization, SWC minification, compression

## Destinations Covered
- 🌿 Amazon Rainforest - World's largest tropical rainforest
- 🏜️ Sahara Desert - Largest hot desert on Earth
- 🏔️ Mount Everest - World's highest mountain
- ❄️ Antarctica - Coldest, driest continent
- 🔥 Death Valley - Hottest place in North America

## Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open http://localhost:9002

## Project Structure
```
src/
├── app/              # Next.js app directory
│   ├── blog/         # Blog pages (list, write, individual posts)
│   ├── places/       # Place pages (list, individual places)
│   └── about/        # About page
├── components/       # Reusable UI components
│   ├── layout/       # Header, footer components
│   ├── ui/           # shadcn/ui components
│   └── search-bar.tsx # Search functionality
├── lib/             # Utilities and data
│   └── data.ts      # Centralized data (places, blogs, images)
└── hooks/           # Custom React hooks
```

## Key Features Explained

### Text Highlighter
- Highlight important passages in 4 colors (yellow, green, blue, pink)
- Add personal notes to highlighted text
- Export your notes as a text file
- All highlights saved to localStorage for persistence

### Blog Writing
- Markdown toolbar with formatting buttons
- Live preview mode
- Auto-save every second to localStorage
- Drafts automatically loaded on return
- Image upload support

### Performance Optimizations
- AVIF and WebP image formats
- Image compression and caching
- SWC minification
- Gzip compression
- Centralized data structure

## Recent Updates
- ✅ Added text highlighting and annotation tool for blog posts
- ✅ Expanded blog content to comprehensive 10,000+ word guides
- ✅ Added image galleries from the internet to all blog posts
- ✅ Improved blog writing experience with markdown editor and auto-save
- ✅ Removed unnecessary dependencies for faster builds
- ✅ Consolidated data files for cleaner code structure
- ✅ Added performance optimizations (image formats, compression, minification)
- ✅ Updated all image links to user-provided URLs

## Development
- **Dev server**: `npm run dev` (runs on port 9002)
- **Build**: `npm run build`
- **Start**: `npm start`
- **Lint**: `npm run lint`
- **Type check**: `npm run typecheck`

## Future Enhancements
- User authentication and profiles
- Comment and discussion system
- Social sharing integration
- Mobile app
- Real-time collaboration on blog posts
- Video content support

