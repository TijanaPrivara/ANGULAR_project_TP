document.addEventListener("DOMContentLoaded", function () {
  const emojiButton = document.getElementById("emoji-button");
  const messageInput = document.getElementById("message-input");

  const emojiPicker = new EmojiButton({
    position: 'bottom-start',
    autoHide: true,
  });

  emojiButton.addEventListener("click", function () {
    emojiPicker.togglePicker(emojiButton);
  });

  emojiPicker.on("emoji", (emoji) => {
    messageInput.value += emoji;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const emojiButton = document.getElementById("emoji-button");
    const emojiList = document.getElementById("emoji-list");
    const messageInput = document.getElementById("message-input");
  
    emojiButton.addEventListener("click", function () {
      emojiList.style.display = emojiList.style.display === "block" ? "none" : "block";
    });
  
    emojiList.addEventListener("click", function (e) {
      if (e.target.tagName === "SPAN") {
        const emoji = e.target.textContent;
        messageInput.value += emoji;
      }
    });
  });
  
});
