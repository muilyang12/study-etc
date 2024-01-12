const displayPart = document.querySelector("#display-part");
const defaultString = "My name is ";

const state = new Proxy(
  { userName: "" },
  {
    set(state, prop, value) {
      state[prop] = value;
      displayPart.innerHTML = defaultString + value;
    },
  }
);

const nameInput = document.querySelector("#name-input");
const changeNameButton = document.querySelector("#change-name");

changeNameButton.addEventListener("click", () => {
  state.userName = nameInput.value;
  nameInput.value = "";
});

nameInput.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    changeNameButton.click();
  }
});
