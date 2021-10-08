
let array = {
    color_dominant_2_rgb: [
        0,
        400,
        255
    ],
}
let myColor = array.color_dominant_2_rgb;
RGBToHSL(myColor[0], myColor[1], myColor[2])

function RGBToHSL(r, g, b) {

    // treat high values 
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;

    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    console.log("hsl(" + h + "," + s + "%," + l + "%)")

    return color(h, s, l);
}

function color(h, s, l) {

    console.log(h + "," + s + "," + l)

    console.log(!(98 <= l))

    switch (true) {
        case 0 <= h && h <= 20 || 345 <= h && h <= 360:
            if (0 <= s && s <= 10 || 0 <= l && l <= 10 || 98 <= l) {
                if (0 <= s && s <= 10 && !(98 <= l) && !(0 <= l && l <= 10)) {
                    console.log("Gray")
                }
                else if (0 <= l && l <= 10) {
                    console.log("Black")
                } else if (98 <= l) {
                    console.log("White")
                }
                break;
            } else {
                console.log("Red")
                break;
            }
        case 20 < h && h <= 60:
            console.log("Orange")
            break;
        case 60 < h && h <= 80:
            console.log("Yellow")
            break;
        case 80 < h && h <= 180:
            console.log("Green")
            break;
        case 180 < h && h <= 260:
            console.log("Blue")
            break;
        case 260 < h && h <= 295:
            console.log("purple")
            break;
        case 295 < h && h <= 347:
            console.log("Pink ")
            break;
        case 0 <= s && s >= 10:

        default:
            console.log("Color not found")
            break;
    }


}

