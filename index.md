---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Awesome"
  text: "Portfolio"
  tagline: 'Strategy and Creativity'
  image:
    src: 'https://adittba.github.io/assets/memoji.png' 
  actions:
    - theme: alt
      text: About Me
      link: /about-me
    - theme: brand
      text: Resume & Portfolio
      link: /resume



features:
  
  - icon: 🚀
    title: Design
    details: I create visually engaging designs that capture attention and communicate clearly.
  - icon: ✅
    title: Project Management
    details: I direct projects from start to finish, always aligning team efforts with project goals.
  - icon: 📊
    title: Strategic Planning
    details: I create clear strategies to achieve business objectives effectively.
---
---
<div>
  <h3>Connect with Me</h3>
</div>


<div class="contact-links">
  <div>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/georgeadrian">Connect on LinkedIn</a></p>
    <p>Google Meet: <a href="https://cal.com/georgeadrian/15min">Book a call</a></p>
    <p>Telegram: <a href="https://t.me/adittba">Join me on Telegram</a></p>
  </div>
  <div>
    <p>E-mail: <a href="mailto:georgetudorica2310@gmail.com">Send me an email</a></p>
    <p>GitHub: <a href="https://github.com/adittba">Follow me on GitHub</a></p>
    <p>Instagram: <a href="https://instagram.com/adittba">Follow me on Instagram</a></p>
  </div>
</div>

<style scoped>
  .contact-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    font-size: 16px;
    padding-top: 20px;
  }

  .contact-links p {
    margin: 0;
    padding: 0;
  }

  /* Make the layout a regular list on smaller screens */
  @media (max-width: 768px) {
    .contact-links {
      display: block; /* Switch to block layout on mobile */
    }

    .contact-links div {
      margin: 0; /* Remove extra margin */
      padding: 0;
    }

    .contact-links div p {
      margin-bottom: 4px; /* Consistent spacing between all items */
    }
  }
</style>



