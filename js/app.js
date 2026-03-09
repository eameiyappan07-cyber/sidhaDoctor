// ----- i18n (English / Tamil) -----
const i18n = {
  en: {
    brand: "Sugam Siddha & Varmam Clinic",
    tagline: "Traditional healing, modern care",
    cta_whatsapp: "Book on WhatsApp",
    cta_call: "Call Now",
    nav_about: "About",
    nav_services: "Treatments",
    nav_doctor: "Doctor",
    nav_hours: "Hours & Location",
    nav_contact: "Contact",
    hero_line: "Authentic Siddha medicine with herbs, diet, yoga & lifestyle guidance.",
    about_title: "Why Sugam Siddha & Varmam Clinic?",
    about_html: `
  <p>Welcome to the Sugam Siddha & Varmam Clinic in Gudiyatham, where a profound healing tradition meets compassionate modern care. Our story is woven from the ancient threads of Siddha medicine, a legacy passed down through generations, and a deep-seated commitment to our community's well-being. We believe that true health extends beyond the absence of disease; it is a state of complete physical, mental, and spiritual harmony.
At our clinic, we are dedicated to being your partner on your wellness journey. Our mission is to master and modernize the powerful techniques of Varmam therapy and traditional Siddha practices. Every patient is treated with the personalized attention and respect they deserve, in an environment designed for healing and tranquility. Here, you are more than a patient—you are an individual with a unique story, and we are here to listen and guide you back to balance.
Our core belief is centered on the Siddha principle that your body's vital life energy, when in harmony, is the ultimate healer. By focusing on restoring this balance, we help your body unlock its own power to heal naturally. This is the foundation of every treatment we offer and every consultation we provide.</p>
`,
    about_points: `
  <p>At Sugam Siddha & Varmam Clinic, we blend the ancient wisdom...</p>
  <h3>Our Approach to Healing</h3>
  <ul>
    <li><strong>Siddha Medicine:</strong> ...</li>
    <li><strong>Varmam Therapy:</strong> ...</li>
    <li><strong>Thokkanam (Siddha Massage):</strong> ...</li>
  </ul>
  <h3>Why Choose Us?</h3>
  <ul>
    <li><strong>Experienced Practitioners:</strong> ...</li>
    <li><strong>Natural & Effective:</strong> ...</li>
  </ul>
  <img src="images/doctor.jpg" alt="Chief Physician" class="rounded-2xl shadow-md mt-6"/>
`,
    services_title: "Common Conditions We Treat",
    s1: "Joint Pain & Arthritis",
    s2: "Skin Issues (Psoriasis, Eczema)",
    s3: "Gastric & Digestive Disorders",
    s4: "Diabetes & Lifestyle Disorders",
    s5: "Migraine & Sinusitis",
    s6: "Women's Wellness",
    doctor_title: "Meet the Doctor",
    doctor_bio: "Dr. {NAME}, B.S.M.S (Siddha), has helped families heal naturally with time-tested Siddha principles. Known for clear diagnosis and compassionate care.",
    doctor_reg: "Reg. No: TN-XXXX | Experience: 8+ years",
    hours_title: "Hours & Location",
    hours_week: "Mon–Sat: 9:30 AM – 1:00 PM, 5:00 PM – 8:30 PM",
    hours_sun: "Sunday: By Appointment",
    map_hint: "Landmark: near Sri Subramaniyar Temple, Kamatchiamman Pet",
    contact_title: "Contact & Appointments",
    form_name: "Your Name",
    form_phone: "Mobile Number",
    form_issue: "Health Concern (optional)",
    form_submit: "Send Enquiry",
    faq_title: "Frequently Asked Questions",
    faq1_q: "Are medicines included?",
    faq1_a: "Consultation is separate. Medicines are prescribed based on your condition and are charged accordingly.",
    faq2_q: "Do you offer online consultation?",
    faq2_a: "Yes. WhatsApp us to schedule a video or phone consultation.",
    footer: "© " + new Date().getFullYear() + " Sugam Siddha & Varmam Clinic. All rights reserved.",
    lang_label: "தமிழ்"
  },
  ta: {
    brand: "சித்தர் கேர் கிளினிக்",
    tagline: "பாரம்பரிய சிகிச்சை • நவீன பராமரிப்பு",
    cta_whatsapp: "வாட்ஸ்அப்பில் முன்பதிவு",
    cta_call: "இப்போது அழைக்கவும்",
    nav_about: "எங்களைப் பற்றி",
    nav_services: "சிகிச்சைகள்",
    nav_doctor: "மருத்துவர்",
    nav_hours: "நேரம் & இருப்பிடம்",
    nav_contact: "தொடர்பு",
    hero_line: "மூலிகை, உணவு, யோகா, வாழ்க்கை முறைக் கையேடு — சித்த மருத்துவம்.",
    about_title: "ஏன் சித்தர் கேர்?",
    about_points: [
      "தனிப்பட்ட நாடி, நீர்குறி, நெய்குறி ஆய்வு",
      "மூலிகை/உலோக/உணவுக் கட்டுப்பாட்டு மருந்துகள்",
      "அடிக்கண் பிரச்சினை தீர்க்கும் மெல்லிய சிகிச்சை",
      "தடுப்பு சார்ந்த வாழ்க்கை முறைக் அறிவுரை"
    ],
    services_title: "நாங்கள் சிகிச்சையளிக்கும் பொதுவான நோய்கள்",
    s1: "மூட்டு வலி & ஆத்திரைட்டிஸ்",
    s2: "தோல் பிரச்சினைகள் (சொரியாசிஸ், எக்சிமா)",
    s3: "அஜீரணம் & குடல் தொடர்பானவை",
    s4: "சர்க்கரை நோய் & வாழ்க்கை முறை",
    s5: "மைகிரேன் & சைனஸைட்டிஸ்",
    s6: "பெண்கள் நலம்",
    doctor_title: "மருத்துவரை அறிமுகம்",
    doctor_bio: "டாக்டர் {NAME}, B.S.M.S (Siddha), பல குடும்பங்களுக்கு பாரம்பரிய சித்தக் கோட்பாடுகளால் இயற்கையாக குணமடைய உதவி செய்து வருகிறார்.",
    doctor_reg: "பதிவு எண்: TN-XXXX | அனுபவம்: 8+ வருடங்கள்",
    hours_title: "நேரம் & இருப்பிடம்",
    hours_week: "திங்கள்–சனி: காலை 9:30 – 1:00, மாலை 5:00 – 8:30",
    hours_sun: "ஞாயிறு: முன்பதிவின் பேரில்",
    map_hint: "அருகில்: பேருந்து நிலையம் / கோவில்",
    contact_title: "தொடர்பு & முன்பதிவு",
    form_name: "உங்கள் பெயர்",
    form_phone: "மொபைல் எண்",
    form_issue: "உங்கள் பிரச்சினை (விரும்பினால்)",
    form_submit: "விண்ணப்பிக்கவும்",
    faq_title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faq1_q: "மருந்துகள் கட்டணத்தில் வருமா?",
    faq1_a: "ஆலோசனை கட்டணம் தனியே. நோய்த் தன்மைக்கு ஏற்ப மருந்துகள் பரிந்துரைக்கப்படும்.",
    faq2_q: "ஆன்லைன் ஆலோசனை உள்ளதா?",
    faq2_a: "ஆம். வாட்ஸ்அப்பில் தொடர்பு கொண்டு வீடியோ/ஃபோன் ஆலோசனை பெறலாம்.",
    footer: "© " + new Date().getFullYear() + " சித்தர் கேர் கிளினிக். எல்லா உரிமையும் பாதுகாக்கப்பட்டது.",
    lang_label: "EN"
  }
};

function setLang(lang) {
  const t = i18n[lang];
  const byId = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  byId('brand', t.brand);
  byId('tagline', t.tagline);
  byId('hero_line', t.hero_line);
  byId('cta_whatsapp', t.cta_whatsapp);
  byId('cta_call', t.cta_call);
  byId('nav_about', t.nav_about);
  byId('nav_services', t.nav_services);
  byId('nav_doctor', t.nav_doctor);
  byId('nav_hours', t.nav_hours);
  byId('nav_contact', t.nav_contact);
  byId('about_title', t.about_title);
  byId('about_content', t.about_content);
  document.querySelectorAll('[data-about] li').forEach((li, i) => li.textContent = t.about_points[i]);
  document.getElementById("about_content").innerHTML = t.about_html;  
  byId('services_title', t.services_title);
  ['s1','s2','s3','s4','s5','s6'].forEach((k,i)=>{ const el = document.getElementById('svc'+(i+1)); if (el) el.textContent = t[k]; });
  byId('doctor_title', t.doctor_title);
  const docName = document.getElementById('doc_name_input')?.value || 'Your Name';
  byId('doctor_bio', t.doctor_bio.replace('{NAME}', docName));
  byId('doctor_reg', t.doctor_reg);
  byId('hours_title', t.hours_title);
  byId('hours_week', t.hours_week);
  byId('hours_sun', t.hours_sun);
  byId('map_hint', t.map_hint);
  byId('contact_title', t.contact_title);
  byId('form_name_label', t.form_name);
  byId('form_phone_label', t.form_phone);
  byId('form_issue_label', t.form_issue);
  byId('form_submit', t.form_submit);
  byId('faq_title', t.faq_title);
  byId('faq1_q', t.faq1_q); byId('faq1_a', t.faq1_a);
  byId('faq2_q', t.faq2_q); byId('faq2_a', t.faq2_a);
  byId('footer', t.footer);
  byId('lang_toggle', t.lang_label);
  document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
  setLang('en');

  // Toggle language
  document.getElementById('lang_toggle')?.addEventListener('click', () => {
    const now = document.documentElement.lang === 'ta' ? 'en' : 'ta';
    setLang(now);
  });

  // Personalize doctor name & phone
  const upd = () => setLang(document.documentElement.lang);
  document.getElementById('doc_name_input')?.addEventListener('input', upd);
  document.getElementById('clinic_phone_input')?.addEventListener('input', () => {
    const ph = document.getElementById('clinic_phone_input').value.trim();
    const href = ph ? `https://wa.me/${ph.replace(/\D/g,'')}?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.` : '#';
    document.getElementById('wa_link')?.setAttribute('href', href);
    document.getElementById('call_link')?.setAttribute('href', ph ? `tel:${ph}` : '#');
  });

  // Appointment form -> WhatsApp prefill
  document.getElementById('appt_form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('f_name').value.trim();
    const phone = document.getElementById('f_phone').value.trim();
    const issue = document.getElementById('f_issue').value.trim();
    const clinicPhone = document.getElementById('clinic_phone_input').value.trim().replace(/\D/g,'');
    if (!clinicPhone) { alert('Add clinic phone (top right) to enable WhatsApp booking.'); return; }
    const msg = encodeURIComponent(`New enquiry:%0AName: ${name}%0APhone: ${phone}%0AIssue: ${issue}`);
    window.open(`https://wa.me/${clinicPhone}?text=${msg}`, '_blank');
  });
});
