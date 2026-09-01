let input = "";
const password = "1950";

const messages = [
  {
    title: "첫 번째 메시지",
    text: "와우 벌써 정답을 맞추다니 혹시 천재?",
    image: "photo 1.jpg"
  },
  {
    title: "두 번째 메시지",
    text: "굉장해 엄청나 ..! 1인 1회 분량 천재 ..!",
    image: "photo 2.jpg"
  },
  {
    title: "세 번째 메시지",
    text: "당신 혹시 숫자의 마술사 ..?",
    image: "photo 3.jpg"
  },
{
    title: "첫 번째 메시지",
    text: "최고최고 고생했어요 ♥",
    image: "photo 4.jpg"
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
    document.getElementById("messageImage").src = selectedMessage.image;

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
