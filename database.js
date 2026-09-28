/* مفتاح الموقع: false = الموقع مغلق (تظهر صفحة closed.html) ، true = الموقع مفتوح */
const SITE_OPEN = true;

/* قاعدة البيانات: عدّل هذا الملف فقط لإضافة المستخدمين وملفاتهم.
   name:     الاسم بالعربية (يجب أن يُكتب مطابقاً تماماً عند الدخول)
   password: كلمة المرور
   files:    قائمة الملفات، لكل ملف title (الاسم مع الامتداد) و url (مسار الملف) */
const DB = [
  {
    name: "أحمد بن علي",
    password: "123456",
    files: [
      { title: "كشف النقاط.pdf", url: "files/ahmed/grades.pdf" },
      { title: "الشهادة.pdf", url: "files/ahmed/conv.pdf" }
    ]
  },
  {
    name: "سارة محمد",
    password: "654321",
    files: []
  }
];
