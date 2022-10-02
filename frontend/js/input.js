const input = (id, name) => {
  return `
    <div class="input-container" id="${id}-container">
        <input
            class="sign-input"
              autocomplete="off"
              id="${id}"
              type=${id == "password" ? "password" : "text"}
              placeholder="${name}" />
        <label for="${id}">${name}</label>
    </div>`;
};
