const select = (id, name, options, value) => {
  return `
  <div class="input-container">
  <select class="sign-input" id="${id}">
    <option value="none" selected disabled hidden>Select Your ${name}</option>
    ${options.map(
      (option) =>
        `<option value='${option}' ${
          option == value && "selected"
        }>${option}</option>`,
    )}
    </select>
    <label for="${id}">${name}</label>
  </div>`;
};
