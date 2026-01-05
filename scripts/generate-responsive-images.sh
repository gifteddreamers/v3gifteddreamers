#!/bin/bash

# Generate Responsive Image Sizes Script
# Creates multiple sizes (640w, 1024w, 1920w, 2560w) for hero images
# Requires: ImageMagick (convert) or macOS sips

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Navigate to images directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMAGES_DIR="$SCRIPT_DIR/../public/images"

if [ ! -d "$IMAGES_DIR" ]; then
    echo -e "${YELLOW}Images directory not found: $IMAGES_DIR${NC}"
    exit 1
fi

cd "$IMAGES_DIR"

# Hero images to generate responsive sizes for
HERO_IMAGES=(
    "austin-skyline.jpg"
    "about-hero.jpg"
    "services-hero.jpg"
    "faq-hero.jpg"
    "volunteer-hero.jpg"
    "partners-hero.jpg"
    "matching-gifts-hero.jpg"
    "common-cloud-hero-bg.jpg"
)

# Responsive sizes to generate
SIZES=(640 1024 1920 2560)

# Check for ImageMagick or sips
if command -v convert &> /dev/null; then
    TOOL="imagemagick"
    echo -e "${BLUE}Using ImageMagick (convert)${NC}"
elif command -v sips &> /dev/null; then
    TOOL="sips"
    echo -e "${BLUE}Using macOS sips${NC}"
else
    echo -e "${YELLOW}Error: Neither ImageMagick nor sips found.${NC}"
    echo "Install ImageMagick: brew install imagemagick"
    exit 1
fi

echo -e "${BLUE}Starting responsive image generation...${NC}"
echo -e "Directory: $IMAGES_DIR"
echo ""

converted=0
skipped=0

# Function to resize image
resize_image() {
    local input="$1"
    local output="$2"
    local width="$3"
    
    if [ "$TOOL" = "imagemagick" ]; then
        convert "$input" -resize "${width}x" -quality 85 "$output" 2>/dev/null
    else
        # sips (macOS)
        sips -Z "$width" "$input" --out "$output" &>/dev/null
    fi
}

# Process each hero image
for img in "${HERO_IMAGES[@]}"; do
    if [ ! -f "$img" ]; then
        echo -e "${YELLOW}⏭  Skipping $img (not found)${NC}"
        ((skipped++))
        continue
    fi
    
    filename="${img%.*}"
    extension="${img##*.}"
    
    echo -e "${BLUE}🔄 Processing $img...${NC}"
    
    # Generate responsive sizes
    for size in "${SIZES[@]}"; do
        # JPG version
        jpg_output="${filename}-${size}w.${extension}"
        if [ ! -f "$jpg_output" ]; then
            resize_image "$img" "$jpg_output" "$size"
            echo -e "  ${GREEN}✓${NC} Created $jpg_output"
        else
            echo -e "  ${YELLOW}⏭${NC} Skipped $jpg_output (already exists)"
        fi
        
        # WebP version (if WebP source exists)
        webp_source="${filename}.webp"
        if [ -f "$webp_source" ]; then
            webp_output="${filename}-${size}w.webp"
            if [ ! -f "$webp_output" ]; then
                resize_image "$webp_source" "$webp_output" "$size"
                echo -e "  ${GREEN}✓${NC} Created $webp_output"
            else
                echo -e "  ${YELLOW}⏭${NC} Skipped $webp_output (already exists)"
            fi
        fi
    done
    
    echo ""
    ((converted++))
done

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Responsive image generation complete!${NC}"
echo -e "Processed: ${converted} hero images"
echo -e "Skipped: ${skipped} images"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Update pages to use srcSet prop with responsive images"
echo "2. Test the site to ensure correct image sizes load"
echo "3. Run Lighthouse audit to verify performance improvements"

