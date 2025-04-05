import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import styles from './UpdatesPanel.module.scss';
import { useJsonData } from "../../hooks/useJson";
import UpdatesPanelCard from "./UpdatesPanelCard";

interface SectionItem {
    icon: string;
    topic: string;
    image: string;
    title: string;
    date: string;
    location?: string;
    description: string;
    buttonText: string;
};

function UpdatesPanel() {
    const { theme } = useContext(ThemeContext);
    const { data } = useJsonData('updatesPanel');
    const updatesData: SectionItem[] | [] = data ?? [];

    return (
        <section className={`section ${theme}`}>
            <div className={`container ${styles.updatesPanel}`}>
                {updatesData && updatesData.map((value, index) => (
                    <UpdatesPanelCard key={index} updateData={value} />
                ))}
            </div>
        </section>
    )
}

export default UpdatesPanel