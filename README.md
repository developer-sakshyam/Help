# <u>Help.com</u>

<div align="center">

![Help.com Logo](https://img.shields.io/badge/Help.com-Humanitarian%20Platform-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Hackathon%20Project-orange?style=for-the-badge)

</div>

### <u>Donate. Volunteer. Connect. Create Impact.</u>

Help.com is a humanitarian platform that connects people who want to help with people, NGOs, organizations, and communities that need assistance. Instead of forcing users to navigate multiple platforms for blood donations, food drives, volunteering opportunities, and campaigns, Help.com brings diverse forms of community support into one centralized ecosystem.

___

## <u>🎯 Core Concept</u>

### <u>The Problem</u>

- **Fragmentation:** People searching for multiple platforms to help
- **Inefficiency:** NGOs struggling to reach donors and volunteers
- **Accessibility:** Communities unable to locate needed resources
- **Visibility:** Campaigns and emergency requests going unnoticed
- **Disconnection:** No unified way to track community impact

People often want to help but don't know where to start. They struggle to find who needs help, what to donate, where to volunteer, or which organizations are active. Simultaneously, organizations needing assistance struggle to reach donors and volunteers.

___

### <u>The Solution</u>

**One platform. Multiple ways to contribute. Maximum impact.**

Help.com solves this fragmentation by creating a centralized, user-friendly ecosystem where:
- **Donors** can easily discover and contribute resources
- **Volunteers** can find meaningful opportunities
- **Organizations** can reach their target audience
- **Communities** can mobilize around causes
- **Impact** is tracked, celebrated, and quantified

___

## <u>✨ Key Features</u>

### <u>Donation & Resource Support</u>

**9 Resource Categories Available:**

- 🩸 **Blood Donation** - Emergency blood requests and donor discovery
- 🍱 **Food Donation** - Food distribution and surplus donation
- 👕 **Clothing Donation** - Seasonal and emergency clothing support
- 📚 **Books & Education** - Educational resources and learning materials
- 🏥 **Medical Supplies** - Medications, medical equipment, healthcare resources

Each resource category includes:
- Resource description and specifications
- Urgency levels (Critical, High, Medium, Low)
- Location-based discovery
- Donor profiles and contact information
- Verification status
- Delivery/pickup options

___

### <u>Community Engagement</u>

**9 Core Engagement Features:**

- 🙋 **Volunteer Opportunities Discovery** - Browse by cause, location, skill requirement
- 🏢 **NGO Discovery & Profiles** - Complete NGO information and verification status
- 📢 **Community Campaigns** - Cause-based campaigns with real-time progress
- 🌍 **Location/Map-based Discovery** - Geographic visualization of opportunities
- 📊 **User Dashboard** - Centralized activity and contribution tracking
- 🏆 **Community Leaderboard** - Gamified contributor rankings
- ⭐ **Community Impact Score** - Quantified contribution metrics
- 🔔 **Notifications System** - Real-time alerts and reminders
- 📅 **Upcoming Events** - Event calendar and opportunity tracking

___

### <u>Platform Experience</u>

- 🔎 **Advanced Search & Filtering** - Multi-criteria search functionality
- 📍 **Geographic Filtering** - Province, District, Municipality-level filtering
- 📱 **Fully Responsive Design** - Mobile, tablet, and desktop optimization
- 🎬 **Smooth Animations & Interactions** - GSAP-powered animations
- 🌙 **Dark/Light Theme Support** - User preference-based theming
- ♿ **Accessibility Features** - WCAG compliance for inclusive design
- 🔐 **Secure Authentication** - Demo auth for hackathon (production-ready architecture)
- 📲 **Social Sharing** - Share opportunities across social platforms

___

## <u>🏗️ Platform Architecture</u>

```
┌─────────────────────────────────────────────────────────────────────┐
│                     FRONTEND LAYER (React + TSX)                     │
│  Landing → Auth → Explore → Dashboard → Leaderboard → NGOs → Profile │
│                                                                       │
│  Technologies: React 18+, TypeScript, React Router, GSAP, CSS3, Lenis │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │  REST API Gateway   │
                    │  (Express.js)       │
                    └──────────┬──────────┘
                               │
┌──────────────────────────────▼────────────────────────────────────────┐
│                    BACKEND LAYER (Node.js)                             │
│                                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                │
│  │ Auth Service │  │ Donation API │  │ Volunteer API│                │
│  └──────────────┘  └──────────────┘  └──────────────┘                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                │
│  │  NGO Service │  │Campaign API  │  │ Notification │                │
│  └──────────────┘  └──────────────┘  └──────────────┘                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                │
│  │ User Service │  │Leaderboard API│ │Search Service│                │
│  └──────────────┘  └──────────────┘  └──────────────┘                │
│                                                                        │
│  Middleware: Authentication, Validation, Error Handling, Logging     │
└──────────────────────────────┬────────────────────────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │    MongoDB Atlas    │
                    │    (Database)       │
                    └─────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │   Cloud Storage     │
                    │   (File Upload)     │
                    └─────────────────────┘
```

___

## <u>🛠️ Complete Technology Stack</u>

### <u>Frontend Stack</u>

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2+ | UI framework and component library |
| **TypeScript** | 4.9+ | Static typing and type safety |
| **React Router** | 6.x | Client-side routing and navigation |
| **GSAP** | 3.12+ | Advanced animations and interactions |
| **Axios** | 1.4+ | HTTP client for API requests |
| **Redux Toolkit** | 1.9+ | State management |
| **React Hook Form** | 7.x | Form handling and validation |
| **Zod** | Latest | Schema validation |
| **React Query** | 3.x | Server state management |
| **Tailwind CSS** | 3.3+ | Utility-first CSS framework |
| **Leaflet** | 1.9+ | Map integration |
| **Lenis** | 1.3.25 | Smooth Scrolling |
| **Date-fns** | 2.30+ | Date utilities |
| **Lodash** | 4.17+ | Utility library |
| **ESLint** | 8.x | Code linting |
| **Prettier** | 3.x | Code formatting |
| **Jest** | 29.x | Unit testing |
| **React Testing Library** | 13.x | Component testing |
| **Vite** | 4.x | Build tool (blazing fast) |

___

### <u>Backend Stack</u>

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 16+/18+ | JavaScript runtime |
| **Express.js** | 4.18+ | Web framework |
| **MongoDB** | 5.0+ | NoSQL database |
| **Mongoose** | 7.x | MongoDB ODM |
| **JWT** | Latest | Authentication tokens |
| **bcryptjs** | 2.4+ | Password hashing |
| **dotenv** | 16.x | Environment variables |
| **Cors** | 2.8+ | Cross-origin resource sharing |
| **Helmet** | 7.x | Security headers |
| **Express Validator** | 7.x | Input validation |
| **Multer** | 1.4+ | File upload handling |
| **Nodemailer** | 6.x | Email notifications |
| **Morgan** | 1.10+ | Request logging |
| **Jest** | 29.x | Unit testing |
| **Supertest** | 6.x | API testing |
| **pm2** | 5.x | Process management |

___

## <u>📍 Major Platform Modules</u>

### <u>Donations & Resources Module</u>

**Features:**
- Resource posting and discovery
- Category-based filtering (9 categories)
- Urgency level indicators
- Donor verification system
- Request tracking and status updates
- Delivery/Pickup coordination

### <u>Volunteer Opportunities Module</u>

**Features:**
- Opportunity posting and discovery
- Skill-based matching
- Location-based search
- Duration and scheduling
- Impact metrics tracking
- Experience verification

### <u>NGO Discovery Module</u>

**Features:**
- NGO profiles and verification
- Cause categorization
- Campaign browsing
- Volunteer opportunity listings
- Contact information
- Impact statistics

### <u>Campaigns Module</u>

**Features:**
- Campaign creation and management
- Target-based goal setting
- Progress tracking visualization
- Real-time contribution updates
- Impact measurement

### <u>Explore & Search Hub</u>

**Search Capabilities:**
- Full-text search across all opportunities
- Category filtering (9 types)
- Location filtering (Province → District → Municipality)
- Urgency filtering
- Skill-based filtering
- Organization filtering
- Interactive map visualization
- Advanced search filters

### <u>User Dashboard Module</u>

**Dashboard Sections:**
- Profile summary and personal information
- Donation history and activity
- Volunteer experience and commitments
- Community Impact Score overview
- Notifications center
- Saved opportunities
- Recommended opportunities
- Contribution statistics

### <u>Community Impact Score System</u>

**Scoring Components:**
- Blood donations: 50-100 points each
- Food donations: 5-25 points each
- Clothing donations: 3 points per item
- Resource donations: 25-200 points
- Volunteering: 10 points per hour
- Campaign participation: 100-500 points
- Community actions: 25-150 points

**Tier Levels:**
- Bronze (0-500): Community Member
- Silver (501-1500): Active Helper
- Gold (1501-3500): Dedicated Supporter
- Platinum (3501+): Community Champion

### <u>Community Leaderboard Module</u>

**Features:**
- Real-time score calculation
- Top 100 contributors ranking
- All-time and monthly rankings
- Category-specific leaderboards
- Geographic leaderboards
- Achievement badges (25+ types)
- Streak tracking
- Milestone celebrations

___

## <u>🎨 Design & Animation Philosophy</u>

### <u>Visual Design System</u>

**Color Palette:**
- Primary Blue: #2563eb
- Dark Blue: #1e40af
- Success Green: #10b981
- Warning Orange: #f59e0b
- Error Red: #ef4444
- Neutral Dark: #1f2937
- Neutral Light: #f9fafb

**Typography:**
- Headlines: -apple-system, BlinkMacSystemFont, Segoe UI
- Body: Roboto, Helvetica Neue, Arial
- Monospace: Courier New
- Line Height: 1.6 body, 1.5 code

**Responsive Breakpoints:**
- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px - 1440px
- Wide: 1441px+

### <u>Animation Strategy</u>

**GSAP Animation Types:**
- Page entrance animations (0.3s fade-in)
- Scroll-triggered effects with parallax
- Navigation transitions (0.5s)
- Button hover states (1.05x scale)
- Card animations on load
- Interactive micro-interactions
- Loading states and spinners
- Success/error animations

**Performance Optimizations:**
- GPU acceleration enabled
- Reduced motion support
- Debounced scroll events
- Lazy loading for animations

___

## <u>🚀 Getting Started</u>

### <u>System Prerequisites</u>

**Required:**
- Node.js 16+ or 18+
- npm 8+ or yarn 3+
- MongoDB 5.0+
- Git 2.0+
- Modern web browser

**Optional:**
- Docker and Docker Compose
- MongoDB Compass
- Postman for API testing
- VS Code (recommended)

### <u>Installation Steps</u>

**1. Clone Repository:**
```bash
git clone https://github.com/help-com/help.com.git
cd help.com
```

**2. Backend Setup:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with MongoDB connection string
npm run dev        # Development
npm start          # Production
```

**3. Frontend Setup:**
```bash
cd ../frontend
npm install
cp .env.example .env.local
# Edit .env.local with API endpoint
npm run dev        # Runs on http://localhost:5173
```

### <u>Environment Configuration</u>

**Backend .env:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/helpcom
JWT_SECRET=your_jwt_secret_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
CORS_ORIGIN=http://localhost:5173
```

**Frontend .env.local:**
```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Help.com
VITE_ENVIRONMENT=development
```

### <u>Running the Application</u>

**Option 1: Manual Start**
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

**Option 2: Docker Compose**
```bash
docker-compose up --build
```

**Access Points:**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`
- MongoDB: `mongodb://localhost:27017/helpcom`

___

### <u>Demo Credentials</u>

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@gmail.com | admin |
| **Donor** | donor@example.com | donor123 |
| **Volunteer** | volunteer@example.com | volunteer123 |
| **NGO** | ngo@example.com | ngo123 |

___

### <u>Main Routes</u>

**Public:**
- `/` - Landing page
- `/about` - About Help.com
- `/explore` - Discovery hub
- `/ngos` - Browse NGOs
- `/campaigns` - View campaigns

**Authenticated:**
- `/dashboard` - User dashboard
- `/dashboard/donations` - Donation history
- `/dashboard/volunteering` - Volunteer history
- `/volunteers` - Volunteer opportunities
- `/leaderboard` - Community rankings
- `/notifications` - User notifications

**Admin:**
- `/admin/dashboard` - Admin panel
- `/admin/users` - User management
- `/admin/analytics` - Statistics

___

## <u>🗺️ Project Vision</u>

**"Anyone can give. Anyone can volunteer. Anyone can make an impact."**

Help.com aims to remove barriers between people who want to help and those who need assistance. By centralizing donations, volunteering, and community engagement, the platform makes participation easier and impact measurable.

___

## <u>🔮 Future Roadmap</u>

### <u>Phase 2: Enhanced Features (Months 3-6)</u>

- → Production authentication with 2FA
- → Identity and NGO verification
- → Email notification integration
- → Real-time notifications (Socket.io)
- → Mobile PWA version

### <u>Phase 3: Smart Features (Months 6-9)</u>

- → AI-powered opportunity matching
- → Machine learning fraud detection
- → Advanced analytics
- → Automated impact reporting

### <u>Phase 4: Financial Integration (Months 9-12)</u>

- → Online donations (Stripe, Razorpay)
- → Invoice and receipt generation
- → Tax benefit documentation

### <u>Phase 5: Mobile & Expansion</u>

- → Native iOS/Android apps
- → Push notifications
- → Emergency alert system
- → Geolocation features

### <u>Phase 6: Localization</u>

- → Multi-language support
- → Regional customization
- → Local payment methods
- → Government integration

___

## <u>📝 Development Status</u>

**Current:** MVP Hackathon Prototype

**Completed:**
- ✅ User authentication and profiles
- ✅ 9 donation categories
- ✅ Volunteer discovery
- ✅ NGO profiles
- ✅ Campaign management
- ✅ Advanced search/filtering
- ✅ User dashboard
- ✅ Leaderboard system
- ✅ Impact scoring
- ✅ Notifications
- ✅ Responsive design
- ✅ GSAP animations

**In Progress:**
- 🔄 Email integration
- 🔄 Image optimization
- 🔄 Advanced analytics
- 🔄 Payment integration

___

## <u>🤝 Contributing Guidelines</u>

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Test thoroughly
4. Commit: `git commit -m "Add amazing feature"`
5. Push: `git push origin feature/amazing-feature`
6. Create Pull Request

**Code Standards:**
- Use TypeScript
- Follow ESLint config
- Write unit tests
- Maintain 80%+ coverage
- Document complex logic

___

## <u>📄 License</u>

This project is licensed under the **MIT License** - see LICENSE file for details.

___

<div align="center">

### <u>Help.com — Connecting helpers with those in need, one platform at a time.</u>

**Donate. Volunteer. Connect. Create Impact.**

![Made with ❤️ for communities](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20for-communities-red?style=flat-square)

</div>
