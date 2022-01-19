import { useState, useEffect, useCallback } from "react";
import LocalizedStrings from "react-localization";
import { useHistory } from "react-router-dom";
import styles from "./PrivacyPolicyPageStyles.module.css";
import ru from "../../assets/languages/RU.json";
import en from "../../assets/languages/EN.json";
import uk from "../../assets/languages/UA.json";

const languageObj = {
  en,
  ru,
  uk,
};

export const PrivacyPolicyPage = () => {
  const history = useHistory();
  const path = history.location.pathname?.substr(1, 2);

  let locale = new LocalizedStrings(languageObj)
    .getInterfaceLanguage()
    .substr(0, 2);

  const [choose, setChoose] = useState(locale);

  const handlePath =useCallback( (str) => {
    history.push(`/${str}`);
    setChoose(str);
  },[history]);

  useEffect(() => {
    path ? handlePath(path) : history.push(`/${locale}`);
  }, [handlePath,history,locale,path]);

  const handleChoose = (e) => {
    const lang = e.target.value;
    setChoose(lang);
    history.push(`/${lang}`);
  };

  const value = languageObj[choose] || languageObj["en"];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <ul className={styles.linkList}>
              <li className={styles.sidebarItem}>
                <a href="#privacy" className={styles.linkToItem}>
                  {value.aside1}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#news" className={styles.linkToItem}>
                  {value.aside2}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#cofidentials" className={styles.linkToItem}>
                  {value.aside3}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#ukrphone" className={styles.linkToItem}>
                  {value.aside7}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#usphone" className={styles.linkToItem}>
                  {value.aside8}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#contacts" className={styles.linkToItem}>
                  {value.aside9}
                </a>
              </li>
            </ul>
          </aside>
          <div className={styles.content}>
            <h1 id="privacy" className={styles.documentTitle}>
              {value.titleMain}
              <select
                className={styles.languageSelect}
                name="language"
                size="1"
                value={choose}
                onChange={handleChoose}
              >
                <option value="en">on english</option>
                <option value="ru">по-русски</option>
                <option value="uk">українською</option>
              </select>
            </h1>
            <div className={styles.startText}>
              <p>
                {value.p1}
                <a href={value.link1}>
                  <span className={styles.alertText}>{value.link1}</span>
                </a>
              </p>
              <p>{value.p2}</p>
            </div>
            <h2>{value.title2}</h2>
            <ul className={styles.list}>
              <li>{value.p3}</li>
              <li>{value.p4}</li>
              <li>{value.p5}</li>
            </ul>
            <h2 id="news">{value.title5}</h2>
            <p>{value.p13}</p>
            <p>
              {value.p14}
              <span className={styles.alertText}>{value.link2}</span>
              <span className={styles.alertText}>{value.p15}</span>
            </p>
            <h2 id="cofidentials">{value.title6}</h2>
            <p>{value.p17}</p>
            <dl className={styles.leftPaddingList}>
              <dd>{value.p18}</dd>
              <dd>{value.p19}</dd>
            </dl>
            <p>
              {value.p20}
              <span className={styles.alertText}>{value.link3}</span>
              {value.p21}
            </p>
            <h2 id="ukrphone">{value.title8}</h2>
            <p>{value.p35}</p>
            <p>
              {value.p36}
              <a href={value.link5} target="_blank" rel="noopener noreferrer">
                <span className={styles.alertText}>{value.link5}</span>
              </a>
            </p>
            <p>
              {value.p37}
              <dl className={styles.leftPaddingList}>
                <dd>{value.p38} </dd>
                <dd>{value.p39}</dd>
              </dl>
              {value.p41}
            </p>
            <p>{value.p42}</p>
            <p>
              {value.p43}
              <span className={styles.alertText}>{value.link6}</span>
            </p>
            <h2 id="usphone">{value.title9}</h2>
            <p>{value.p44}</p>
            <p>{value.p45}</p>
            <p>
              {value.p46}
              <dl className={styles.leftPaddingList}>
                <dd> {value.p47} </dd>
                <dd> {value.p48} </dd>
              </dl>
            </p>
            <p>
              {value.p50}
              <dl className={styles.leftPaddingList}>
                <dd>{value.p51}</dd>
                <dd>{value.p52}</dd>
                <dd>{value.p53}</dd>
                <dd>{value.p54}</dd>
              </dl>
            </p>
            <p>
              {value.p55}
              <span className={styles.alertText}>{value.link7}</span>
              {value.p56}
            </p>
            <h2 id="contacts">{value.aside9}</h2>
            <p>
              {value.p57}
              <span className={styles.alertText}>{value.link7}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
