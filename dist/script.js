// Navbar
const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector("#navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
  navigation.classList.toggle("flex");
  hamburger.classList.toggle("active");
});

// Send email
async function sendEmail({ fromEmail, fromName, message }) {
  const apiUrl = "https://email-rest-api.vercel.app/sendemail";

  const emailData = {
    fromEmail,
    fromName,
    message,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const form = document.querySelector("#formEmail");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let [name, email, message] = [
    document.querySelector("#name").value,
    document.querySelector("#email").value,
    document.querySelector("#message").value,
  ];
  if (name && email && message) {
    await sendEmail({
      fromEmail: email,
      fromName: name,
      message: message,
    });
    console.log("triggered");
    alert("Email terkirim :)");
  }
});

// Project btn
function navigateToUrl(url) {
  window.open(url, "_blank");
}
