# PressRoom - A MERN Stack Journalism Platform

## Overview
PressRoom is a full-stack MERN application designed for journalists, citizen reporters, and data enthusiasts. It provides a platform for news reporting, data visualization, and open data analysis, empowering users to access and share credible information. The website serves as both a resource for journalists seeking tips and data-driven stories and a platform for citizen journalists to contribute impactful content.

## Features
- **News Reporting:** Articles section with news, features, and editorial content.
- **Open Data Integration:** Access to NYC OpenData and other datasets, presented through visualizations powered by Tableau.
- **Citizen Journalism:** A section for citizen journalists to submit news stories and contribute to the community.
- **Data-Driven Reporting:** Data visualization and reporting tools for journalists and researchers.
- **User Authentication:** Secure login and registration using Passport.js and JWT.

## Frontend
- **React:** Component-based architecture for reusable UI components.
- **CSS:** Custom styles and responsive design for a seamless user experience.
- **React Router:** Client-side routing for a single-page application experience.
- **Axios:** Data fetching and API integration.

## Backend
- **Node.js:** Server-side runtime environment.
- **Express.js:** RESTful API routes for users, posts, and comments.
- **MongoDB & Mongoose:** Database structure and schema management.
- **Passport.js:** Authentication and session management.
- **JWT:** Secure token-based authentication.

## Content Structure
- **Homepage:** Hero section with a call to action for data-driven reporting, featured articles, and open data access.
- **Articles Page:** A collection of news stories, feature articles, and editorials.
- **Open Data Page:** Interactive visualizations from OpenDataNYC, showcasing data insights.
- **Citizen Journalism Page:** A submission portal for user-generated content, moderated by site admins.
- **Dashboard:** User account management, including the ability to create, edit, and delete posts.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/carolinafrederico/PressRoom.git
   cd PressRoom
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client-frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     PORT=3001
     NEWS_API_KEY=your_news_api_key
     ```

4. Run the application:
   ```bash
   npm run dev
   cd client-frontend
   npm start
   ```

## Technologies Used
- **Frontend:** React, CSS, Axios, React Router
- **Backend:** Node.js, Express.js, Mongoose, JWT, Passport.js
- **Database:** MongoDB
- **Data Visualization:** Tableau
- **APIs:** NYC OpenData, NewsAPI

## License
This project is licensed under the MIT License.
