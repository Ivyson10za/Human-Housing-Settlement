
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

// Replace this with your real company email address before publishing.
const companyEmail = "YOUR-COMPANY-EMAIL@example.com";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    if (
      companyEmail === "YOUR-COMPANY-EMAIL@example.com" ||
      !companyEmail.includes("@")
    ) {
      formNote.textContent =
        "Please add your official company email in script.js before using this form.";
      formNote.style.color = "#a12d2d";
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get("name").toString().trim();
    const email = formData.get("email").toString().trim();
    const subject = formData.get("subject").toString();
    const message = formData.get("message").toString().trim();

    const emailSubject = encodeURIComponent(
      "Website enquiry: " + subject
    );

    const emailBody = encodeURIComponent(
      "Human Housing Settlement (Pty) Ltd website enquiry\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Enquiry type: " + subject + "\n\n" +
      "Message:\n" + message
    );

    const mailtoLink =
      "mailto:" + companyEmail +
      "?subject=" + emailSubject +
      "&body=" + emailBody;

    formNote.textContent =
      "Your email application should open with the enquiry prepared. Please send it from your email application.";

    window.location.href = mailtoLink;
  });
}
