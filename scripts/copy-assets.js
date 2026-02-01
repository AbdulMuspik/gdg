const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const assetsDir = path.join(__dirname, '../assets');
const gdgAppDir = path.join(__dirname, '../gdg.app');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  
  files.forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    
    const stat = fs.statSync(srcFile);
    
    if (stat.isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

// Copy assets and gdg.app folders to dist
console.log('Copying assets...');
copyDir(assetsDir, path.join(distDir, 'assets'));

console.log('Copying gdg.app...');
copyDir(gdgAppDir, path.join(distDir, 'gdg.app'));

console.log('✓ Assets copied successfully');
