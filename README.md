# Habot Learning Support Provider Directory

A modern and responsive web module built with **Next.js** and **TypeScript** that helps parents browse and discover learning support providers for children with learning difficulties. Built for the Habot Connect DMCC frontend assignment.

## ✨ Features

- 🔍 **Search & Filter**: Find providers by name, category, or location.
- 📋 **Provider Listing**: Clean and responsive grid display with ratings and categories.
- 📄 **Provider Detail View**: Full page with details, services offered, contact info, and image.
- 🧠 **Local API Simulation**: Data is fetched from a local JSON file to mimic API behavior.
- 🎨 **Styled with Tailwind CSS**: Fully responsive and visually clean UI.
- ⚛️ **Built with Next.js + React Hooks + TypeScript**

---

## 📁 Project Structure

HABOT-PROVIDER-DIRECT/
├── components/ # Reusable UI components (Header, Footer, ProviderCard)
├── data/ # Local JSON data (providers.json)
├── pages/ # Next.js pages (listing, detail)
│ └── providers/
│ ├── index.tsx # Provider listing page
│ └── [id].tsx # Provider detail page
├── public/images/ # Static images for providers
├── styles/ # Global styles (Tailwind setup)
├── types/ # TypeScript types (Provider type)
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json # TypeScript configuration
└── README.md # Project instructions

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/habot-provider-directory.git
cd habot-provider-directory
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn
3. Run the Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Open http://localhost:3000/providers in your browser.

📦 Tech Stack
React with Hooks

Next.js for routing and SSR

TypeScript

Tailwind CSS for styling

JSON as simulated backend API

🔧 Simulated API
Data is sourced from /data/providers.json and imported into pages to simulate an asynchronous API fetch.

🧠 Possible Improvements
Add loading skeletons / shimmer on fetch

Add pagination or infinite scroll

Add categories page or filters sidebar

Move provider data fetching logic to a custom hook

📄 License
This project is built for assignment/demo purposes and is not licensed for commercial use.

🙌 Acknowledgements
Inspired by the mission of Habot Connect DMCC to simplify access to specialized learning support for children across India.