#  Customizable Theme with Zustand + MUI

این پروژه یک سیستم **کاستومایز رنگ** برای کامپوننت‌های MUI فراهم می‌کند.  
کاربر می‌تواند رنگ پس‌زمینه، متن، دکمه‌ها و سایر بخش‌های کامپوننت‌ها (مثل Table و Form) را تغییر دهد و این تغییرات در **localStorage** ذخیره می‌شوند (با استفاده از `zustand` و `persist`).

---

##  ویژگی‌ها
- تغییر رنگ برای هر کامپوننت (Table, Form, …)
- ذخیره تغییرات در `localStorage` (بعد از رفرش هم باقی می‌مانند)
- دکمه **Reset** برای بازگرداندن به تنظیمات پیش‌فرض
- پشتیبانی از افزودن کلیدهای رنگی جدید (مثل `border`, `input`, `button`, …)
- رابط کاربری ساده با MUI `Modal` برای انتخاب رنگ‌ها

---

##  ساختار اصلی

- `store/useThemeStore.js`  
  نگهداری رنگ‌ها و مدیریت تغییر/ریست آن‌ها
- `components/customColor/CustomColor.js`  
  مودالی برای انتخاب و تغییر رنگ‌ها
- `components/table/CustomTable.js`  
  جدول قابل کاستومایز
- `components/assetForm/AssetForm.js`  
  فرم قابل کاستومایز

---

##  نحوه استفاده

### 1. تعریف رنگ‌های پیش‌فرض
داخل `useThemeStore.js` مقادیر پیش‌فرضت رو تعریف کن:

```js
const defaultComponents = {
  table: {
    background: "#ffffff",
    text: "#000000",
    button: "#1976d2",
  },
  form: {
    background: "#f5f5f5",
    text: "#333333",
    input: "#ffffff",
    button: "#1976d2",
    border: "#cccccc",
  },
};
هر کلید (background, text, input, border, …) به عنوان یک property رنگی استفاده می‌شود.

2. استفاده در کامپوننت‌ها
برای دسترسی به رنگ‌ها از استور:

js
Copy code
const formColors = useThemeStore((state) => state.components.form);
و بعد داخل sx یا style استفاده کن:

jsx
Copy code
<TextField
  sx={{
    background: formColors.input,
    color: formColors.text,
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: formColors.border },
      "&:hover fieldset": { borderColor: formColors.text },
    },
  }}
/>
3. باز کردن مودال تنظیمات
کافیست کامپوننت CustomColor رو جایی در پروژه استفاده کنی:

jsx
Copy code
<CustomColor />
کاربر می‌تونه رنگ‌ها رو تغییر بده و Apply کنه.
تغییرات در localStorage ذخیره می‌شوند.

4. ریست به حالت پیش‌فرض
داخل مودال یک دکمه Reset هست که استور رو به حالت defaultComponents برمی‌گردونه.

 افزودن کامپوننت جدید
فرض کن می‌خوای یک کامپوننت جدید (مثلاً card) رو هم قابل تغییر رنگ کنی:

1. اضافه به defaultComponents:
js
Copy code
card: {
  background: "#fafafa",
  text: "#111111",
  button: "#1976d2",
  border: "#dddddd",
},
2. استفاده در کامپوننت:
js
Copy code
const cardColors = useThemeStore((state) => state.components.card);

<Box sx={{
  background: cardColors.background,
  color: cardColors.text,
  border: `1px solid ${cardColors.border}`
}}>
  Custom Card
</Box>
بعد از این، رنگ‌ها به صورت اتوماتیک توی CustomColor مودال ظاهر می‌شن.

 ذخیره‌سازی
رنگ‌ها با zustand + persist داخل localStorage ذخیره می‌شن.

کلید ذخیره: theme-storage

بعد از هر رفرش، داده‌ها دوباره بارگذاری می‌شن.

