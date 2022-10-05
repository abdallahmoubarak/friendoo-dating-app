const input = (id, name, value) => {
  return `
    <div class="input-container" id="${id}-container">
        <input
            class="sign-input"
              autocomplete="off"
              id="${id}"
              type=${id == "password" ? "password" : "text"}
              placeholder="${name}"
              value='${value || ""}'
              />
        <label for="${id}">${name}</label>
    </div>`;
};
