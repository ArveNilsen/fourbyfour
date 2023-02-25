# fourbyfour

# Pixel Art Stenography

## Why?

The task was to find a hidden message spread over 11 images. I made this script to see the solutions without having to manually decode all of the images.

## How?

The script takes the RGB values of the original image, converts it to binary and saves to four least impacting digits. These digits are padded with four zeros at the end, making the least impacting digits the most impacting digits. These are then converted back to decimal and used as the new RGB values.
