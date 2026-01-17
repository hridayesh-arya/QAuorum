# Quorum — Anonymous Discussion Platform

Quorum is a full-stack anonymous discussion platform that enables open conversations while maintaining moderation through role-based access and automated content checks.

## Features

- Anonymous post and comment creation
- JWT-based authentication with role-based access (user / moderator)
- REST APIs for posts, comments, and moderation actions
- Rule-based automated content flagging with manual review support

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, REST APIs, JWT
- **Database:** MongoDB (Mongoose)
- **Tools:** Git, GitHub, Postman

## Setup

```bash
git clone https://github.com/your-username/quorum.git
cd quorum
```

**Backend**

```bash
cd backend
npm install
npm run dev
```

Create `.env`:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

**Frontend**

```bash
cd frontend
npm install
npm start
```
