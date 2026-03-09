/* ============================================================
   Sugam Siddha & Varmam Clinic — app.js
   No external dependencies. Pure vanilla JS.
   ============================================================ */

/* ---------- Clinic Configuration --------------------------- */
const CONFIG = {
  phone:     "9566566211",
  whatsapp:  "919566566211",
  doctor:    "Dr. S. Thillaivanan, B.S.M.S., M.D",
  clinic:    "Sugam Siddha & Varmam Clinic",
  address:   "No.24/1, Melpatti Road, (Near Sri Subramaniyar Temple), Kamatchiamman Pet, Gudiyattam – 632602, Vellore Dt., Tamil Nadu",
  mapsLink:  "https://maps.app.goo.gl/FbB4RVJu7fn4Y7Y98",
};

/* ---------- Bilingual Content ------------------------------ */
const LANG = {
  en: {
    lang_toggle:      "தமிழில் பார்க்கவும்",
    brand:            "Sugam Siddha & Varmam Clinic",
    tagline:          "Traditional Healing • Modern Care",
    nav_about:        "About",
    nav_services:     "Treatments",
    nav_doctor:       "Doctor",
    nav_hours:        "Hours",
    nav_contact:      "Contact",
    cta_whatsapp:     "📲 WhatsApp",
    cta_call:         "📞 Call",
    hero_line:        "Rooted in ancient Siddha wisdom, guided by qualified expertise — for lasting wellness.",
    about_title:      "About Our Clinic",
    about_content:    `<p>Sugam Siddha & Varmam Clinic offers authentic Siddha medicine rooted in Tamil heritage. We combine traditional diagnostic techniques — Naadi, Neerkuri, Neikuri — with personalised herbal protocols to address the root cause of illness, not just its symptoms.</p>
                       <p>Our approach integrates dietary guidance, therapeutic oils, Varmam therapy, and yoga/pranayama recommendations for complete, sustainable healing.</p>`,
    doctor_reg:       "Registered with Tamil Nadu Siddha Medical Council",
    about_title2:     "Meet the Doctor",
    doctor_title:     "Dr. S. Thillaivanan, B.S.M.S., M.D (Siddha)",
    doctor_bio:       "A qualified Siddha practitioner with 8+ years of clinical experience in treating musculoskeletal, digestive, dermatological, and lifestyle disorders using classical Siddha formulations. Committed to holistic patient care and preventive wellness.",
    services_title:   "Treatments We Offer",
    svc1: "Joint & Muscle Disorders",
    svc2: "Skin Conditions",
    svc3: "Digestive Ailments",
    svc4: "Diabetes & Lifestyle",
    svc5: "Neuro & Stress Disorders",
    svc6: "Women's Health",
    hours_title:      "Clinic Hours & Location",
    hours_week:       "Mon – Sat: 9:30 AM – 1:00 PM & 5:00 PM – 8:30 PM",
    hours_sun:        "Sunday: Closed",
    contact_title:    "Book an Appointment",
    form_name_label:  "Your Name",
    form_phone_label: "Phone Number",
    form_issue_label: "Health Concern (optional)",
    form_submit:      "Send via WhatsApp →",
    faq_title:        "Frequently Asked Questions",
    faq1_q:           "Is Siddha medicine safe alongside other treatments?",
    faq1_a:           "Siddha medicine is generally safe. Please inform our doctor about any ongoing medications so we can tailor the protocol accordingly.",
    faq2_q:           "How soon can I see results?",
    faq2_a:           "Chronic conditions typically show improvement over 4–8 weeks with regular follow-ups. Acute complaints often respond within days.",
    footer:           `© ${new Date().getFullYear()} Sugam Siddha & Varmam Clinic. All rights reserved.`,
  },
  ta: {
    lang_toggle:      "View in English",
    brand:            "சுகம் சித்த & வர்மம் கிளினிக்",
    tagline:          "பாரம்பரிய குணப்படுத்தல் • நவீன கவனிப்பு",
    nav_about:        "எங்களைப் பற்றி",
    nav_services:     "சிகிச்சைகள்",
    nav_doctor:       "மருத்துவர்",
    nav_hours:        "நேரம்",
    nav_contact:      "தொடர்பு",
    cta_whatsapp:     "📲 வாட்ஸ்அப்",
    cta_call:         "📞 அழைக்கவும்",
    hero_line:        "பண்டைய சித்த ஞானம், தகுதிவாய்ந்த நிபுணத்துவம் — நிலையான ஆரோக்கியத்திற்காக.",
    about_title:      "எங்கள் கிளினிக் பற்றி",
    about_content:    `<p>சுகம் சித்த & வர்மம் கிளினிக் தமிழ் பாரம்பரியத்தில் வேரூன்றிய உண்மையான சித்த மருத்துவத்தை வழங்குகிறது. நாடி, நீர்க்குறி, நெய்க்குறி போன்ற பாரம்பரிய நோயறிதல் நுட்பங்களை ஆலோசனை செய்கிறோம்.</p>
                       <p>உணவு வழிகாட்டுதல், மூலிகை எண்ணெய்கள், வர்மம் சிகிச்சை, யோகா மற்றும் பிராணயாமம் ஆகியவற்றை ஒருங்கிணைத்து முழுமையான குணமடைதலை வழங்குகிறோம்.</p>`,
    doctor_reg:       "தமிழ்நாடு சித்த மருத்துவ கவுன்சிலில் பதிவுசெய்யப்பட்டவர்",
    about_title2:     "மருத்துவரை சந்திக்க",
    doctor_title:     "டாக்டர் ச. தில்லைவாணன், B.S.M.S., M.D (சித்தா)",
    doctor_bio:       "8+ வருட மருத்துவ அனுபவம் கொண்ட தகுதிவாய்ந்த சித்த மருத்துவர். மூட்டு, செரிமானம், தோல் மற்றும் வாழ்க்கைமுறை நோய்களை சிகிச்சை அளிக்கிறார்.",
    services_title:   "நாங்கள் வழங்கும் சிகிச்சைகள்",
    svc1: "மூட்டு & தசை நோய்கள்",
    svc2: "தோல் நோய்கள்",
    svc3: "செரிமான பிரச்சினைகள்",
    svc4: "நீரிழிவு & வாழ்க்கைமுறை",
    svc5: "நரம்பு & மன அழுத்தம்",
    svc6: "பெண்கள் ஆரோக்கியம்",
    hours_title:      "கிளினிக் நேரம் & இடம்",
    hours_week:       "திங்கள் – சனி: காலை 9:30 – 1:00 & மாலை 5:00 – 8:30",
    hours_sun:        "ஞாயிறு: விடுமுறை",
    contact_title:    "சந்திப்பு பதிவு",
    form_name_label:  "உங்கள் பெயர்",
    form_phone_label: "தொலைபேசி எண்",
    form_issue_label: "உடல் நல பிரச்சினை (விருப்பமானால்)",
    form_submit:      "வாட்ஸ்அப் மூலம் அனுப்பவும் →",
    faq_title:        "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faq1_q:           "மற்ற சிகிச்சைகளுடன் சித்த மருந்துகள் பாதுகாப்பானதா?",
    faq1_a:           "சித்த மருந்துகள் பொதுவாக பாதுகாப்பானவை. நடந்துகொண்டிருக்கும் மருந்துகளை மருத்துவரிடம் தெரிவிக்கவும்.",
    faq2_q:           "முடிவுகளை எப்போது பார்ப்பேன்?",
    faq2_a:           "நாட்பட்ட நோய்கள் 4–8 வாரங்களில் முன்னேற்றம் காட்டும். கூர்மையான புகார்கள் சில நாட்களிலேயே பதிலளிக்கும்.",
    footer:           `© ${new Date().getFullYear()} சுகம் சித்த & வர்மம் கிளினிக். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`,
  }
};

/* ---------- State ------------------------------------------ */
let currentLang = localStorage.getItem("lang") || "en";

/* ---------- Render ----------------------------------------- */
function render(lang) {
  const T = LANG[lang];

  // Helper: set text or innerHTML
  const set = (id, val, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = val; else el.textContent = val;
  };

  // Topbar
  set("lang_toggle", T.lang_toggle);

  // Header
  set("brand",        T.brand);
  set("tagline",      T.tagline);
  set("nav_about",    T.nav_about);
  set("nav_services", T.nav_services);
  set("nav_doctor",   T.nav_doctor);
  set("nav_hours",    T.nav_hours);
  set("nav_contact",  T.nav_contact);
  set("cta_whatsapp", T.cta_whatsapp);
  set("cta_call",     T.cta_call);

  // WhatsApp / Call links
  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hello, I'd like to book an appointment at Sugam Siddha Clinic.")}`;
  document.querySelectorAll(".wa-link").forEach(el => el.href = waUrl);
  document.querySelectorAll(".call-link").forEach(el => el.href = `tel:${CONFIG.phone}`);

  // Hero
  set("hero_line", T.hero_line);

  // About
  set("about_title",   T.about_title);
  set("about_content", T.about_content, true);
  set("doctor_reg",    T.doctor_reg);

  // Doctor section
  set("doctor_title", T.doctor_title);
  set("doctor_bio",   T.doctor_bio);

  // Services
  set("services_title", T.services_title);
  for (let i = 1; i <= 6; i++) set(`svc${i}`, T[`svc${i}`]);

  // Hours
  set("hours_title", T.hours_title);
  set("hours_week",  T.hours_week);
  set("hours_sun",   T.hours_sun);

  // Contact
  set("contact_title",    T.contact_title);
  set("form_name_label",  T.form_name_label);
  set("form_phone_label", T.form_phone_label);
  set("form_issue_label", T.form_issue_label);
  set("form_submit",      T.form_submit);

  // FAQ
  set("faq_title", T.faq_title);
  set("faq1_q",    T.faq1_q);
  set("faq1_a",    T.faq1_a);
  set("faq2_q",    T.faq2_q);
  set("faq2_a",    T.faq2_a);

  // Footer
  set("footer", T.footer);
}

/* ---------- Lang toggle ------------------------------------ */
document.getElementById("lang_toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ta" : "en";
  localStorage.setItem("lang", currentLang);
  render(currentLang);
});

/* ---------- WhatsApp form submission ----------------------- */
document.getElementById("appt_form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name  = document.getElementById("f_name").value.trim();
  const phone = document.getElementById("f_phone").value.trim();
  const issue = document.getElementById("f_issue").value.trim();
  if (!name || !phone) return;
  const msg = `Hello Doctor,\n\nName: ${name}\nPhone: ${phone}\nConcern: ${issue || "Not specified"}\n\nI would like to book an appointment at Sugam Siddha Clinic.`;
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});

/* ---------- Scroll-reveal (IntersectionObserver) ----------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("visible"));
}

/* ---------- Init ------------------------------------------- */
render(currentLang);
