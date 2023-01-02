import { useTranslation } from "react-i18next";
import br from "./assets/br.svg";
import us from "./assets/us.svg";
import "./styles.css";

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: br,
  },
  {
    name: "English",
    value: "en",
    flag: us,
  },
];
export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-switcher">
      <span>{t("selectYourLanguage")}</span>
        
      <br />{languageOptions.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          <img src={languageOption.flag} alt={languageOption.name} />
          <span
            style={{
              fontWeight:
                i18n.language === languageOption.value ? "bold" : "normal",
              textDecoration:
                i18n.language === languageOption.value ? "underline" : "none",
            }}
          >
          </span>
        </button>
      ))}
    </div>
  );
};