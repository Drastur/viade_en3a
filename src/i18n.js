import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
        "carouselWelcome": "Welcome to Viade",
        "carouselText1": "Your routes app",
        "carouselText2": "Store your routes, create new ones",
        "carouselText3": "High versatility",
        "navBarLanguageEn": "English",
        "navBarLanguageEs": "Spanish",
        "navBarLanguage": "Language",
        "navBarSignUp": "Sign up",
        "navBarSignIn": "Sign in",
        "navBarSignOut": "Sign out",
        "navBarProfile": "Profile",
        "navBarMyProfile": "My profile",
        "navBarFriends": "Friends",
        "navBarSettings": "Settings",
        "navBarRoutes": "Route management",
        "navBarMyRoutes": "My routes",
        "navBarCreateRoute": "Create a new route",
        "navBarRouteHelp": "How do routes work?",
        "friendCardDelete": "Delete",
        "pageNotFoundHeader": "Oops! The page you are trying to access does not exist.",
        "pageNotFoundText1": "You can return to homepage ",
        "pageNotFoundText2": "here."
    }
  },
  es: {
    translation: {
        "carouselWelcome": "Bienvenido a Viade",
        "carouselText1": "Tu aplicación de rutas",
        "carouselText2": "Guarda tus rutas, crea nuevas",
        "carouselText3": "Alta versatilidad",
        "navBarLanguageEn": "Inglés",
        "navBarLanguageEs": "Español",
        "navBarLanguage": "Idioma",
        "navBarSignUp": "Registrarse",
        "navBarSignIn": "Identificarse",
        "navBarSignOut": "Cerrar sesión",
        "navBarProfile": "Perfil",
        "navBarMyProfile": "Mi perfil",
        "navBarFriends": "Amigos",
        "navBarSettings": "Ajustes",
        "navBarRoutes": "Gestión de rutas",
        "navBarMyRoutes": "Mis rutas",
        "navBarCreateRoute": "Crear una nueva ruta",
        "navBarRouteHelp": "¿Cómo funcionan las rutas?",
        "friendCardDelete": "Borrar",
        "pageNotFoundHeader": "Vaya! La página a la que estás intentando acceder no existe.",
        "pageNotFoundText1": "Puedes volver a la página principal ",
        "pageNotFoundText2": "aquí."
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;