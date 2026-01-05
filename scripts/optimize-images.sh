#!/bin/bash

# Image Optimization Script
# Converts all JPG images to WebP format for better performance
# Requires: cwebp (install via: brew install webp)

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo -e "${YELLOW}cwebp not found. Installing webp tools...${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "Run: brew install webp"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "Run: sudo apt-get install webp"
    else
        echo "Please install webp tools manually"
    fi
    exit 1
fi

# Navigate to images directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMAGES_DIR="$SCRIPT_DIR/../public/images"

if [ ! -d "$IMAGES_DIR" ]; then
    echo -e "${YELLOW}Images directory not found: $IMAGES_DIR${NC}"
    exit 1
fi

cd "$IMAGES_DIR"

echo -e "${BLUE}Starting image optimization...${NC}"
echo -e "Directory: $IMAGES_DIR"
echo ""

# Quality setting (0-100, higher = better quality but larger file)
QUALITY=85

# Counter
converted=0
skipped=0

# Convert all JPG/JPEG images to WebP
for img in *.jpg *.jpeg *.JPG *.JPEG; do
    # Skip if no files match
    [ -e "$img" ] || continue
    
    filename="${img%.*}"
    webp_file="${filename}.webp"
    
    # Skip if WebP already exists
    if [ -f "$webp_file" ]; then
        echo -e "${YELLOW}⏭  Skipping $img (WebP already exists)${NC}"
        ((skipped++))
        continue
    fi
    
    echo -e "${BLUE}🔄 Converting $img to WebP...${NC}"
    cwebp -q "$QUALITY" "$img" -o "$webp_file" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Get file sizes
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
        savings=$((original_size - webp_size))
        savings_percent=$((savings * 100 / original_size))
        
        echo -e "${GREEN}✅ Created $webp_file${NC}"
        echo -e "   Original: $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size} bytes")"
        echo -e "   WebP: $(numfmt --to=iec-i --suffix=B $webp_size 2>/dev/null || echo "${webp_size} bytes")"
        echo -e "   Savings: ${savings_percent}%"
        echo ""
        ((converted++))
    else
        echo -e "${YELLOW}⚠️  Failed to convert $img${NC}"
    fi
done

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Optimization complete!${NC}"
echo -e "Converted: ${converted} images"
echo -e "Skipped: ${skipped} images"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Test the site to ensure images load correctly"
echo "2. Run Lighthouse audit to verify LCP improvement"
echo "3. Check browser DevTools Network tab for WebP usage"

