My Contacts App
-----
A simple React application that displays a list of contacts with their names, images, phone numbers, and email addresses.

Features
-----

Displays contact information in a card format.
Dynamically renders cards using reusable React components.
Styled with CSS for a clean and modern look.
Technologies Used
React: Frontend library for building the user interface.
CSS: Used for styling components.
JavaScript (ES6): Core language for developing the app.

src/
├── App.jsx        # Main component rendering the contact cards
├── Card.jsx       # Reusable component for each contact
├── index.css      # Styling for the application
├── index.js       # Entry point of the application
└── index.html     # HTML template with root div

How It Works
-----

The App.jsx component renders the app's main structure, including the heading and multiple Card components.
The Card.jsx component is a reusable functional component that takes props to display:
A contact's name.
Their profile picture.
Contact details (phone number and email).
Styles are applied via the index.css file.