# Pin8n - AI-Powered Content Automation Platform

Pin8n is a production-ready SaaS web application that generates blog content and images using AI, then automatically publishes them to WordPress and optionally shares them on Pinterest.

## Features

### Core Features
- **Authentication**: Email/password signup & login with JWT sessions
- **Onboarding Wizard**: Step-by-step setup for WordPress and Pinterest connections
- **Content Generation**: AI-powered blog post and image generation via n8n workflows
- **Dashboard**: Overview of posts, images, and job history
- **WordPress Integration**: Automatic publishing to WordPress sites via JWT
- **Pinterest Integration**: Optional sharing of generated images
- **Subscription Plans**: Basic ($25/month, 5 posts/day) and Pro ($75/month, 7 posts/day) plans via Paddle

### Technical Stack
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Custom JWT implementation
- **Payments**: Paddle API integration
- **Workflow**: n8n for content generation automation
- **Hosting**: Vercel-ready deployment

## Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- n8n instance (for content generation workflows)
- Paddle account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pin8n
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/pin8n"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key-here"
   
   # Email (for password reset)
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"
   
   # Paddle
   PADDLE_PUBLIC_KEY="your-paddle-public-key"
   PADDLE_SECRET_KEY="your-paddle-secret-key"
   PADDLE_WEBHOOK_SECRET="your-paddle-webhook-secret"
   
   # n8n Webhook
   N8N_WEBHOOK_URL="https://your-n8n-instance.com/webhook/pin8n"
   N8N_API_KEY="your-n8n-api-key"
   
   # Encryption (for JWT tokens)
   ENCRYPTION_KEY="your-32-character-encryption-key"
   
   # App
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/       # Dashboard pages
│   │   ├── dashboard/
│   │   ├── generate/
│   │   ├── jobs/
│   │   ├── account/
│   │   └── billing/
│   ├── api/               # API routes
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── jobs/
│   │   ├── wp/
│   │   ├── pinterest/
│   │   └── paddle/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
│   ├── auth.ts           # Authentication utilities
│   ├── db.ts             # Database connection
│   └── utils.ts          # General utilities
└── types/                # TypeScript type definitions
```

## Database Schema

### Core Models
- **User**: User accounts with plan information
- **WPAccount**: WordPress site connections with encrypted JWT tokens
- **PinterestAccount**: Pinterest connections with encrypted access tokens
- **Job**: Content generation jobs with status tracking
- **Image**: Generated images linked to jobs

### Key Relationships
- User has many WPAccounts, PinterestAccounts, and Jobs
- Job has many Images
- All sensitive tokens are encrypted before storage

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Dashboard
- `GET /api/dashboard/stats` - Dashboard statistics

### Jobs
- `POST /api/jobs` - Create new content generation job
- `GET /api/jobs` - List user jobs with pagination
- `GET /api/jobs/:id` - Get specific job details

### Integrations
- `POST /api/wp/connect` - Connect WordPress site
- `POST /api/pinterest/connect` - Connect Pinterest account

### Payments
- `POST /api/paddle/webhook` - Handle Paddle subscription updates

## Content Generation Flow

1. **User submits job** via `/dashboard/generate`
2. **Job created** in database with PENDING status
3. **n8n workflow triggered** via webhook with job details
4. **AI generates content** (blog post + images) in n8n
5. **Content published** to WordPress via JWT
6. **Images shared** to Pinterest (if connected)
7. **Job status updated** to COMPLETED
8. **User notified** of completion

## Security Features

- **JWT Authentication**: Secure session management
- **Token Encryption**: All API tokens encrypted before database storage
- **Input Validation**: Zod schema validation for all API inputs
- **Rate Limiting**: Daily post limits per user plan
- **CORS Protection**: Configured for production deployment

## Deployment

### Vercel Deployment
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with `npm run build`

### Database Setup
- Use a managed PostgreSQL service (e.g., Supabase, Neon, Railway)
- Run migrations: `npm run db:push`

### n8n Setup
- Deploy n8n instance (self-hosted or cloud)
- Create workflow for content generation
- Configure webhook endpoint
- Set up API key for secure communication

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_SECRET` | JWT signing secret | Yes |
| `ENCRYPTION_KEY` | 32-character encryption key | Yes |
| `N8N_WEBHOOK_URL` | n8n webhook endpoint | Yes |
| `N8N_API_KEY` | n8n API key for authentication | Yes |
| `PADDLE_PUBLIC_KEY` | Paddle public key | Yes |
| `PADDLE_SECRET_KEY` | Paddle secret key | Yes |
| `PADDLE_WEBHOOK_SECRET` | Paddle webhook verification | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
