---

## 📍 Major Platform Modules

### Donations & Resources
<u>Users can explore and contribute various resource types</u>—blood, food, clothing, books, furniture, electronics, medical supplies, and more. Each resource category has its own discovery flow.

### Volunteer Opportunities
<u>Discover volunteer opportunities</u> filtered by location, cause, category, urgency, required skills, and campaign type. Examples include community cleanups, blood drives, food distribution, disaster response, education programs, and environmental projects.

### NGO Discovery
<u>Browse and explore registered NGOs</u>, their causes, active campaigns, donation opportunities, and volunteer needs. Learn about organizations making a difference in your community.

### Campaigns
<u>Organizations can create targeted campaigns</u> around specific causes. Each campaign includes title, description, required resources, volunteer requirements, urgency level, and progress tracking.

### Explore & Search
<u>The Explore page is the central discovery hub</u>, offering:
- **Search:** Find donations, blood requests, opportunities
- **Category Filtering:** Blood, food, clothing, medical supplies, and more
- **Location Filtering:** Province, district, municipality-level filtering
- **Map-based Discovery:** Geographic visualization of opportunities
- **Advanced Filters:** Urgency, blood group, opportunity type, and more

### User Dashboard
<u>A centralized hub for user activity and impact tracking</u>:
- Profile summary and personal information
- Donation history and activity
- Volunteer experience and commitments
- Community Impact Score overview
- Notifications and upcoming events
- Saved and recommended opportunities
- Contribution statistics

### Community Impact Score
<u>A recognition system that quantifies community contributions</u> through:
- Blood donations
- Food and resource donations
- Volunteering hours and activities
- Campaign participation
- Helping verified requests

### Community Leaderboard
<u>A gamified ranking system</u> that celebrates top contributors. Users are ranked based on contribution activity and impact, encouraging meaningful community participation.

---

## 🎨 Design & Animation Philosophy

### Visual Design
<u>Help.com emphasizes a clean, modern, dark-focused aesthetic</u> with:
- Strong typography and hierarchy
- High contrast for readability
- Minimal clutter and distraction
- Responsive layouts across all devices
- Intentionally minimal use of gradients and glassmorphism

### Interaction Design
<u>Animation is integral to the Help.com experience</u>, using GSAP for:
- Page entrance animations
- Scroll-triggered effects
- Navigation transitions
- Hover interactions and button feedback
- Animated cards and reveals
- Smooth scrolling and micro-interactions

**Philosophy:** Animation improves usability and engagement rather than serving as mere decoration.

### Responsive Design
<u>Help.com is fully responsive</u> across:
- Desktop and laptop browsers
- Tablets and mobile devices
- Touch-friendly interactions
- Adaptive layouts and navigation

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React, TypeScript/TSX, React Router | User interface and navigation |
| **Styling & Animation** | CSS, GSAP | Design and interactive animations |
| **Backend** | Node.js, Express.js | API server and business logic |
| **Database** | MongoDB | Data persistence and storage |
| **Integration** | REST APIs | Frontend-backend communication |

---

## 🗂️ Project Structure

<u>Frontend Integration:</u> The frontend is connected to backend APIs for campaigns, NGOs, volunteers, donations, and user management. Demo data is used where appropriate to ensure a complete experience for judges.

<u>Backend Coverage:</u> APIs support authentication, donations, volunteer opportunities, NGO management, campaigns, requests, notifications, and user profiles.

---

## 🔐 Demo Authentication

> **⚠️ Hackathon Project:** This is a prototype for demonstration purposes. Production-grade authentication and security measures are not implemented.

### Demo Credentials

**Admin Account**
- **Email:** `admin@gmail.com`
- **Password:** `admin`
- Full platform access to explore all features and admin functionality.

### Demo User Flow
A separate demo user experience is available for judges to explore donor and volunteer functionality without requiring additional credentials.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance

### Installation
```bash
git clone [repository-url]
cd help.com

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the Application
```bash
# Start backend server (from backend directory)
npm start

# Start frontend development server (from frontend directory)
npm start
```

The application will be available at `http://localhost:3000` (frontend) with the backend API on `http://localhost:5000`.

### Main Routes
- **Landing Page:** Home and platform overview
- **About:** Project information and mission
- **Explore:** Central discovery hub
- **Volunteers:** Volunteer opportunities
- **NGOs:** Organization discovery
- **Campaigns:** Active campaigns
- **Donations:** Resource donation options
- **Dashboard:** User activity and impact
- **Leaderboard:** Community rankings

---

## 🗺️ Project Vision

**Anyone can give. Anyone can volunteer. Anyone can make an impact.**

Help.com aims to remove barriers between people who want to help and people who need assistance. By centralizing donations, volunteering, and community engagement, the platform makes it easier to participate in meaningful ways.

---

## 🔮 Future Roadmap

<u>The following features are under consideration for future development:</u>

- → Production-grade authentication and authorization
- → Identity and NGO verification systems
- → Online financial donations
- → Real-time location tracking for emergencies
- → Emergency blood request notifications
- → Native mobile applications (iOS/Android)
- → Push notifications
- → AI-powered opportunity matching
- → Fraud detection and prevention
- → Advanced analytics and impact reporting
- → Multi-language support
- → Nepali language localization
- → Improved geographic matching algorithms
- → Digital contribution certificates and badges

---

## 📝 Notes

**Demo Data:** The leaderboard and some dashboard features use demo data to immediately showcase functionality to judges.

**Development Status:** Help.com is a hackathon project demonstrating core concepts and MVP-level functionality. Some features use demo data where backend integration is still in progress.

---

**Help.com** — Connecting helpers with those in need, one platform at a time.
