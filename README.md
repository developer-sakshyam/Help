# <u>Help.com</u>

### <u>Donate. Volunteer. Connect. Create Impact.</u>

Help.com is a humanitarian platform that connects people who want to help with people, NGOs, organizations, and communities that need assistance. Instead of forcing users to navigate multiple platforms for blood donations, food drives, volunteering opportunities, and campaigns, Help.com brings diverse forms of community support into one centralized ecosystem.

___

## <u>🎯 Core Concept</u>

### <u>The Problem</u>

People often want to help but don't know where to start. They struggle to find who needs help, what to donate, where to volunteer, or which organizations are active. Simultaneously, organizations needing assistance struggle to reach donors and volunteers.

___

### <u>The Solution</u>

**One platform. Multiple ways to contribute. Maximum impact.**

___

## <u>✨ Key Features</u>

### <u>Donation & Resource Support</u>

- 🩸 Blood donation and emergency blood requests
- 🍱 Food donation
- 👕 Clothing donation
- 📚 Books and educational resources
- 🏥 Medical supplies
- 🪑 Furniture
- 💻 Electronics
- 🏠 Shelter resources
- 💰 Financial assistance coordination

___

### <u>Community Engagement</u>

- 🙋 Volunteer opportunities discovery
- 🏢 NGO discovery and exploration
- 📢 Community campaigns
- 🌍 Location/map-based opportunity discovery
- 📊 User dashboard with activity tracking
- 🏆 Community leaderboard
- ⭐ Community Impact Score
- 🔔 Notifications system
- 📅 Upcoming events and opportunities

___

### <u>Platform Experience</u>

- 🔎 Advanced search and filtering
- 📍 Geographic filtering (Province, District, Municipality)
- 📱 Fully responsive design
- 🎬 Smooth animations and interactions

___

## <u>🏗️ Platform Architecture</u>

```
┌─────────────────────────────────────────────────────────┐
│                   Frontend (React + TSX)                 │
│  Landing → Explore → Dashboard → Leaderboard → NGOs     │
└──────────────────────────┬──────────────────────────────┘
                           │
                  REST API Integration
                           │
┌──────────────────────────▼──────────────────────────────┐
│         Backend (Node.js + Express.js)                   │
│  Auth → Donations → Volunteers → NGOs → Campaigns → etc │
└──────────────────────────┬──────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────┐
│              Database (MongoDB)                          │
│     Users → Donations → Campaigns → Leaderboard          │
└─────────────────────────────────────────────────────────┘
```

___

## <u>📍 Major Platform Modules</u>

### <u>Donations & Resources</u>

Users can explore and contribute various resource types—blood, food, clothing, books, furniture, electronics, medical supplies, and more. Each resource category has its own discovery flow.

___

### <u>Volunteer Opportunities</u>

Discover volunteer opportunities filtered by location, cause, category, urgency, required skills, and campaign type. Examples include community cleanups, blood drives, food distribution, disaster response, education programs, and environmental projects.

___

### <u>NGO Discovery</u>

Browse and explore registered NGOs, their causes, active campaigns, donation opportunities, and volunteer needs. Learn about organizations making a difference in your community.

___

### <u>Campaigns</u>

Organizations can create targeted campaigns around specific causes. Each campaign includes title, description, required resources, volunteer requirements, urgency level, and progress tracking.

___

### <u>Explore & Search</u>

The Explore page is the central discovery hub, offering:

- **Search:** Find donations, blood requests, opportunities
- **Category Filtering:** Blood, food, clothing, medical supplies, and more
- **Location Filtering:** Province, district, municipality-level filtering
- **Map-based Discovery:** Geographic visualization of opportunities
- **Advanced Filters:** Urgency, blood group, opportunity type, and more

___

### <u>User Dashboard</u>

A centralized hub for user activity and impact tracking:

- Profile summary and personal information
- Donation history and activity
- Volunteer experience and commitments
- Community Impact Score overview
- Notifications and upcoming events
- Saved and recommended opportunities
- Contribution statistics

___

### <u>Community Impact Score</u>

A recognition system that quantifies community contributions through:

- Blood donations
- Food and resource donations
- Volunteering hours and activities
- Campaign participation
- Helping verified requests

___

### <u>Community Leaderboard</u>

A gamified ranking system that celebrates top contributors. Users are ranked based on contribution activity and impact, encouraging meaningful community participation.

___

## <u>🎨 Design & Animation Philosophy</u>

### <u>Visual Design</u>

Help.com emphasizes a clean, modern, dark-focused aesthetic with:

- Strong typography and hierarchy
- High contrast for readability
- Minimal clutter and distraction
- Responsive layouts across all devices
- Intentionally minimal use of gradients and glassmorphism

___

### <u>Interaction Design</u>

Animation is integral to the Help.com experience, using GSAP for:

- Page entrance animations
- Scroll-triggered effects
- Navigation transitions
- Hover interactions and button feedback
- Animated cards and reveals
- Smooth scrolling and micro-interactions

**Philosophy:** Animation improves usability and engagement rather than serving as mere decoration.

___

### <u>Responsive Design</u>

Help.com is fully responsive across:

- Desktop and laptop browsers
- Tablets and mobile devices
- Touch-friendly interactions
- Adaptive layouts and navigation

___

## <u>🛠️ Technology Stack</u>

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React, TypeScript/TSX, React Router | User interface and navigation |
| **Styling & Animation** | CSS, GSAP | Design and interactive animations |
| **Backend** | Node.js, Express.js | API server and business logic |
| **Database** | MongoDB | Data persistence and storage |
| **Integration** | REST APIs | Frontend-backend communication |

___

## <u>🗂️ Project Structure</u>

**Frontend Integration:** The frontend is connected to backend APIs for campaigns, NGOs, volunteers, donations, and user management. Demo data is used where appropriate to ensure a complete experience for judges.

___

**Backend Coverage:** APIs support authentication, donations, volunteer opportunities, NGO management, campaigns, requests, notifications, and user profiles.

___

## <u>🔐 Demo Authentication</u>

> **⚠️ Hackathon Project:** This is a prototype for demonstration purposes. Production-grade authentication and security measures are not implemented.

___

### <u>Demo Credentials</u>

**Admin Account**
- **Email:** `admin@gmail.com`
- **Password:** `admin`
- Full platform access to explore all features and admin functionality.

___

### <u>Demo User Flow</u>

A separate demo user experience is available for judges to explore donor and volunteer functionality without requiring additional credentials.

___

## <u>🚀 Getting Started</u>

### <u>Prerequisites</u>

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance

___

### <u>Installation</u>

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

___

### <u>Running the Application</u>

```bash
# Start backend server (from backend directory)
npm start

# Start frontend development server (from frontend directory)
npm start
```

The application will be available at `http://localhost:3000` (frontend) with the backend API on `http://localhost:5000`.

___

### <u>Main Routes</u>

- **Landing Page:** Home and platform overview
- **About:** Project information and mission
- **Explore:** Central discovery hub
- **Volunteers:** Volunteer opportunities
- **NGOs:** Organization discovery
- **Campaigns:** Active campaigns
- **Donations:** Resource donation options
- **Dashboard:** User activity and impact
- **Leaderboard:** Community rankings

___

## <u>🗺️ Project Vision</u>

**Anyone can give. Anyone can volunteer. Anyone can make an impact.**

Help.com aims to remove barriers between people who want to help and people who need assistance. By centralizing donations, volunteering, and community engagement, the platform makes it easier to participate in meaningful ways.

___

## <u>🔮 Future Roadmap</u>

The following features are under consideration for future development:

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

___

## <u>📝 Notes</u>

**Demo Data:** The leaderboard and some dashboard features use demo data to immediately showcase functionality to judges.

___

**Development Status:** Help.com is a hackathon project demonstrating core concepts and MVP-level functionality. Some features use demo data where backend integration is still in progress.

___

---

<p align="center">
  <strong>Help.com</strong> — Connecting helpers with those in need, one platform at a time.
</p>
