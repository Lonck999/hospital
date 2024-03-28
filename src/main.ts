import { createApp } from "vue";
import "@/style/reset.scss";
import App from "@/App.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";
import  Pinia  from "@/store";
import ElementPlus from "element-plus";
import locale from "@element-plus/locale/lang/zh-tw";
import "element-plus/dist/index.css";

const app = createApp(App);
app.component("Header", Header);
app.component("Footer", Footer);
app.use(router);
app.use(ElementPlus, {
  locale: locale,
});
app.use(Pinia);

app.mount("#app");
