import { contactLinks } from '../data/profile';
import { useLocale } from '../hooks/useLocale';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__bar">
        <p>© {year} Ricky Montero Terrero</p>
        <p>{t.footer.credit}</p>
        <a href={contactLinks.site}>{contactLinks.site.replace('https://', '')}</a>
      </div>
      <div className="wrap">
        <p className="site-footer__note">{t.footer.note}</p>
      </div>
    </footer>
  );
}
