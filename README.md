# Jarurat Care

A concept-level healthcare support web app for connecting patients, families, volunteers, and community partners with practical next steps.

## Links

- GitHub repository: https://github.com/VemulaBhavya/jarurat-care
- Live hosted link: https://quiet-queijadas-5da934.netlify.app
- Claim the Netlify site: https://app.netlify.com/drop/quiet-queijadas-5da934/claim
- Deployment note: This is a temporary Netlify Drop preview and expires after approximately one hour unless claimed in Netlify. It is protected by the temporary password `My-Drop-Site`.

## Tech Stack

- HTML5 for the semantic page structure and accessible form controls
- CSS3 for the responsive layout, visual system, illustration, and mobile styles
- Vanilla JavaScript for form confirmation and the CareGuide assistant
- Google Fonts: DM Sans and Space Grotesk
- No backend or build step required

## AI / Automation Idea: CareGuide

CareGuide is a lightweight FAQ assistant built into the support page. It recognizes common intents such as:

- Greetings and getting started
- The types of patients and families supported
- Available support services
- Volunteer registration
- Costs and free access
- What happens after submitting a request

The current prototype uses local keyword-based responses so it works without an API key. In a production version, it could be connected to an approved healthcare knowledge base and an LLM with strict privacy controls, human escalation, and no medical diagnosis or emergency-care claims.

## NGO Use Case

Jarurat Care can use this app as a first point of contact for people who need help navigating non-clinical healthcare support. A visitor can identify themselves as a patient or family member, volunteer, or community partner, describe their need, and receive a confirmation. CareGuide answers routine questions immediately, reducing repetitive work for NGO coordinators and helping visitors understand the next step.

The form is concept-level only: submissions are not sent to a server yet. A production NGO deployment should connect it to a secure database or email workflow, add consent and privacy notices, validate requests server-side, and provide emergency-service guidance.

## Run Locally

Open `index.html` in a browser. No installation is required.

## Deploy

1. Create a new repository and upload `index.html`, `style.css`, `script.js`, and `README.md`.
2. Import the repository into Vercel or Netlify.
3. Use the repository root as the publish directory.
4. No build command is needed.
