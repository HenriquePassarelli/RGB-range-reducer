
/* let array = {
    color_dominant_2_rgb: [
        139,
        0,
        0
    ],
}
let myColor = array.color_dominant_2_rgb;
RGBToHSL(myColor[0], myColor[1], myColor[2])
 */
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

    //console.log("hsl(" + h + "," + s + "%," + l + "%)")

    return color(h, s, l);
}

function color(h, s, l) {

    switch (true) {
        case 0 <= h && h <= 15 || 290 < h && h <= 360:
            if (0 <= s || 0 <= l && l <= 10 || 98 <= l) {
                if (s >= 26 && 15 <= l && l <= 30) {
                    return "Brown"
                } else if (0 <= s && s <= 10 && !(92 <= l) && !(0 <= l && l <= 10)) {
                    return "Gray"
                }
                else if (0 <= l && l <= 10) {
                    return "Black"
                } else if (92 <= l) {
                    return "White"
                } else if (51 <= l) {
                    return "Pink"
                } else return "Red"
            }
        case 15 < h && h <= 46:
            if (0 <= s && s <= 10 && !(91 <= l) && !(0 <= l && l <= 10)) {
                return "Gray"
            }
            else if (0 <= l && l <= 10) {
                return "Black"
            } else if (30 >= s && 87 <= l) {
                return "White"
            } else if (s >= 26 && 10 <= l && l <= 40) {
                return "Brown"
            } else return "Orange"
        case 46 < h && h <= 70:
            //brown 20 to 50
            if (0 <= s && s <= 10 && !(98 <= l) && !(0 <= l && l <= 10)) {
                return "Gray"
            }
            else if (0 <= l && l <= 10) {
                return "Black"
            } else if (30 >= s && 87 <= l) {
                return "White"
            } else if (s >= 26 && 10 <= l && l <= 30) {
                return "Brown"
            } else return "Yellow"
        case 70 < h && h <= 182:
            if (0 <= s && s <= 10 && !(98 <= l) && !(0 <= l && l <= 10)) {
                return "Gray"
            }
            else if (0 <= l && l <= 10) {
                return "Black"
            } else if (30 >= s && 87 <= l) {
                return "White"
            } else return "Green"
        case 182 < h && h <= 240:
            if (0 <= s && s <= 10 && !(98 <= l) && !(0 <= l && l <= 10)) {
                return "Gray"
            }
            else if (0 <= l && l <= 10) {
                return "Black"
            } else if (30 >= s && 87 <= l) {
                return "White"
            } else return "Blue"
        case 240 < h && h <= 290:
            if (0 <= s && s <= 10 && !(91 < l) && !(0 <= l && l <= 10)) {
                return "Gray"
            }
            else if (0 <= l && l <= 10) {
                return "Black"
            } else if (30 >= s && 87 <= l) {
                return "White"
            } else return "Purple"
        default:
            return "Color not found"
    }

}

// test
//console.log("expected -", RGBToHSL(18, 17, 16))

console.log("expected - black /", "result - ", RGBToHSL(0, 0, 0))
console.log("expected - black /", "result - ", RGBToHSL(17, 18, 17))
console.log("expected - black /", "result - ", RGBToHSL(1, 5, 1))
console.log("expected - black /", "result - ", RGBToHSL(18, 17, 18))
console.log("expected - white /", "result - ", RGBToHSL(230, 237, 230))
console.log("expected - white /", "result - ", RGBToHSL(241, 240, 245))
console.log("expected - white /", "result - ", RGBToHSL(255, 255, 255))
console.log("expected - white /", "result - ", RGBToHSL(247, 246, 242))
console.log("expected - brown /", "result - ", RGBToHSL(180, 89, 24))
console.log("expected - brown /", "result - ", RGBToHSL(92, 29, 0))
console.log("expected - brown /", "result - ", RGBToHSL(128, 0, 0))
console.log("expected - brown /", "result - ", RGBToHSL(103, 72, 34))
console.log("expected - orange /", "result - ", RGBToHSL(255, 69, 0))
console.log("expected - orange /", "result - ", RGBToHSL(255, 94, 0))
console.log("expected - orange /", "result - ", RGBToHSL(227, 126, 14))
console.log("expected - orange /", "result - ", RGBToHSL(252, 171, 81))
console.log("expected - orange /", "result - ", RGBToHSL(168, 114, 54))


console.log("expected - gray /", "result - ", RGBToHSL(207, 207, 207))
console.log("expected - gray /", "result - ", RGBToHSL(177, 179, 177))
console.log("expected - gray /", "result - ", RGBToHSL(77, 77, 77))
console.log("expected - gray /", "result - ", RGBToHSL(33, 36, 33))
console.log("expected - gray /", "result - ", RGBToHSL(192, 192, 192))
console.log("expected - gray /", "result - ", RGBToHSL(220, 220, 220))
console.log("expected - gray /", "result - ", RGBToHSL(105, 105, 105))
console.log("expected - yellow /", "result - ", RGBToHSL(255, 255, 0))
console.log("expected - yellow /", "result - ", RGBToHSL(255, 215, 0))
console.log("expected - yellow /", "result - ", RGBToHSL(240, 230, 140))
console.log("expected - yellow /", "result - ", RGBToHSL(227, 218, 50))
console.log("expected - yellow /", "result - ", RGBToHSL(254, 255, 209))

console.log("expected - red /", "result - ", RGBToHSL(245, 0, 0))
console.log("expected - red /", "result - ", RGBToHSL(255, 0, 0))
console.log("expected - red /", "result - ", RGBToHSL(193, 21, 47))
console.log("expected - red /", "result - ", RGBToHSL(178, 34, 34))
console.log("expected - pink /", "result - ", RGBToHSL(255, 105, 180))
console.log("expected - pink /", "result - ", RGBToHSL(255, 192, 203))
console.log("expected - pink /", "result - ", RGBToHSL(230, 192, 203))
console.log("expected - pink /", "result - ", RGBToHSL(234, 164, 164))
console.log("expected - pink /", "result - ", RGBToHSL(255, 133, 133))
console.log("expected - pink /", "result - ", RGBToHSL(248, 223, 216))
console.log("expected - purple /", "result - ", RGBToHSL(246, 230, 250))
console.log("expected - purple /", "result - ", RGBToHSL(230, 223, 250))
console.log("expected - purple /", "result - ", RGBToHSL(86, 40, 129))
console.log("expected - purple /", "result - ", RGBToHSL(32, 5, 51))
console.log("expected - blue /", "result - ", RGBToHSL(176, 196, 222))
console.log("expected - blue /", "result - ", RGBToHSL(0, 0, 128))
console.log("expected - blue /", "result - ", RGBToHSL(25, 25, 112))
console.log("expected - blue /", "result - ", RGBToHSL(30, 144, 255))
console.log("expected - green /", "result - ", RGBToHSL(127, 255, 212))
console.log("expected - green /", "result - ", RGBToHSL(95, 158, 160))
console.log("expected - green /", "result - ", RGBToHSL(46, 139, 87))
console.log("expected - green /", "result - ", RGBToHSL(0, 255, 0))
console.log("expected - green /", "result - ", RGBToHSL(0, 100, 0))
console.log("expected - green /", "result - ", RGBToHSL(154, 205, 50))








