const select = (id, name, options) => {
  return `
  <div class="input-container">
  <select class="sign-input" id="${id}">
    <option value="none" selected disabled hidden>Select Your ${name}</option>
    ${options.map((option) => `<option value='${option}'>${option}</option>`)}
    </select>
    <label for="${id}">${name}</label>
  </div>`;
};
