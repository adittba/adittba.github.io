import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Tudorica George-Adrian",
  description: "My Awesome Portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/about-me' },
      { text: 'Resume', link: '/resume' }
    ],

    sidebar: [  // Added sidebar array here to encapsulate sidebar configuration

      {
        text: 'Info',  // Landing page
        collapsible: false,
        items: [
          {
            text: 'About me',  // Landing page
            link: '/about-me',  // Adjust link as needed
            collapsible: false,
            collapsed: false
          },
          {
            text: 'Resume',  // New section at the same level as 'About me'
            link: '/resume',  // Adjust link as needed
            collapsible: false,
            collapsed: false
          }
        ]
      },

      {
        text: 'Projects',
        collapsible: false,
        items: [
          { text: 'Journey Genie', link: '/projects/journey-genie' },
          { text: 'Jawber', link: '/projects/jawber' },
          { text: 'Plasma Dashboard', link: '/projects/plasma-dashboard' },
          { text: 'Excel File Editor', link: '/projects/excel-editor' },
          {
            text: 'Design Projects',
            collapsible: true,
            collapsed: false,  // Start as not collapsed
            items: [
              { text: 'Design Portfolio', link: '/projects/design-projects/design-portfolio' },
              { text: 'Web Design', link: '/projects/design-projects/web-design' },
              { text: 'Probotics', link: '/projects/design-projects/probotics' },
              { text: 'CM Photography', link: '/projects/design-projects/cm-photography'}
            ]
          },
          {
            text: 'Marketing',
            collapsible: true,
            collapsed: false,  // Start as not collapsed
            items: [
              { text: 'FipHero', link: '/projects/marketing-projects/fiphero' },
              { text: 'TGV', link: '/projects/marketing-projects/tgv' },
              { text: 'Stefano', link: '/projects/marketing-projects/stefano' }
            ]
          }
        ]
      },

      {
        text: 'Certifications', link: '/certifications'
      }
    ],  // Closing bracket for sidebar array    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/adittba' },
      { icon: 'instagram' , link: 'https://www.instagram.com/adittba'},
      { icon: 'linkedin' , link: 'https://www.linkedin.com/in/georgeadrian/'},
      { 
        icon: { 
          svg: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"/></svg>`
        },
        link: 'https://t.me/adittba'
      }
     ]
  }
})
