# Local Events Ticketing Platform - EventHub

A responsive website for local events (concerts, workshops, sports) that allows users to view events, see event details, read news, and contact organizers. Includes user authentication with client-side validation.

## Project Structure

```
project-root/
│
├─ index.html                (Home / Dashboard)
├─ about.html
├─ events.html               (list of events)
├─ event-detail.html         (details per event)
├─ news.html
├─ news-detail.html
├─ contact.html
├─ login.html
├─ register.html
│
├─ css/
│   └─ styles.css
│
├─ js/
│   ├─ main.js               (general scripts)
│   ├─ auth.js               (login/register validation - plain JS)
│   └─ contact-validate.js  (contact form validation - plain JS)
│
├─ assets/
│   └─ images/
│
└─ README.md
```

## Pages

1. **Home (index.html)** - Dashboard with featured events and news preview
2. **About Us (about.html)** - Information about EventHub
3. **Events (events.html)** - List of all available events
4. **Event Detail (event-detail.html)** - Detailed information about a specific event
5. **News (news.html)** - List of news articles
6. **News Detail (news-detail.html)** - Detailed news article
7. **Contact (contact.html)** - Contact form with validation
8. **Login (login.html)** - User login form with validation
9. **Register (register.html)** - User registration form with validation

## Features Implemented

### ✅ HTML Pages
- All required pages created with semantic HTML5
- Consistent navigation across all pages
- Responsive layout structure

### ✅ CSS Styling
- Modern, clean design
- Responsive layout (mobile, tablet, desktop)
- Consistent color scheme and typography
- Hover effects and transitions

### ✅ JavaScript Validation (Plain JavaScript - No Libraries)

#### Contact Form Validation
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Message**: Required, minimum 10 characters
- Real-time validation on blur
- Inline error messages
- Success message on valid submission

#### Login Form Validation
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters
- Real-time validation on blur
- Inline error messages
- Success simulation on valid submission

#### Register Form Validation
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters
- **Confirm Password**: Must match password
- Real-time validation on blur
- Inline error messages
- Success simulation with localStorage (simulating backend)

### ✅ Additional Features
- Navigation active state highlighting
- Smooth user experience
- Form submission simulation (localStorage for registration)
- Success/error message display

## How to Run the Site Locally

1. **Clone or download the project** to your local machine

2. **Open the project folder** in your file explorer

3. **Open `index.html`** in a web browser:
   - Double-click `index.html`, or
   - Right-click and select "Open with" → Choose your browser, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```
     Then navigate to `http://localhost:8000` in your browser

4. **Navigate through the site** using the navigation menu

## Validation Rules

### Register Form
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- **Password**: Required, minimum 6 characters
- **Confirm Password**: Must exactly match password

### Login Form
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters

### Contact Form
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Message**: Required, minimum 10 characters

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- No external libraries or frameworks (as per requirements)

## Git Usage

This project uses Git for version control. All features are committed with meaningful messages. The project should be pushed to GitHub regularly.

### Example Commit Messages
- `init: project skeleton with pages`
- `feat: implement header and navigation`
- `feat: add contact form with plain JS validation`
- `feat: add login/register pages and validation`
- `style: basic responsive layout for header/footer`
- `fix: validation bug on register password confirm`
- `docs: add README and usage instructions`

## Phase 2 Planned Features

The following features are planned for Phase 2:

- [ ] Image slider/carousel on homepage
- [ ] Enhanced responsive design improvements
- [ ] Backend integration (API endpoints)
- [ ] User authentication with server-side validation
- [ ] Ticket purchasing functionality
- [ ] User dashboard/profile page
- [ ] Event search and filtering
- [ ] Event categories/tags
- [ ] Email notifications
- [ ] Payment integration
- [ ] Admin panel for event management

## Notes

- All validation is implemented using **plain JavaScript** (no libraries) as required
- Forms use client-side validation only (no backend in Phase 1)
- Registration data is stored in localStorage (simulating backend behavior)
- All form submissions show success messages but don't actually send data (simulation)
- The site is fully functional for demonstration purposes

## License

This project is created for educational purposes.

## Contact

For questions or support, please use the Contact page on the website.

---

**Last Updated**: December 2024

