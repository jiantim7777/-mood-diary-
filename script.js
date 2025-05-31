function respondMood() {
  const input = document.getElementById("moodInput").value.toLowerCase();
  const responseBox = document.getElementById("response");

  let response = "謝謝你分享，我在這裡陪著你。";

  if (input.includes("難過") || input.includes("憂鬱") || input.includes("傷心")) {
    response = "別太難過了，記得好好休息，我會一直在你身邊。💛";
  } else if (input.includes("生氣") || input.includes("煩") || input.includes("火大")) {
    response = "有情緒是正常的，深呼吸一下，希望你能感到平靜 🌿";
  } else if (input.includes("累") || input.includes("疲倦") || input.includes("不想動")) {
    response = "你真的很努力了，請給自己一點時間休息 💤";
  } else if (input.includes("快樂") || input.includes("開心") || input.includes("興奮")) {
    response = "太好了～聽到你開心的事我也很開心 😄";
  }

  responseBox.textContent = response;
}

function trackVisits() {
  let count = localStorage.getItem("visitCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("visitCount", count);

  const greeting = document.getElementById("greeting");
  const visitCountDisplay = document.getElementById("visitCount");

  let greetingText = "";
  if (count === 1) {
    greetingText = "你好，初次見面！歡迎來到你的心情日記本 🤗";
  } else if (count <= 5) {
    greetingText = `第 ${count} 次回來了～我一直都在這裡喔 🌈`;
  } else {
    greetingText = `歡迎回家，第 ${count} 次回來了！希望今天也能陪伴你 ❤️`;
  }

  greeting.textContent = greetingText;
  visitCountDisplay.textContent = `你已經造訪這個日記本 ${count} 次了 💗`;
}

window.onload = function () {
  trackVisits();
};
