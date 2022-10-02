const input = (id, name) => {
  return `
    <div class="input-container">
        <input
            class="sign-input"
              autocomplete="off"
              id="${id}"
              placeholder="${name}" />
        <label for="${id}">${name}</label>
    </div>`;
};

document.getElementById("input-section-container").innerHTML +=
  input("name", "Full Name") +
  input("username", "User Name") +
  input("email", "Email");
