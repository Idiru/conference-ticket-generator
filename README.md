# conference-ticket-generator

## How to install 
1. Clone the repository: `git clone https://github.com/Idiru/conference-ticket-generator.git`
2. Install dependancies: `npm i`
3. Run the projet: `npm run dev`

## Project Overview
The Conference Ticket Generator is a web application built with React that allows users to generate personalized conference tickets. Users can input their details, upload an avatar, and generate a ticket. The goal of the project was to practice. 

## How to Use
1. Open the application in your browser.
2. Fill in your details including name, email, and GitHub username.
3. Upload an avatar image.
4. Click "Generate My Ticket" to create your conference ticket.
5. Your ticket will be displayed.

## Details 

### Description of the App Component

- Import: 
    - Uses React's useEffect and useState hooks.
    - Imports the Navbar, Ticket, and ImageUpload components.
    - Utilizes the react-confetti library to display confetti.
    - Imports global and Navbar-specific CSS files for styling.

- Component State:
    - form: Stores form information (name, email, GitHub).
    - error: Indicates if the email is invalid.
    - isCompleted: Indicates if the form is fully completed.
    - isGenerated: Indicates if the ticket has been generated.

- Functionalities:
    - Form Change Handling: Updates the form state when input fields are modified.
    - Email Validation: Checks if the email contains an @.
    - Form Completion Check: Enables the ticket generation button if all fields are filled.
    - Conditional Rendering:
        - Displays a welcome message and form if the ticket is not yet generated.
        - Shows a congratulatory message and the Ticket component once the ticket is generated.
    - Side Effects: Uses useEffect to check for errors and form completion on every state change.

- Components Used:
    - Navbar: Displays the navigation bar.
    - ImageUpload: Allows image uploads.
    - Ticket: Displays the generated ticket with form information.
    - Confetti: Displays confetti when the ticket is generated.


### Description of the ImageUpload Component

- Imports:
    - Uses React's useState hook.

- Component State:
    - imgSrc: Stores the URL of the uploaded image, retrieved from localStorage if available.
    - error: Indicates if there is an error with the image upload (e.g., file too large).

- Constants:
    - MAX_FILE_SIZE: Sets the maximum allowed file size to 5MB.

- Functionalities:
    - Image Upload Handling:
        - handleImageUpload: Reads the uploaded image file, checks its size, and updates the imgSrc state with the image data URL.
        - Stores the uploaded image in localStorage for persistence.
    - Image Removal:
        - handleImageRemove: Clears the imgSrc state and removes the image from localStorage.
    - Conditional Rendering:
        - Displays an upload area with drag-and-drop or click-to-upload functionality if no image is uploaded.
        - Shows the uploaded image with options to remove or change it once an image is uploaded.
    - Error Handling:
        - Displays an error message if the uploaded file exceeds the maximum size.
        - Shows a disclaimer with acceptable file formats and size limits.

- User Interface:
    - Uses a hidden file input to handle image uploads.
    - Provides visual feedback and interaction options based on the upload state.

### Description of the Ticket Component

- Props:
    - form: An object containing user information such as name and github.

- Component State:
    - imgSrc: Retrieves the URL of the uploaded image from localStorage.

- Functionalities:
    - Display Ticket Details:
        - Displays a ticket layout with event details and user information.
        - Shows the uploaded image as part of the ticket.

    - Static Information:
        - Includes a logo and static text for the event name and date.

User Interface:
    - Uses CSS classes for styling the ticket layout.
    - Displays the user's name and GitHub username.
    - Shows the uploaded image as a background image within a styled container.

## Dependencies
- **React**: JavaScript library for building user interfaces.
- **react-confetti**: Library to display confetti animations.
- **Vite**: Next-generation frontend tooling.


