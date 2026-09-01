let input = "";
const password = "1950";

const messages = [
  {
    title: "첫 번째 메시지",
    text: "세상에나 .. 당신은 암산왕?."
  },
  {
    title: "두 번째 메시지",
    text: "성공하다니 ..! 굉장해 엄청나 ..!."
  },
  {
    title: "세 번째 메시지",
    text: "혹시 1인 1회 분량 계산 천재?."
  },
  {
    title: "네 번째 메시지",
    text: "성공 !! 고생했어요 ♥."
  }
];

function pressNumber(number) {
  if (input.length < 4) {
    input += number;
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = input.padEnd(4, "-");
}

function clearInput() {
  input = "";
  updateDisplay();
  document.getElementById("result").textContent = "";
}

function checkPassword() {
  const result = document.getElementById("result");
  const doorWrapper = document.getElementById("doorWrapper");

  if (input === password) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];

    document.getElementById("messageTitle").textContent = selectedMessage.title;
    document.getElementById("messageText").textContent = selectedMessage.text;

    result.style.color = "#7dffb2";
    result.textContent = "비밀번호가 맞았습니다.";
    doorWrapper.classList.add("open");
  } else {
    result.style.color = "#ff8f8f";
    result.textContent = "비밀번호가 틀렸습니다.";
    doorWrapper.classList.add("shake");

    setTimeout(() => {
      doorWrapper.classList.remove("shake");
    }, 300);
  }
}

updateDisplay();
