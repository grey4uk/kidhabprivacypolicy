import { useState, useEffect } from "react";
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

  const handlePath = (str) => {
    history.push(`/${str}`);
    setChoose(str);
  };

  useEffect(() => {
    path ? handlePath(path) : history.push(`/${locale}`);
  }, []);

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
                <a href="#personal" className={styles.linkToItem}>
                  {value.aside4}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#collect" className={styles.linkToItem}>
                  {value.aside5}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#thirdpart" className={styles.linkToItem}>
                  {value.aside6}
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
            <h3>{value.title3}</h3>
            <p className={styles.underlinedText}>{value.p6}</p>
            <p>{value.p7}</p>
            <span>{value.title4}</span>
            <dl className={styles.list}>
              <dd>{value.p9}</dd>
              <dd>{value.p10}</dd>
              <dd>{value.p11}</dd>
              <dd>{value.p12}</dd>
            </dl>
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
            <h2 id="personal">{value.title6}</h2>
            <p>{value.p22}</p>
            <ol className={(styles.leftPaddingList, styles.list)}>
              <li>
                {value.p23}
                <span className={styles.alertText}>{value.title7}</span>
                {value.p24}
                <span className={styles.alertText}>{value.p25}</span>
                {value.p26}
                <span className={styles.alertText}>{value.p27}</span>
              </li>
              <li>
                {value.p28}
                <dl className={styles.leftPaddingList}>
                  <dd>{value.p29}</dd>
                  <dd>{value.p30}</dd>
                  <dd>{value.p31}</dd>
                </dl>
                <tr className={styles.table}>
                  <th className={styles.column1}>
                    <span className={styles.boldText}>{value.tablehead1}</span>
                  </th>
                  <th className={styles.column2}>
                    <span className={styles.boldText}>{value.tablehead2}</span>
                  </th>
                  <th className={styles.column3}>
                    <span className={styles.boldText}>{value.tablehead3}</span>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table1}
                    <span className={styles.boldText}>{value.table2}</span>:
                    {value.table3}
                  </th>
                  <th>{value.table4}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table5}</dd>
                      <dd>{value.table6}</dd>
                      <dd>{value.table7}</dd>
                      <dd>{value.table8}</dd>
                    </dl>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table9}
                    <span className={styles.boldText}>{value.table10}</span>:
                    {value.table11}
                  </th>
                  <th>{value.table12}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table13}</dd>
                      <dd>{value.table14}</dd>
                      <dd>{value.table15}</dd>
                    </dl>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table16}

                    <span className={styles.boldText}>{value.table17}</span>
                    {value.table18}
                  </th>
                  <th>{value.table19}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table20}</dd>
                      <dd>{value.table21}</dd>
                      <dd>{value.table22}</dd>
                      <dd>{value.table23}</dd>
                    </dl>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table24}
                    <span className={styles.boldText}>{value.table25}</span>
                    {value.table26}
                  </th>
                  <th>{value.table27}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table28}</dd>
                      <dd>{value.table29}</dd>
                      <dd>{value.table30}</dd>
                    </dl>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table31}

                    <span className={styles.boldText}>{value.table32}</span>
                    {value.table33}
                  </th>
                  <th>{value.table34}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table35}</dd>
                      <dd>{value.table36}</dd>
                      <dd>{value.table37}</dd>
                    </dl>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table38}
                    <span className={styles.boldText}>{value.table39}</span>
                    {value.table40}
                  </th>
                  <th>{value.table41}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table42}</dd>
                      <dd>{value.table43}</dd>
                      <dd>{value.table44}</dd>
                    </dl>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table45}

                    <span className={styles.boldText}>{value.table46}</span>
                    {value.table47}
                  </th>
                  <th>{value.table48}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table49}</dd>
                      <dd>{value.table50}</dd>
                      <dd>{value.table51}</dd>
                      <dd>{value.table52}</dd>
                    </dl>
                  </th>
                </tr>
                <tr className={styles.table}>
                  <th>
                    {value.table53}
                    <span className={styles.boldText}>{value.table54}</span>
                    {value.table55}
                  </th>
                  <th>{value.table56}</th>
                  <th>
                    <dl className={styles.leftPaddingList}>
                      <dd>{value.table57}</dd>
                      <dd>{value.table58}</dd>
                      <dd>{value.table59}</dd>
                      <dd>{value.table60}</dd>
                    </dl>
                  </th>
                </tr>
                {/* </div> */}
              </li>
              <li>
                <p>
                  {value.p37}
                  <dl className={styles.leftPaddingList}>
                    <dd>{value.p38} </dd>
                    <dd>{value.p39}</dd>
                  </dl>
                  {value.p41}
                </p>
              </li>
              <li>
                {value.p33}
                <span className={styles.alertText}>{value.link4}</span>
              </li>
              <li>{value.p34}</li>
            </ol>
            <h2 id="collect">{value.aside5}</h2>
            <p>{value.p341}</p>
            <div className={styles.leftPaddingList}>
              <p>{value.p342}</p>
              <p>{value.p343}</p>
              <p>{value.p344}</p>
              <p>{value.p345}</p>
              <p>{value.p346}</p>
            </div>
            <h2 id="thirdpart">{value.aside6}</h2>
            <p>{value.p347}</p>
            <p>{value.p348}</p>
            <div className={styles.leftPaddingList}>
              <p>{value.p349}</p>
              <p>{value.p3494}</p>
              <p>{value.p34941}</p>
            </div>
            <p>{value.p3495}</p>
            <p>{value.p3496}</p>
            <p>{value.p3497}</p>
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
