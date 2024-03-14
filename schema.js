// yuptaki butun fonks import et
import * as yup from "yup";

// validasyon şeması
// formdaki inputların gecerli olması için gerekli kosulları
// tanımladıgımız alan

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// bir alan için kosulları yazarken ilk olarak
// o alanın tipini tanımlayan yup fonk cagırırız
export const schema = yup.object().shape({
  // emailin geçerli olması için koşullar

  email: yup
    .string()
    .email("Email geçerli bir formatta olmalı")
    .required("Email zorunlu bir alan"),
  // yaşın geçerli olması için koşullar
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer("Lütfen tam sayı değeri giriniz")
    .required("Yaş zorunlu bir alan"),

  // şifrenin geçerli olması için koşullar

  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakter olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre zorunlu bir alan"),

  // şifre onay alanının geçerli olması için koşullar

  passwordConfirm: yup
    .string()
    // one of()  kpntrol ettiğimiz inputtaki verininn verdiğimiz değerlere
    // esıt olup olmadıgını kontrol eder.
    // ref() farklı bir inputtaki veriye erişmemizi sağla
    .oneOf([yup.ref("password")], "Onay şifreniz eşleşmiyor")
    .required("Lütfen şifrenizi onaylayın"),
});
