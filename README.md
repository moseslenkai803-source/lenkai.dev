# Lenkai.Dev Portfolio

Personal portfolio website for Moses Lenkai. The site presents selected projects, skills, background, social profiles, and a contact form for project enquiries.

## Built With

- React 19
- Vite
- Tailwind CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From the `portfolio` directory, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal.

## Available Scripts

Run these commands from the `portfolio` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the source files with ESLint |

## Project Structure

```text
portfolio/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Project and visual assets
│   ├── components/         # Navbar, page sections, and contact form
│   ├── App.jsx             # Main page composition
│   ├── App.css             # App-level styles
│   ├── index.css           # Tailwind entry point and global styles
│   └── main.jsx            # React application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Contact Form Configuration

The contact form submits messages through [FormSubmit](https://formsubmit.co/) and does not open the visitor's email application. Before deploying, update `CONTACT_EMAIL` in `src/components/Contact.jsx`:

```js
const CONTACT_EMAIL = "your-real-email@example.com";
```

On the first submission, FormSubmit may send a confirmation email to that address. Confirm it so future messages are delivered.

## Social Links

The GitHub and LinkedIn profile links are defined in `src/components/Contact.jsx`. Update them there if your profile URLs change.

## Production Build

Create and preview a production build with:

```bash
npm run build
npm run preview
```
