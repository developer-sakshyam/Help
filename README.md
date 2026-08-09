<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help.com - README</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            padding: 40px 20px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background-color: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 15px;
            text-decoration: underline;
            text-decoration-color: #2563eb;
            text-decoration-thickness: 3px;
            text-underline-offset: 8px;
        }

        .tagline {
            font-size: 1.3em;
            font-weight: 600;
            color: #2563eb;
            margin-bottom: 20px;
            margin-top: -15px;
        }

        .description {
            font-size: 1.1em;
            color: #555;
            margin: 25px 0;
            line-height: 1.8;
        }

        hr {
            border: none;
            border-top: 2px solid #e5e7eb;
            margin: 40px 0;
        }

        h2 {
            font-size: 1.8em;
            margin-top: 30px;
            margin-bottom: 20px;
            color: #1f2937;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
            text-decoration: underline;
            text-decoration-color: #2563eb;
            text-decoration-thickness: 2px;
            text-underline-offset: 6px;
        }

        h3 {
            font-size: 1.3em;
            margin-top: 25px;
            margin-bottom: 15px;
            color: #374151;
            text-decoration: underline;
            text-decoration-color: #3b82f6;
            text-decoration-thickness: 1.5px;
            text-underline-offset: 4px;
        }

        ul {
            margin: 20px 0 20px 30px;
        }

        li {
            margin-bottom: 10px;
            color: #555;
        }

        li strong {
            color: #1f2937;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .feature-item {
            background-color: #f3f4f6;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #2563eb;
        }

        .feature-item strong {
            color: #2563eb;
            display: block;
            margin-bottom: 8px;
        }

        .feature-item p {
            color: #555;
            font-size: 0.95em;
        }

        pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 20px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            line-height: 1.5;
        }

        code {
            background-color: #f3f4f6;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            color: #dc2626;
        }

        pre code {
            background-color: transparent;
            color: #e5e7eb;
            padding: 0;
        }

        .demo-box {
            background-color: #ecf0ff;
            border: 2px solid #2563eb;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
        }

        .demo-box h4 {
            color: #2563eb;
            margin-bottom: 10px;
            text-decoration: underline;
        }

        .demo-box p {
            color: #333;
            margin-bottom: 8px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        table th {
            background-color: #2563eb;
            color: white;
            padding: 12px;
            text-align: left;
            border: 1px solid #1e40af;
        }

        table td {
            padding: 12px;
            border: 1px solid #e5e7eb;
        }

        table tr:nth-child(even) {
            background-color: #f9fafb;
        }

        .roadmap-list {
            list-style-type: none;
            margin-left: 0;
        }

        .roadmap-list li {
            padding-left: 30px;
            position: relative;
            margin-bottom: 12px;
        }

        .roadmap-list li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #2563eb;
            font-weight: bold;
        }

        .emoji {
            margin-right: 8px;
        }

        .highlight {
            background-color: #fef3c7;
            padding: 20px;
            border-left: 4px solid #f59e0b;
            margin: 20px 0;
            border-radius: 4px;
        }

        .highlight strong {
            color: #92400e;
        }

        .section-divider {
            text-align: center;
            color: #9ca3af;
            margin: 40px 0;
            font-size: 1.5em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Help.com</h1>
        <div class="tagline"><strong>Donate. Volunteer. Connect. Create Impact.</strong></div>
        
        <p class="description">
            Help.com is a humanitarian platform that connects people who want to help with people, NGOs, organizations, and communities that need assistance. Instead of forcing users to navigate multiple platforms for blood donations, food drives, volunteering opportunities, and campaigns, Help.com brings diverse forms of community support into one centralized ecosystem.
        </p>

        <hr>

        <h2>🎯 Core Concept</h2>
        
        <h3>The Problem</h3>
        <p>People often want to help but don't know where to start. They struggle to find who needs help, what to donate, where to volunteer, or which organizations are active. Simultaneously, organizations needing assistance struggle to reach donors and volunteers.</p>

        <h3>The Solution</h3>
        <p><strong>One platform. Multiple ways to contribute. Maximum impact.</strong></p>

        <hr>

        <h2>✨ Key Features</h2>

        <h3>Donation & Resource Support</h3>
        <ul>
            <li><span class="emoji">🩸</span> Blood donation and emergency blood requests</li>
            <li><span class="emoji">🍱</span> Food donation</li>
            <li><span class="emoji">👕</span> Clothing donation</li>
            <li><span class="emoji">📚</span> Books and educational resources</li>
            <li><span class="emoji">🏥</span> Medical supplies</li>
            <li><span class="emoji">🪑</span> Furniture</li>
            <li><span class="emoji">💻</span> Electronics</li>
            <li><span class="emoji">🏠</span> Shelter resources</li>
            <li><span class="emoji">💰</span> Financial assistance coordination</li>
        </ul>

        <h3>Community Engagement</h3>
        <ul>
            <li><span class="emoji">🙋</span> Volunteer opportunities discovery</li>
            <li><span class="emoji">🏢</span> NGO discovery and exploration</li>
            <li><span class="emoji">📢</span> Community campaigns</li>
            <li><span class="emoji">🌍</span> Location/map-based opportunity discovery</li>
            <li><span class="emoji">📊</span> User dashboard with activity tracking</li>
            <li><span class="emoji">🏆</span> Community leaderboard</li>
            <li><span class="emoji">⭐</span> Community Impact Score</li>
            <li><span class="emoji">🔔</span> Notifications system</li>
            <li><span class="emoji">📅</span> Upcoming events and opportunities</li>
        </ul>

        <h3>Platform Experience</h3>
        <ul>
            <li><span class="emoji">🔎</span> Advanced search and filtering</li>
            <li><span class="emoji">📍</span> Geographic filtering (Province, District, Municipality)</li>
            <li><span class="emoji">📱</span> Fully responsive design</li>
            <li><span class="emoji">🎬</span> Smooth animations and interactions</li>
        </ul>

        <hr>

        <h2>🏗️ Platform Architecture</h2>

        <pre>┌─────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────┘</pre>

        <hr>

        <h2>📍 Major Platform Modules</h2>

        <h3>Donations & Resources</h3>
        <p>Users can explore and contribute various resource types—blood, food, clothing, books, furniture, electronics, medical supplies, and more. Each resource category has its own discovery flow.</p>

        <h3>Volunteer Opportunities</h3>
        <p>Discover volunteer opportunities filtered by location, cause, category, urgency, required skills, and campaign type. Examples include community cleanups, blood drives, food distribution, disaster response, education programs, and environmental projects.</p>

        <h3>NGO Discovery</h3>
        <p>Browse and explore registered NGOs, their causes, active campaigns, donation opportunities, and volunteer needs. Learn about organizations making a difference in your community.</p>

        <h3>Campaigns</h3>
        <p>Organizations can create targeted campaigns around specific causes. Each campaign includes title, description, required resources, volunteer requirements, urgency level, and progress tracking.</p>

        <h3>Explore & Search</h3>
        <p>The Explore page is the central discovery hub, offering:</p>
        <ul>
            <li><strong>Search:</strong> Find donations, blood requests, opportunities</li>
            <li><strong>Category Filtering:</strong> Blood, food, clothing, medical supplies, and more</li>
            <li><strong>Location Filtering:</strong> Province, district, municipality-level filtering</li>
            <li><strong>Map-based Discovery:</strong> Geographic visualization of opportunities</li>
            <li><strong>Advanced Filters:</strong> Urgency, blood group, opportunity type, and more</li>
        </ul>

        <h3>User Dashboard</h3>
        <p>A centralized hub for user activity and impact tracking:</p>
        <ul>
            <li>Profile summary and personal information</li>
            <li>Donation history and activity</li>
            <li>Volunteer experience and commitments</li>
            <li>Community Impact Score overview</li>
            <li>Notifications and upcoming events</li>
            <li>Saved and recommended opportunities</li>
            <li>Contribution statistics</li>
        </ul>

        <h3>Community Impact Score</h3>
        <p>A recognition system that quantifies community contributions through:</p>
        <ul>
            <li>Blood donations</li>
            <li>Food and resource donations</li>
            <li>Volunteering hours and activities</li>
            <li>Campaign participation</li>
            <li>Helping verified requests</li>
        </ul>

        <h3>Community Leaderboard</h3>
        <p>A gamified ranking system that celebrates top contributors. Users are ranked based on contribution activity and impact, encouraging meaningful community participation.</p>

        <hr>

        <h2>🎨 Design & Animation Philosophy</h2>

        <h3>Visual Design</h3>
        <p>Help.com emphasizes a clean, modern, dark-focused aesthetic with:</p>
        <ul>
            <li>Strong typography and hierarchy</li>
            <li>High contrast for readability</li>
            <li>Minimal clutter and distraction</li>
            <li>Responsive layouts across all devices</li>
            <li>Intentionally minimal use of gradients and glassmorphism</li>
        </ul>

        <h3>Interaction Design</h3>
        <p>Animation is integral to the Help.com experience, using GSAP for:</p>
        <ul>
            <li>Page entrance animations</li>
            <li>Scroll-triggered effects</li>
            <li>Navigation transitions</li>
            <li>Hover interactions and button feedback</li>
            <li>Animated cards and reveals</li>
            <li>Smooth scrolling and micro-interactions</li>
        </ul>
        <p><strong>Philosophy:</strong> Animation improves usability and engagement rather than serving as mere decoration.</p>

        <h3>Responsive Design</h3>
        <p>Help.com is fully responsive across:</p>
        <ul>
            <li>Desktop and laptop browsers</li>
            <li>Tablets and mobile devices</li>
            <li>Touch-friendly interactions</li>
            <li>Adaptive layouts and navigation</li>
        </ul>

        <hr>

        <h2>🛠️ Technology Stack</h2>

        <table>
            <tr>
                <th>Layer</th>
                <th>Technology</th>
                <th>Purpose</th>
            </tr>
            <tr>
                <td><strong>Frontend</strong></td>
                <td>React, TypeScript/TSX, React Router</td>
                <td>User interface and navigation</td>
            </tr>
            <tr>
                <td><strong>Styling & Animation</strong></td>
                <td>CSS, GSAP</td>
                <td>Design and interactive animations</td>
            </tr>
            <tr>
                <td><strong>Backend</strong></td>
                <td>Node.js, Express.js</td>
                <td>API server and business logic</td>
            </tr>
            <tr>
                <td><strong>Database</strong></td>
                <td>MongoDB</td>
                <td>Data persistence and storage</td>
            </tr>
            <tr>
                <td><strong>Integration</strong></td>
                <td>REST APIs</td>
                <td>Frontend-backend communication</td>
            </tr>
        </table>

        <hr>

        <h2>🗂️ Project Structure</h2>

        <p><strong>Frontend Integration:</strong> The frontend is connected to backend APIs for campaigns, NGOs, volunteers, donations, and user management. Demo data is used where appropriate to ensure a complete experience for judges.</p>

        <p><strong>Backend Coverage:</strong> APIs support authentication, donations, volunteer opportunities, NGO management, campaigns, requests, notifications, and user profiles.</p>

        <hr>

        <h2>🔐 Demo Authentication</h2>

        <div class="highlight">
            <strong>⚠️ Hackathon Project:</strong> This is a prototype for demonstration purposes. Production-grade authentication and security measures are not implemented.
        </div>

        <h3>Demo Credentials</h3>
        <div class="demo-box">
            <h4>Admin Account</h4>
            <p><strong>Email:</strong> <code>admin@gmail.com</code></p>
            <p><strong>Password:</strong> <code>admin</code></p>
            <p>Full platform access to explore all features and admin functionality.</p>
        </div>

        <h3>Demo User Flow</h3>
        <p>A separate demo user experience is available for judges to explore donor and volunteer functionality without requiring additional credentials.</p>

        <hr>

        <h2>🚀 Getting Started</h2>

        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (v14 or higher)</li>
            <li>npm or yarn</li>
            <li>MongoDB instance</li>
        </ul>

        <h3>Installation</h3>
        <pre>git clone [repository-url]
cd help.com

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install</pre>

        <h3>Running the Application</h3>
        <pre># Start backend server (from backend directory)
npm start

# Start frontend development server (from frontend directory)
npm start</pre>

        <p>The application will be available at <code>http://localhost:3000</code> (frontend) with the backend API on <code>http://localhost:5000</code>.</p>

        <h3>Main Routes</h3>
        <ul>
            <li><strong>Landing Page:</strong> Home and platform overview</li>
            <li><strong>About:</strong> Project information and mission</li>
            <li><strong>Explore:</strong> Central discovery hub</li>
            <li><strong>Volunteers:</strong> Volunteer opportunities</li>
            <li><strong>NGOs:</strong> Organization discovery</li>
            <li><strong>Campaigns:</strong> Active campaigns</li>
            <li><strong>Donations:</strong> Resource donation options</li>
            <li><strong>Dashboard:</strong> User activity and impact</li>
            <li><strong>Leaderboard:</strong> Community rankings</li>
        </ul>

        <hr>

        <h2>🗺️ Project Vision</h2>

        <p class="description">
            <strong>Anyone can give. Anyone can volunteer. Anyone can make an impact.</strong>
        </p>

        <p>Help.com aims to remove barriers between people who want to help and people who need assistance. By centralizing donations, volunteering, and community engagement, the platform makes it easier to participate in meaningful ways.</p>

        <hr>

        <h2>🔮 Future Roadmap</h2>

        <p><em>The following features are under consideration for future development:</em></p>

        <ul class="roadmap-list">
            <li>Production-grade authentication and authorization</li>
            <li>Identity and NGO verification systems</li>
            <li>Online financial donations</li>
            <li>Real-time location tracking for emergencies</li>
            <li>Emergency blood request notifications</li>
            <li>Native mobile applications (iOS/Android)</li>
            <li>Push notifications</li>
            <li>AI-powered opportunity matching</li>
            <li>Fraud detection and prevention</li>
            <li>Advanced analytics and impact reporting</li>
            <li>Multi-language support</li>
            <li>Nepali language localization</li>
            <li>Improved geographic matching algorithms</li>
            <li>Digital contribution certificates and badges</li>
        </ul>

        <hr>

        <h2>📝 Notes</h2>

        <p><strong>Demo Data:</strong> The leaderboard and some dashboard features use demo data to immediately showcase functionality to judges.</p>

        <p><strong>Development Status:</strong> Help.com is a hackathon project demonstrating core concepts and MVP-level functionality. Some features use demo data where backend integration is still in progress.</p>

        <div class="section-divider">---</div>

        <p style="text-align: center; color: #6b7280; margin-top: 40px; font-size: 0.9em;">
            <strong>Help.com</strong> — Connecting helpers with those in need, one platform at a time.
        </p>

    </div>
</body>
</html>
