
const colors = ['skyblue', 'pink', 'lavender', 'mistyrose', 'honeydew', 'lightyellow'];

document.getElementById("theme-btn").addEventListener("click", function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
})