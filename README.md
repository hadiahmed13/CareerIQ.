# CareerIQ

<!-- 
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)
[![CI](https://github.com/YourUsername/CareerIQ/actions/workflows/ci.yml/badge.svg)](https://github.com/YourUsername/CareerIQ/actions/workflows/ci.yml)
[![Issues](https://img.shields.io/github/issues/YourUsername/CareerIQ)](https://github.com/YourUsername/CareerIQ/issues)
-->

CareerIQ is a modern, AI-powered career coaching platform. It provides users with:
- Weekly-updated **Industry Insights** (demand level, salary ranges, growth rate, recommended skills).
- An **AI Resume Builder** for generating polished, ATS-friendly resumes.
- A **Mock Interview Preparation** tool with role-specific quizzes and real-time performance tracking.
- A **Cover Letter Generator** that tailors content to specific job descriptions.

<details>
  <summary><strong>Table of Contents</strong></summary>

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Screenshots &amp; Demos](#screenshots--demos)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

</details>

---

## Key Features

1. **Personalized Industry Insights**  
   - Displays real-time demand/salary trends, updated weekly.  
   - Automatic background jobs to refresh data using [Inngest](https://www.inngest.com/).

2. **AI Resume Builder**  
   - Dynamically create a professional markdown resume.  
   - Includes one-click improvement suggestions using advanced AI (Gemini).  
   - Option to **download** your resume as a PDF.

3. **Mock Interview Prep**  
   - Multiple-choice technical quizzes generated via AI.  
   - Performance tracking over time with scores and improvement tips.  
   - Real-time analysis of correct vs. incorrect answers.

4. **Intelligent Cover Letter Generator**  
   - Analyzes job descriptions and crafts personalized content.  
   - Editable in real-time with an MD Editor.

5. **User Account Management**  
   - Authentication and secure user data store using [Clerk](https://clerk.com).  
   - Onboarding flow to capture industry, experience, and skills.

---

## Tech Stack

- **Frontend:** [Next.js (App Router)](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN/UI](https://ui.shadcn.com/)  
- **Backend / API:**  
  - **Prisma** as ORM for PostgreSQL  
  - **Neon** (Postgres hosting) for the database  
  - **Inngest** for background Cron jobs/queue  
  - **Clerk** for authentication and user management  
  - **Gemini** (Google Generative AI) for AI text generation  
- **Deployment:** [Vercel](https://vercel.com/) (with serverless functions)

---

## Screenshots & Demos

Place your project visuals below:

1. **Landing Page / Marketing**  
   *[Placeholder for a screenshot/gif]*

2. **User Onboarding**  
   *[Placeholder for a screenshot/gif]*

3. **Industry Insights**  
   *[Placeholder for a screenshot/gif]*

4. **AI Resume Builder**  
   *[Placeholder for a screenshot/gif]*

5. **Mock Interview Quiz**  
   *[Placeholder for a screenshot/gif]*

6. **AI Cover Letter**  
   *[Placeholder for a screenshot/gif]*

---

## Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/YourUsername/CareerIQ.git
   cd CareerIQ
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Prisma setup**  
   - Update your `.env` with the correct `DATABASE_URL`.  
   - Run database migrations:  
     ```bash
     npx prisma migrate dev
     ```

4. **Run development server**  
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000/) to explore **CareerIQ** locally.

---

## Usage

### 1. User Onboarding
- New users fill in their experience, skills, and industry.  
- Weekly Cron job in **Inngest** updates the industry data.

### 2. AI Resume Builder
- Fill in contact info, summary, experience, and projects.  
- Export or download as a PDF.  
- Gemini-based text improvements for professional language.

### 3. Mock Interview Quizzes
- Click “Start Quiz” -> 10 random MCQs are generated via AI.  
- On completion, see your performance, correct answers, improvement tips.

### 4. Cover Letter Generator
- Enter job details & a description.  
- AI crafts a tailored letter in markdown, ready for customization.

---

## Contributing

Contributions and suggestions are welcome!  
- **Fork** the repository  
- **Create** a feature branch (`git checkout -b feature-name`)  
- **Commit** changes (`git commit -m 'Add some feature'`)  
- **Push** to the branch (`git push origin feature-name`)  
- Open a **Pull Request** describing your changes

---

## License

This project is licensed under the [MIT License](./LICENSE). You’re free to use, modify, and distribute it as you see fit.  

---

*Happy coding, and thank you for checking out **CareerIQ**! Feel free to submit issues or open PRs for any improvements.*
