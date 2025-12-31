# 🚀 Deployment Instructions for AWS VM

## ✅ Status: All Code Changes Are in GitHub!

**Good news:** All the fixes and updates are now in the GitHub repository. Your AWS deployment just needs to pull the latest code and rebuild.

---

## 📋 What's Fixed in GitHub (Latest Commit: 9c59b8c)

### ✅ **Brand Colors**
- **Navbar:** "Gifted" (red) + "Dreamers" (cyan) ✓
- **Footer:** Colorful social media icons ✓

### ✅ **Hero Images**
- All pages have hero images in `/public/images/`:
  - Services: `services-hero.jpg`
  - GRUHP: `gruhp-hero.png`
  - Common Cloud: `common-cloud-hero.png`
  - About: `about-hero.jpg`
  - FAQ: `faq-hero.jpg`
  - Matching Gifts: `matching-gifts-hero.jpg`
  - Partners: `partners-hero.jpg`

### ✅ **Workflow Icons (Common Cloud)**
- Learn It: `/public/images/learn.svg`
- Document It: `/public/images/document.svg`
- Teach It: `/public/images/teach.jpg`
- Get Paid: `/public/images/payment.svg`

### ✅ **Social Media Icons & Links**
- Facebook, LinkedIn, Instagram, YouTube, TikTok, X, Substack
- All icons are colorful SVGs in `/public/images/`
- YouTube link: https://youtube.com/@gifteddreamers
- TikTok link: http://tiktok.com/@gifteddreamers

### ✅ **Contact Page**
- Full contact form with ContactForm component
- Email and location cards
- "What to Expect" section
- Button import fixed ✓

### ✅ **Services Page**
- Hero image with tech network background
- Tech Perks Audit and Accounting Cleanup cards
- Tool logos section
- Contact buttons

### ✅ **GRUHP Page**
- Purple gradient hero (NOT purple background - it's a gradient overlay)
- Givebutter donation button
- GRUHP acronym icons
- Crisis response content

---

## 🔧 How to Deploy on AWS VM

### **Step 1: SSH into your AWS VM**
```bash
ssh ubuntu@your-aws-vm-ip
```

### **Step 2: Navigate to the project directory**
```bash
cd /path/to/v3gifteddreamers
```

### **Step 3: Pull the latest changes from GitHub**
```bash
git pull origin main
```

### **Step 4: Rebuild the Docker container** (if using Docker)
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

**OR if using npm/pnpm directly:**
```bash
pnpm install
pnpm run build
pm2 restart all  # or however you're running the app
```

### **Step 5: Clear browser cache**
After deployment, hard refresh your browser:
- **Chrome/Edge:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Firefox:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

---

## 🐛 Troubleshooting

### **Images not showing?**
Check that the `/public/` directory has all the images:
```bash
ls -la public/images/
ls -la public/logos/
```

### **Services page blank?**
Check console for errors. Make sure all logo files exist in `/public/logos/`:
```bash
ls public/logos/*.svg public/logos/*.png
```

### **Contact form not showing?**
Make sure `ContactForm.tsx` component exists in `/components/`

### **Colors still wrong?**
Check that Tailwind CSS config has the correct color definitions:
- `primary`: #C8102E (red)
- `accent`: #00B4D8 (cyan)

---

## 📊 Verification Checklist

After deployment, verify these on https://gifteddreamers.org:

- [ ] **Navbar:** "Gifted" is RED, "Dreamers" is CYAN
- [ ] **Footer:** Social media icons are colorful (not generic gray)
- [ ] **Services page:** Hero image visible, not blank
- [ ] **Contact page:** Form visible, not just "placeholder"
- [ ] **GRUHP page:** Purple gradient hero (not solid purple)
- [ ] **Common Cloud:** Workflow icons (Learn/Document/Teach/Payment) visible
- [ ] **All pages:** Hero images load correctly

---

## 📝 Notes

- The GRUHP page uses a **purple gradient** (`from-[#7C3AED] via-[#9333EA] to-[#6D28D9]`), not a solid purple background
- All images are in `/public/` directory and referenced with `/images/` or `/logos/` paths
- The site uses Vite + React, so `import.meta.env.BASE_URL` is used for some asset paths

---

## 🆘 Need Help?

If issues persist after deployment:
1. Check browser console for errors (F12)
2. Check AWS VM logs: `pm2 logs` or `docker logs container-name`
3. Verify all files pulled correctly: `git status` should show "up to date"
4. Make sure the build completed successfully without errors

---

**Last Updated:** December 31, 2025  
**Latest Commit:** 9c59b8c - Fix Contact page: Add missing Button import
