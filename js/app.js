/* ============================================================
   Sugam Siddha & Varmam Clinic — app.js
   No external dependencies. Pure vanilla JS.
   ============================================================ */

const CONFIG = {
  phone:    "9566566211",
  wa:       "919566566211",
  mapsLink: "https://maps.app.goo.gl/FbB4RVJu7fn4Y7Y98",
};

/* ── Bilingual Content ──────────────────── */
const LANG = {
  en: {
    toggle:           "தமிழில் பார்க்கவும்",
    brand:            "Sugam Siddha & Varmam Clinic",
    tagline:          "Traditional Healing • Modern Care",
    nav_about:        "About",
    nav_services:     "Treatments",
	nav_books:        "Books",						  
    nav_doctor:       "Doctor",
    nav_hours:        "Hours",
    nav_contact:      "Contact",
    cta_wa:           "📲 WhatsApp",
    cta_call:         "📞 Call",
    hero_sub:         "Rooted in ancient Siddha wisdom, guided by qualified expertise — for lasting wellness.",
    about_title:      "About Our Clinic",
    about_content:    `<p>Sugam Siddha & Varmam Clinic offers authentic Siddha medicine rooted in Tamil heritage. We combine traditional diagnostic techniques — Naadi, Neerkuri, Neikuri — with personalised herbal protocols to address the root cause of illness, not just its symptoms.</p><p>Our approach integrates dietary guidance, therapeutic oils, Varmam therapy, and yoga/pranayama recommendations for complete, sustainable healing.</p>`,
    doctor_reg:       "Registered with Tamil Nadu Siddha Medical Council",
    doctor_name:      "Dr. S. Thillaivanan",
    doctor_bio:       "A qualified Siddha practitioner with 8+ years of clinical experience in treating musculoskeletal, digestive, dermatological, and lifestyle disorders using classical Siddha formulations. Committed to holistic patient care and preventive wellness.",
    services_title:   "Treatments We Offer",
    svc1: "Joint & Muscle Disorders",
    svc2: "Skin Conditions",
    svc3: "Digestive Ailments",
    svc4: "Diabetes & Lifestyle",
    svc5: "Neuro & Stress Disorders",
    svc6: "Women's Health",
    hours_title:      "Clinic Hours & Location",
    hours_days_1:     "Mon – Sat (Morning)",
    hours_time_1:     "9:30 AM – 1:00 PM",
    hours_days_2:     "Mon – Sat (Evening)",
    hours_time_2:     "5:00 PM – 8:30 PM",
    hours_days_3:     "Sunday",
    hours_time_3:     "Closed",
    contact_title:    "Book an Appointment",
    form_name_label:  "Your Name",
    form_phone_label: "Phone Number",
    form_issue_label: "Health Concern (optional)",
    form_submit:      "Send via WhatsApp →",
    faq_title:        "FREQUENTLY ASKED QUESTIONS",
    faq1_q:           "Is Siddha medicine safe alongside other treatments?",
    faq1_a:           "Siddha medicine is generally safe. Please inform our doctor about any ongoing medications so we can tailor the protocol accordingly.",
    faq2_q:           "How soon can I expect results?",
    faq2_a:           "Chronic conditions typically show improvement over 4–8 weeks with regular follow-ups. Acute complaints often respond within days.",
    footer:           `© ${new Date().getFullYear()} Sugam Siddha & Varmam Clinic. All rights reserved.`,
  },
  ta: {
    toggle:           "View in English",
    brand:            "சுகம் சித்த & வர்மம் கிளினிக்",
    tagline:          "பாரம்பரிய குணப்படுத்தல் • நவீன கவனிப்பு",
    nav_about:        "எங்களைப் பற்றி",
    nav_services:     "சிகிச்சைகள்",
	nav_books:        "நூல்கள்",										  
    nav_doctor:       "மருத்துவர்",
    nav_hours:        "நேரம்",
    nav_contact:      "தொடர்பு",
    cta_wa:           "📲 வாட்ஸ்அப்",
    cta_call:         "📞 அழைக்கவும்",
    hero_sub:         "பண்டைய சித்த ஞானம், தகுதிவாய்ந்த நிபுணத்துவம் — நிலையான ஆரோக்கியத்திற்காக.",
    about_title:      "எங்கள் கிளினிக் பற்றி",
    about_content:    `<p>சுகம் சித்த & வர்மம் கிளினிக் தமிழ் பாரம்பரியத்தில் வேரூன்றிய உண்மையான சித்த மருத்துவத்தை வழங்குகிறது.</p><p>உணவு வழிகாட்டுதல், மூலிகை எண்ணெய்கள், வர்மம் சிகிச்சை, யோகா மற்றும் பிராணயாமம் ஒருங்கிணைத்து முழுமையான குணமடைதலை வழங்குகிறோம்.</p>`,
    doctor_reg:       "தமிழ்நாடு சித்த மருத்துவ கவுன்சிலில் பதிவுசெய்யப்பட்டவர்",
    doctor_name:      "டாக்டர் ச. தில்லைவாணன்",
    doctor_bio:       "8+ வருட மருத்துவ அனுபவம் கொண்ட தகுதிவாய்ந்த சித்த மருத்துவர். மூட்டு, செரிமானம், தோல் மற்றும் வாழ்க்கைமுறை நோய்களை சிகிச்சை அளிக்கிறார்.",
    services_title:   "நாங்கள் வழங்கும் சிகிச்சைகள்",
    svc1: "மூட்டு & தசை நோய்கள்",
    svc2: "தோல் நோய்கள்",
    svc3: "செரிமான பிரச்சினைகள்",
    svc4: "நீரிழிவு & வாழ்க்கைமுறை",
    svc5: "நரம்பு & மன அழுத்தம்",
    svc6: "பெண்கள் ஆரோக்கியம்",
    hours_title:      "கிளினிக் நேரம் & இடம்",
    hours_days_1:     "திங்கள் – சனி (காலை)",
    hours_time_1:     "காலை 9:30 – 1:00",
    hours_days_2:     "திங்கள் – சனி (மாலை)",
    hours_time_2:     "மாலை 5:00 – 8:30",
    hours_days_3:     "ஞாயிறு",
    hours_time_3:     "விடுமுறை",
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

/* ── State ──────────────────────────────── */
let lang = "en";
try { lang = localStorage.getItem("siddha_lang") || "en"; } catch(e) {}

/* ── Render ─────────────────────────────── */
function set(id, val, html) {
  const el = document.getElementById(id);
  if (!el) return;
  html ? (el.innerHTML = val) : (el.textContent = val);
}

function render(l) {
  const T = LANG[l];

  // Topbar
  set("lang_toggle", T.toggle);

  // Header
  set("brand",   T.brand);
  set("tagline", T.tagline);

  // Desktop + mobile nav (same text)
  const navPairs = [
    ["nav_about",    "mob_about",    T.nav_about],
    ["nav_services", "mob_services", T.nav_services],
	["nav_books",    "mob_books",    T.nav_books],											  
    ["nav_doctor",   "mob_doctor",   T.nav_doctor],
    ["nav_hours",    "mob_hours",    T.nav_hours],
    ["nav_contact",  "mob_contact",  T.nav_contact],
  ];
  navPairs.forEach(([desk, mob, txt]) => { set(desk, txt); set(mob, txt); });

  // CTA
  set("cta_whatsapp", T.cta_wa);
  set("cta_call",     T.cta_call);
  set("mob_cta_wa",   T.cta_wa);
  set("mob_cta_call", T.cta_call);

  // WhatsApp / Call href
  const waMsg = encodeURIComponent("Hello Doctor, I would like to book an appointment at Sugam Siddha Clinic.");
  const waUrl = `https://wa.me/${CONFIG.wa}?text=${waMsg}`;
  document.querySelectorAll(".wa-link").forEach(a => a.href = waUrl);
  document.querySelectorAll(".call-link").forEach(a => a.href = `tel:${CONFIG.phone}`);

  // Hero
  set("hero_sub", T.hero_sub);

  // About
  set("about_title",   T.about_title);
  set("about_content", T.about_content, true);
  set("doctor_reg",    T.doctor_reg);

  // Doctor
  set("doctor_name", T.doctor_name);
  set("doctor_bio",  T.doctor_bio);

  // Services
  set("services_title", T.services_title);
  for (let i = 1; i <= 6; i++) set(`svc${i}`, T[`svc${i}`]);

  // Hours
  set("hours_title",   T.hours_title);
  set("hours_days_1",  T.hours_days_1);
  set("hours_time_1",  T.hours_time_1);
  set("hours_days_2",  T.hours_days_2);
  set("hours_time_2",  T.hours_time_2);
  set("hours_days_3",  T.hours_days_3);
  set("hours_time_3",  T.hours_time_3);

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
  set("footer_copy", T.footer);
}

/* ── Language toggle ────────────────────── */
document.getElementById("lang_toggle").addEventListener("click", () => {
  lang = lang === "en" ? "ta" : "en";
  try { localStorage.setItem("siddha_lang", lang); } catch(e) {}
  render(lang);
});

/* ── Hamburger menu ─────────────────────── */
const hamburger = document.getElementById("hamburger");
const drawer    = document.getElementById("mobile-drawer");

hamburger.addEventListener("click", () => {
  const open = drawer.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
});

// Close drawer when a nav link is clicked
drawer.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    drawer.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Close drawer on outside click
document.addEventListener("click", (e) => {
  if (!document.getElementById("site-header").contains(e.target)) {
    drawer.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

/* ── WhatsApp form ──────────────────────── */
document.getElementById("appt_form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name  = document.getElementById("f_name").value.trim();
  const phone = document.getElementById("f_phone").value.trim();
  const issue = document.getElementById("f_issue").value.trim();
  if (!name || !phone) {
    alert("Please enter your name and phone number.");
    return;
  }
  const msg = `Hello Doctor,\n\nName: ${name}\nPhone: ${phone}\nConcern: ${issue || "Not specified"}\n\nI would like to book an appointment at Sugam Siddha Clinic.`;
  window.open(`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* ── Scroll reveal ──────────────────────── */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

/* ── Init ───────────────────────────────── */
render(lang);
setupReveal();
