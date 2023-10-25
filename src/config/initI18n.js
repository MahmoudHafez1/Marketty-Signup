import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {},
  },
  ar: {
    translation: {
      'Your Details': 'بياناتك',
      Confirmation: 'التأكيد',
      'Store information': 'معلومات المتجر',
      'Provide your basic information': 'قدم معلوماتك الأساسية',
      'Confirm your email': 'قم بتأكيد بريدك الإلكتروني',
      'Set your store main info': 'قم بتعيين معلومات متجرك الرئيسية',
      Name: 'الاسم',
      Email: 'البريد الإلكتروني',
      'Phone Number': 'رقم الهاتف',
      Password: 'كلمة المرور',
      'Get Started': 'البدء',
      'Already have an account?': 'هل لديك حساب بالفعل؟',
      'Log in': 'تسجيل الدخول',
      'Must be at least 8 characters.': 'يجب أن تحتوي على 8 أحرف على الأقل',
      'Invalid email': 'بريد الكتروني غير صحيح',
      Required: 'مطلوب',
      'Invalid phone number': 'رقم هاتف غير صحيح',
      'Enter your name': 'ادخل اسمك',
      'Enter your email': 'ادخل بريدك الإلكتروني',
      'Create a password': 'أنشئ كلمة مرور',
      'Check your email': 'تحقق من بريدك الإلكتروني',
      'We sent a verification code to': 'لقد أرسلنا رمز التحقق إلى',
      'omarmouneer@gmail.com': 'omarmouneer@gmail.com',
      'Didn’t receive the email?': 'لم تستلم البريد الإلكتروني؟',
      'Click to resend': 'انقر لإعادة الإرسال',
      'Back to login': 'العودة لتسجيل الدخول',
      'Verify email': 'تحقق من البريد الإلكتروني',
      'Email verified': 'البريد الإلكتروني متحقق',
      'Your accounnt has been verified successfully.':
        'تم التحقق من حسابك بنجاح.',
      'Click below to setup your store.': 'انقر أدناه لإعداد متجرك.',
      Continue: 'متابعة',
      'Store Name': 'اسم المتجر',
      'Store URL': 'عنوان المتجر (URL)',
      'Store Language': 'لغة المتجر',
      'Store Industry': 'صناعة المتجر',
      'Type your store name': 'اكتب اسم متجرك',
      'Choose store language': 'اختر لغة المتجر',
      English: 'الإنجليزية',
      Arabic: 'العربية',
      Save: 'حفظ',
      "Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)":
        'مثال (أطفال، أزياء الأولاد، أزياء البنات، أزياء الرجال، إلخ...)',
      "Boys' fashion": 'أزياء الأولاد',
      "Men's fashion": 'أزياء الرجال',
      'Start turning your ideas into reality': 'ابدأ في تحويل أفكارك إلى واقع',
      'Verify your account now': 'قم بالتحقق من حسابك الآن',
      'Setup your store the way you like':
        'قم بإعداد متجرك بالطريقة التي تفضلها',
      'Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes.':
        'قم بإنشاء حساب مجاني واحصل على وصول كامل إلى جميع الميزات لمدة 30 يومًا. لا يلزم بطاقة ائتمان. ابدأ في دقيقتين.',
    },
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
