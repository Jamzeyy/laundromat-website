# Laundromat Website

A modern website for a local coin-operated laundromat. This project includes a frontend interface with machine status monitoring, online booking, membership management, and a contact form.

## Features

- Real-time machine status display
- Online booking system
- Membership login/registration
- Promotions and loyalty program
- Location information with Google Maps integration
- Contact form
- Dark mode support
- Responsive design for all device sizes

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js with Express.js for the backend

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd laundromat-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
laundromat-website/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── images/
├── index.html
├── server.js
├── package.json
└── README.md
```

## API Endpoints

- `GET /api/status` - Get the current machine status
- `POST /api/book` - Create a new machine booking
- `POST /api/contact` - Submit a contact form message

## Future Enhancements

- User authentication with JWT
- Payment integration
- Admin dashboard for managing bookings
- Real-time notifications for machine availability
- Mobile app integration

## License

MIT #   l a u n d r o m a t - w e b s i t e  
 