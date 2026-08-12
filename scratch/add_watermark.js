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

const watermarkHTML = `
      {/* Decorative S-mark Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -bottom-[10%] opacity-[0.03] z-0 hidden md:block"
      >
        <img
          src="/img/shimmeur-smark.png"
          alt=""
          width={800}
          height={800}
        />
      </div>
`;

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the first occurrence of className="..." or style="..." after <section
  // and insert it right inside the section container.
  // The safest way is to find `<div className="shimmeur-container` and insert BEFORE it.
  
  if (content.includes('shimmeur-container') && !content.includes('Decorative S-mark Watermark')) {
    content = content.replace(
      /<div\s+className="[^"]*shimmeur-container[^"]*"/,
      match => watermarkHTML + '\n      ' + match
    );
    
    // Check if it's relative
    if (!content.includes('relative overflow-hidden') && !content.match(/<section[^>]*className="[^"]*relative/)) {
        // We need the section to be relative so absolute watermark stays inside.
        content = content.replace(/<section\s+className="/, '<section\n      className="relative overflow-hidden ');
    }

    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});
