const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../app/_components');
const files = [
  'WhyShimmeur.tsx',
  'WhoWeHelp.tsx',
  'Trust.tsx',
  'Testimonials.tsx',
  'Process.tsx',
  'OurWork.tsx',
  'Opportunity.tsx',
  'Contact.tsx',
  'About.tsx'
];

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // We need to ensure that the <section> tag has `relative overflow-hidden` in its className.
  // Find className="..." inside the <section ...> tag.
  
  let sectionMatch = content.match(/<section[^>]*className="([^"]+)"/);
  if (sectionMatch) {
    let classes = sectionMatch[1];
    let modified = false;
    
    if (!classes.includes('relative')) {
      classes += ' relative';
      modified = true;
    }
    if (!classes.includes('overflow-hidden')) {
      classes += ' overflow-hidden';
      modified = true;
    }
    
    if (modified) {
      content = content.replace(sectionMatch[1], classes);
      
      // also ensure that the shimmeur-container has relative z-10 if it doesn't already
      let containerMatch = content.match(/<div\s+className="([^"]*shimmeur-container[^"]*)"/);
      if (containerMatch) {
         let cClasses = containerMatch[1];
         let cMod = false;
         if (!cClasses.includes('relative')) {
             cClasses += ' relative';
             cMod = true;
         }
         if (!cClasses.includes('z-10')) {
             cClasses += ' z-10';
             cMod = true;
         }
         if (cMod) {
             content = content.replace(containerMatch[1], cClasses);
         }
      }

      fs.writeFileSync(filePath, content);
      console.log('Fixed relative/overflow in ' + file);
    }
  }
});
