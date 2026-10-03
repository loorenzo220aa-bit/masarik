/* =========================================================
   مسارك — Masarik · إعدادات الصفحة وآلية طلب واتساب
   عدّل ما في كائن CONFIG فقط، ولا تحتاج لتعديل أي شيء آخر.
   ========================================================= */

const CONFIG = {
  /* ⬇️ ضع رقم واتساب بصيغة دولية بدون + وبدون أصفار على اليسار
       مثال: السعودية 0501234567 ← 966501234567 */
  whatsapp: '966562667085',

  brand: 'مسارك',
  email: 'hello@masarik.example',

  /* أرقام الصفحة الثانوية (غيّرها بعد رفع الموقع على نطاق حقيقي) */
  siteUrl: 'https://masarik.example',

  /* التقييمات: اتركها false حتى تحصل على تقييمات حقيقية من عملائك،
     ثم ضعها true بعد كتابة التعليقات الحقيقية في مصفوفة REVIEWS. */
  showReviews: false,

  currency: 'ر.س',

  packages: [
    {
      id: 'basic',
      name: 'الأساسية',
      price: 150,
      desc: 'لمن يملك المحتوى جاهزاً ويحتاج تنسيقاً احترافياً سريعاً.',
      featured: false,
      items: [
        ['سيرة ذاتية (عربية أو إنجليزية)', true],
        ['تنسيق احترافي متوافق مع ATS', true],
        ['تصحيح لغوي وإملائي كامل', true],
        ['تصدير PDF + Word', true],
        ['تعديلين مجانيين', true],
        ['التسليم خلال ٤٨ ساعة', true],
        ['رسالة تعريفية', false],
        ['تهيئة حساب لينكدإن', false],
      ],
    },
    {
      id: 'pro',
      name: 'الاحترافية',
      price: 250,
      desc: 'الأكثر طلباً: محتوى يُكتب من الصفر + تهيئة حسابك الرقمي.',
      featured: true,
      items: [
        ['كل ما في الباقة الأساسية', true],
        ['إعادة صياغة خبراتك إلى إنجازات قابلة للقياس', true],
        ['رسالة تعريفية جاهزة', true],
        ['مطابقة الملف مع وصف الوظيفة المستهدف', true],
        ['تهيئة حساب لينكدإن', true],
        ['تصدير PDF + Word', true],
        ['تعديلين مجانيين', true],
        ['نسخة عربية + إنجليزية معاً', false],
      ],
    },
    {
      id: 'abroad',
      name: 'الابتعاث والتقديم الخارجي',
      price: 400,
      desc: 'للتقديم على برامج الابتعاث والوظائف الخليجية والدولية.',
      featured: false,
      items: [
        ['كل ما في الباقة الاحترافية', true],
        ['نسختان: عربية وإنجليزية', true],
        ['مطابقة مع متطلبات الجهة المقدِّمة', true],
        ['مراجعة أوراق الشهادات والوثائق', true],
        ['استشارة تحضيرية ٢٠ دقيقة', true],
        ['أولوية تنفيذ خلال ٢٤ ساعة', true],
        ['تعديلين مجانيين', true],
        ['—', false],
      ],
    },
  ],

  addons: [
    { name: 'تسليم عاجل خلال ٢٤ ساعة', hint: 'يُضاف على أي باقة', amount: '+75' },
    { name: 'رسالة تعريفية لجهة محددة', hint: 'صياغة حسب الإعلان الوظيفي', amount: '+50' },
    { name: 'تهيئة حساب لينكدإن كاملاً', hint: 'العنوان والملخص والمهارات', amount: '+100' },
    { name: 'جلسة تحضير مقابلة ٣٠ دقيقة', hint: 'أسئلة شائعة + إجاباتك', amount: '+150' },
    { name: 'ملف أعمال / بورتفوليو PDF', hint: 'حتى ٦ صفحات', amount: '+120' },
  ],

  faq: [
    ['كم تستغرق مدة تنفيذ السيرة الذاتية؟',
     'من ٤٨ ساعة للخدمة العادية، و٢٤ ساعة لخدمة الاستعجال. الباقة الشاملة تستغرق حتى ٧٢ ساعة لتشمل نسختين وتهيئة لينكدإن.'],
    ['هل الملف متوافق مع أنظمة التوظيف ATS؟',
     'نعم. نستخدم عناوين أقسام وكلمات مفتاحية يقرأها النظام آلياً، ونصدّر الملف بصيغة PDF وWord نظيفة — بلا جداول معقدة أو صور تعطّل القراءة.'],
    ['هل تكتبون المحتوى أم تكتفون بالتنسيق؟',
     'نكتب المحتوى كاملاً: نستخرج من الاستمارة التي تملؤها ومن سيرتك السابقة، ثم نحوّل مسؤولياتك إلى إنجازات قابلة للقياس بصياغة احترافية.'],
    ['ماذا لو لم تعجبني النتيجة؟',
     'تحصل على تعديلين مجانيين دون أسئلة. وإذا لم تقتنع بعد التعديلين، نُعيد لك كامل المبلغ.'],
    ['هل تضمنون الحصول على وظيفة أو قبول في الابتعاث؟',
     'لا يمكن لأحد ضمان قرار جهة توظيف. نضمن جودة الملف ودقّة معلوماته وتسليمه في الموعد — وهذا ما يرفع نسبة ردود التوظيف فعلياً.'],
    ['هل بياناتي وملفي آمنة؟',
     'نعم. ملفك يُستخدم لتنفيذ طلبك فقط، ولا يُشارك مع أي جهة، ويُحذف من أجهزتنا فور انتهاء الخدمة إذا طلبت ذلك.'],
    ['ما طرق الدفع المتاحة؟',
     'تحويل بنكي محلي، أو STC Pay / مدى. لا يبدأ التنفيذ قبل تأكيد التحويل وإرسالك صورة الإيصال.'],
    ['هل تخدمون خارج السعودية؟',
     'نعم، نخدم دول الخليج والعالم. ننسّق السيرة وفق السوق المستهدف: سعودي، خليجي، أو دولي — بمعايير وصياغة مناسبة لكل سوق.'],
  ],

  /* ⚠️ استبدل هذه بتقييمات حقيقية من عملائك الفعليين قبل تفعيل showReviews */
  reviews: [
    { text: 'أرسلت سيرتي وعدّلها خلال يومين، ووصلتني ٣ مقابلات خلال أسبوع واحد بعد ما كنت أترفض صامت.', name: 'ن. العتيبي', role: 'أخصائية موارد بشرية — الرياض', stars: 5 },
    { text: 'كنت أتقديم للابتعاث وما تأكد من صياغتي بالإنجليزي. الخدمة رتّبت كل شيء ووضعت الكلمات المفتاحية الصحيحة.', name: 'م. الشمري', role: 'متقدم ماجستير', stars: 5 },
    { text: 'التعديلات كانت سريعة وبدون أي نقاش، والملف وصلني PDF وWord نظيفين ومتوافقين مع نظام الشركة.', name: 'س. القحطاني', role: 'مهندس تقنية — جدة', stars: 5 },
  ],
};

/* ================= helpers ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* مصدر الطلب: ?ref= أو utm_source — يُرسل مع الرسالة ليعرف صاحب الموقع من أين جاءه */
const SOURCE = (() => {
  const p = new URLSearchParams(location.search);
  const raw = p.get('ref') || p.get('utm_source') || '';
  if (!raw) return '';
  return String(raw).replace(/[^a-zA-Z0-9_\-.\u0600-\u06FF]/g, '').slice(0, 30);
})();

const toastEl = () => $('#toast');
function toast(msg) {
  const t = toastEl();
  if (!t) return;
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('on'), 3200);
}

/* ================= واتساب ================= */
function waLink(message) {
  const num = String(CONFIG.whatsapp).replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

function greeting(pkg) {
  let m = `السلام عليكم 👋\nأبغى أطلب خدمة سيرة ذاتية${pkg ? ` — الباقة: ${pkg}` : ''}.\n`;
  if (SOURCE) m += `\nمصدر الطلب: ${SOURCE}`;
  return m;
}

function openWa(message) {
  const url = waLink(message);
  window.open(url, '_blank', 'noopener');
  return url;
}

/* ================= رسم العناصر ================= */
function renderPlans() {
  const host = $('#plans');
  if (!host) return;
  host.innerHTML = CONFIG.packages.map((p) => `
    <div class="plan ${p.featured ? 'featured' : ''}">
      <h4>${esc(p.name)}</h4>
      <p class="desc">${esc(p.desc)}</p>
      <div class="price">${p.price}<small> ${CONFIG.currency}</small></div>
      <ul>${p.items.map(([label, on]) =>
        `<li class="${on ? '' : 'off'}">${esc(label)}</li>`).join('')}</ul>
      <button class="btn ${p.featured ? 'btn-primary' : 'btn-line'} btn-block"
              type="button" data-wa="pkg:${esc(p.name)}">اطلب ${esc(p.name)}</button>
    </div>`).join('');
}

function renderAddons() {
  const host = $('#addons');
  if (!host) return;
  host.innerHTML = CONFIG.addons.map((a) => `
    <div class="addon">
      <div><b>${esc(a.name)}</b><span>${esc(a.hint)}</span></div>
      <div class="amt">${esc(a.amount)} ${CONFIG.currency}</div>
    </div>`).join('');
}

function renderFaq() {
  const host = $('#faqList');
  if (!host) return;
  host.innerHTML = CONFIG.faq.map(([q, a], i) => `
    <details class="qa" ${i === 0 ? 'open' : ''}>
      <summary>${esc(q)}</summary>
      <p class="ans">${esc(a)}</p>
    </details>`).join('');
}

function renderReviews() {
  const section = $('#reviews');
  if (!section) return;
  if (!CONFIG.showReviews) { section.hidden = true; return; }
  section.hidden = false;
  $('#reviews-grid').innerHTML = CONFIG.reviews.map((r) => `
    <div class="review">
      <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p>«${esc(r.text)}»</p>
      <div class="who">
        <span class="avatar">${esc(r.name.trim().charAt(0))}</span>
        <span><b>${esc(r.name)}</b><span>${esc(r.role)}</span></span>
      </div>
    </div>`).join('');
}

function renderPkgSelect() {
  const sel = $('#fPkg');
  if (!sel) return;
  sel.innerHTML = CONFIG.packages.map((p) =>
    `<option value="${esc(p.name)}" ${p.featured ? 'selected' : ''}>${esc(p.name)} — ${p.price} ${CONFIG.currency}</option>`
  ).join('');
}

function fillWaLinks() {
  const num = String(CONFIG.whatsapp).replace(/\D/g, '');
  $$('[data-wa]').forEach((el) => {
    const kind = el.getAttribute('data-wa') || 'general';
    const msg = kind.startsWith('pkg:') ? greeting(kind.slice(4)) : greeting('');
    el.setAttribute('href', waLink(msg));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
  const shown = $('#waNumber');
  if (shown) {
    shown.textContent = '+' + num;
    shown.setAttribute('href', waLink(greeting('')));
  }
  const f = $('#waFloat');
  if (f) f.setAttribute('href', waLink(`السلام عليكم 👋 أبغى أستفسر عن خدمة السيرة الذاتية.${SOURCE ? `\n\nمصدر الطلب: ${SOURCE}` : ''}`));
}

/* ================= النموذج ================= */
function buildMessage(f) {
  const lines = [
    'السلام عليكم 👋',
    'أبغى أطلب خدمة سيرة ذاتية:',
    '',
    `• الاسم: ${f.name}`,
    `• المجال / الوظيفة المستهدفة: ${f.field}`,
    `• مستوى الخبرة: ${f.level}`,
    `• لغة السيرة: ${f.lang}`,
    `• الباقة: ${f.pkg}`,
    `• الموعد المطلوب: ${f.deadline}`,
  ];
  if (f.contact) lines.push(`• رقم التواصل: ${f.contact}`);
  if (f.notes) lines.push(`• ملاحظات: ${f.notes}`);
  if (SOURCE) lines.push(`\n• مصدر الطلب: ${SOURCE}`);
  return lines.join('\n');
}

function bindForm() {
  const form = $('#orderForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const get = (n) => (form.elements[n] ? String(form.elements[n].value || '').trim() : '');

    const f = {
      name: get('name'),
      field: get('field'),
      level: get('level') || 'غير محدد',
      lang: get('lang') || 'غير محدد',
      pkg: get('pkg') || 'غير محددة',
      deadline: get('deadline') || 'عادي',
      contact: get('contact'),
      notes: get('notes'),
    };

    const bad = [];
    ['name', 'field'].forEach((k) => {
      const el = form.elements[k];
      if (!el) return;
      const short = f[k].length < 3;
      el.classList.toggle('bad', short);
      if (short) bad.push(el);
    });

    const err = $('#formErr');
    if (bad.length) {
      if (err) err.hidden = false;
      bad[0].focus();
      toast('⚠️ أكمل الحقول المطلوبة');
      return;
    }
    if (err) err.hidden = true;

    openWa(buildMessage(f));
    toast('✅ فُتح واتساب — راجع الرسالة وأرسلها');
  });

  form.addEventListener('input', (e) => {
    if (e.target && e.target.classList) e.target.classList.remove('bad');
    const err = $('#formErr');
    if (err) err.hidden = true;
  });
}

/* ================= تنقل ================= */
function bindNav() {
  const burger = $('#burger');
  const nav = $('#nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* تمييز القسم الحالي في الشريط العلوي */
  const ids = ['packages', 'work', 'sample', 'faq'];
  const links = Object.fromEntries(ids.map((id) => [id, $(`.nav a[href="#${id}"]`)]).filter(([, a]) => a));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const a = links[en.target.id];
      if (!a) return;
      a.style.background = en.isIntersecting ? 'var(--brand-soft)' : '';
      a.style.color = en.isIntersecting ? 'var(--brand-2)' : '';
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}

/* ================= أزرار واتساب العامة ================= */
function bindWaButtons() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-wa]');
    if (!el) return;
    e.preventDefault();
    const kind = el.getAttribute('data-wa') || 'general';
    openWa(kind.startsWith('pkg:') ? greeting(kind.slice(4)) : greeting(''));
    toast('💬 فُتح واتساب');
  });
}

/* ================= تشغيل ================= */
document.addEventListener('DOMContentLoaded', () => {
  renderPlans();
  renderAddons();
  renderFaq();
  renderReviews();
  renderPkgSelect();
  fillWaLinks();
  bindForm();
  bindNav();
  bindWaButtons();

  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  /* منع روابط # الفارغة من قفز الصفحة */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href="#"]');
    if (a) e.preventDefault();
  });
});
