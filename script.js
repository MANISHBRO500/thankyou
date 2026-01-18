const text = `Thank you so much for your years of teaching. I knew very few things earlier, but you were the one who started teaching us something new and meaningful. I have so many memories to share.

One thing I truly want to mention is that the teaching strategies you used were wonderful and very honest. I personally noticed that because of your strategies, I was able to achieve a good score. You can check my previous records—especially in SST, I was an average student before.

But you taught me how to study, and more importantly, how to understand what I study. Another lesson that really stayed with me is that it does not matter whether you start early or finish late; what truly matters is doing the work with perfection.

These lessons will always stay with me, and I am genuinely grateful to you for shaping my learning and mindset.`;

let index = 0;
const speed = 40;

function typeText() {
  if (index < text.length) {
    const char = text.charAt(index);

    if (char === "\n") {
      document.getElementById("text").innerHTML += "<br><br>";
    } else {
      document.getElementById("text").innerHTML += char;
    }

    index++;
    setTimeout(typeText, speed);
  }
}

window.onload = typeText;
