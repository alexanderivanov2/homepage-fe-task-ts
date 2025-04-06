import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import UkFlagLogo from '../../assets/logos/uk-flag-logo.svg';
import ItFlagLogo from '../../assets/logos/italy-flag-logo.svg';
import styles from './LanguageDropdown.module.scss'

const languages = [
    { code: "en", label: "EN", flag: UkFlagLogo },
    { code: "it", label: "IT", flag: ItFlagLogo }
];

function LanguageDropdown() {
    const [selectedLanguage, setSelectedLang] = useState({...languages[0]});
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectLanguage = (code: string) => {
        const selectedLang = languages.find(lang => lang.code === code)
        if (selectedLang) {
            setSelectedLang({...selectedLang});
            setIsOpen(false);
        }
    };

    const otherLanguages = languages.filter(lang => lang.code !== selectedLanguage.code);

    return (
        <div className={`${styles.languageDropdown} ${isOpen ? styles.languageListOpen : ''} `} >
            <div className={styles.languageContainer} onClick={toggleDropdown}>
                <div className={styles.languageIcon}>
                    <img src={selectedLanguage.flag} alt="language flag" />
                </div>
                <span className={styles.language}>{selectedLanguage.label}</span>
                <div className={styles.languageArrow}>
                    <ChevronDown size={16} />
                </div>
            </div>
            <div className={`${styles.otherLanguagesList}`}>
                {otherLanguages.map((value) => (
                    <div key={value.label} className={styles.otherLanguage} onClick={() => selectLanguage(value.code)}>
                        <div className={styles.languageIcon}>
                            <img src={value.flag} alt="" />
                        </div>
                        <p className={styles.languageLabel}>
                            {value.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LanguageDropdown;