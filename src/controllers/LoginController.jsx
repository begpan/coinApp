import { useFormik } from "formik";
import { schema } from "../../schema";
import LoginView from "../views/LoginView";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();
  // formik in butuj ozelliklerini kulanmamızı saglayan hook
  const formik = useFormik({
    // formda tutulanacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // validasyon şeması
    // inputlardaki veriler tanımladıgımız semadaki kosullara uygunmu diye
    // kontrol eder. eger geçerli değilse error stateine hataları ekler

    validationSchema: schema,

    // form gonderilince calıstırılacak fonksiyon
    // otomarik olarak sayfa yenilenmesini engeller e.predef gerek kalmıyo
    // 1.parmetre olarak verileri alır
    // 2.parametre olarak formda calısacak aksitonları alır

    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
