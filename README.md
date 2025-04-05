Brello
A Trello-like task management application built with TypeScript, Next.js, NestJS, and MongoDB.
Overview
Brello is a full-stack project management tool that allows users to create boards, lists, and cards to organize their tasks and projects. This application demonstrates the implementation of a modern web architecture using TypeScript throughout the stack.
Features

User authentication with JWT
Create, view, update, and delete boards
Drag and drop interface for managing cards
Responsive design for all devices
Real-time updates

Tech Stack
Frontend

Next.js
TypeScript
React
CSS Modules

Backend

NestJS
TypeScript
MongoDB with Mongoose
JWT Authentication

Getting Started
Prerequisites

Node.js (v16+)
Yarn or npm
MongoDB (local or Atlas)

Installation

Clone the repository

bashCopygit clone https://github.com/yourusername/brello.git
cd brello

Install dependencies

bashCopyyarn install

Set up environment variables

Create a .env file in the root directory
Add the following variables:



CopyMONGODB_URI=mongodb://localhost:27017/brello
JWT_SECRET=your_jwt_secret

Start the development server

bashCopyyarn dev
The application will be available at:

Frontend: http://localhost:3000
Backend: http://localhost:3001

Project Structure
CopyBrello/
├── frontend/           # Next.js frontend
│   ├── src/
│   │   ├── app/        # App Router components
│   │   ├── components/ # Reusable components
├── backend/            # NestJS backend
│   ├── src/
│   │   ├── auth/       # Authentication module
│   │   ├── boards/     # Boards module
│   │   ├── users/      # Users module
Learning Outcomes
This project demonstrates proficiency in:

Full-stack TypeScript development
React and Next.js for frontend
NestJS for building structured backends
MongoDB data modeling
Authentication and authorization
State management
Modern UI/UX implementation

Future Improvements

Add real-time collaboration using WebSockets
Implement file attachments for cards
Add user avatars and profiles
Create team functionality
Add due dates and calendar view

Contact
Project Link: https://github.com/DolevStein19/Brello
