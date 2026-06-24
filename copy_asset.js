const fs = require('fs');
const path = require('path');

const src = path.join(
  process.env.USERPROFILE,
  '.gemini',
  'antigravity',
  'brain',
  'f0edab9a-6028-4ec8-b46a-bcc7cc54e417',
  'traditional_palace_1782177964327.png'
);
const dest = path.join(__dirname, 'src', 'assets', 'traditional_palace.png');

try {
  // Ensure destination directory exists
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log('Success copy!');
} catch (e) {
  console.error('Error copy:', e.message);
}
