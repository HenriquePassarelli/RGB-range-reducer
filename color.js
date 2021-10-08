
let array = {
    color_dominant_2_rgb: [
        139,
        0,
        0
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

    console.log(s >= 26 && 15 <= l && l <= 30)

    switch (true) {
        case 0 <= h && h <= 15 || 350 < h && h <= 360:
            if (0 <= s || 0 <= l && l <= 10 || 98 <= l) {
                if (s >= 26 && 15 <= l && l <= 30) {
                    console.log("Brown")

                } else if (0 <= s && s <= 10 && !(98 <= l) && !(0 <= l && l <= 10)) {
                    console.log("Gray")
                }
                else if (0 <= l && l <= 10) {
                    console.log("Black")
                } else if (98 <= l) {
                    console.log("White")
                } else console.log("Red")
                break;
            } else {
                console.log("3")
                break;
            }
        case 15 < h && h <= 46:
            if (s >= 26 && 10 <= l && l <= 40) {
                console.log("Brown")
            } else console.log("Orange")
            break;
        case 46 < h && h <= 70:
            //brown 20 to 50
            if (s >= 26 && 10 <= l && l <= 30) {
                console.log("Brown")
            } else console.log("Yellow")
            break;
        case 70 < h && h <= 182:
            console.log("Green")
            break;
        case 182 < h && h <= 240:
            console.log("Blue")
            break;
        case 240 < h && h <= 290:
            console.log("purple")
            break;
        case 290 < h && h <= 350:
            console.log("Pink ")
            break;
        default:
            console.log("Color not found")
            break;
    }


}

// brown 10 <= l && l <=30 && s >= 26
//pink || l > = 60