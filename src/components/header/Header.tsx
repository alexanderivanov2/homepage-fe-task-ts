import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { useDeviceType } from '../../context/DeviceType';
import { useJsonData } from '../../hooks/useJson';

import AppLightLogo from '../../assets/logos/app-logo-light.svg';
import AppDarkLogo from '../../assets/logos/app-logo-dark.svg';

import styles from './Header.module.scss';
import MobileNavigation from '../navigation/MobileNavigation';

function Header() {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { isMobile } = useDeviceType();
    const logo = theme === 'light' ? AppLightLogo : AppDarkLogo;
    const { data } = useJsonData<Record<string, string[]>>("navigation");

    return (
        <>
        <header className={`${styles.header} ${styles[theme]}`}>
            <div className={styles.containerLogo}>
                <img src={logo} alt="EGT DIGITAL LOGO" className={styles.logo} />
            </div>
            { isMobile && <MobileNavigation data={data}/> } 
        </header>
        
            <div className="container">
                <button onClick={changeTheme}>ChangeTheme</button>
                <p> THEME: {theme}</p>
                <p>DEVICE TYPE IS MOBILE: {isMobile.toString()}</p>
                <p>{ data ? data['R-LINE'] : 'text' }</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In cum nobis adipisci recusandae, non quis, nemo quas dolorem quae distinctio provident asperiores porro tempore qui voluptas! Debitis ex quaerat quia.
                Rerum optio libero deleniti! Voluptas, esse ullam! Dignissimos incidunt voluptatibus itaque sed asperiores id, blanditiis totam! Sit, nesciunt debitis esse sequi, aut autem, ab ratione quod similique sed eos facilis.
                Dolor doloremque excepturi ducimus praesentium culpa perferendis nostrum quam expedita aspernatur maxime eum ipsam eius dolore voluptates mollitia impedit, eos suscipit nobis voluptatibus quas molestias dignissimos ipsum? Culpa, dicta fuga?
                Hic corporis labore tempore dolorem expedita est architecto aut praesentium iure sint placeat libero laudantium cupiditate voluptates, reiciendis illum at unde? Dolorum laborum eaque odio, iusto id qui? Odio, nemo!
                Facilis quibusdam expedita accusantium eaque dignissimos? Maiores voluptas ab harum eum, voluptatibus praesentium nihil ea est ipsum culpa et id, aspernatur dolorem, earum animi blanditiis dignissimos. Placeat, eius. Sequi, corrupti.
                Saepe soluta hic cumque nisi praesentium consectetur facere fugit necessitatibus in laudantium a, sapiente obcaecati natus eaque corporis ex tenetur tempore dolorum eveniet ipsam architecto dicta veritatis iusto! Necessitatibus, quae.
                Aspernatur nam soluta voluptatem alias magni facere eos non iusto cum. Unde est minus quas, excepturi nisi sit maiores vero delectus, consequuntur commodi, cupiditate corporis nemo vitae aliquid odio corrupti?
                Magnam odit quaerat molestias fugit sunt, ducimus odio temporibus ab illum? Architecto iure dolore, beatae ipsam pariatur delectus reiciendis quisquam ea quis animi quo velit minima aliquid sed soluta dolores?
                Hic illum commodi rerum, totam, nobis dolor impedit molestias laudantium sit voluptates, tenetur exercitationem ducimus laborum! Necessitatibus animi nemo nam. Et sit recusandae officia alias quae nihil eum molestias rerum?
                Placeat consectetur veritatis ex dignissimos ipsam, est cumque nostrum nihil eos dolorum enim distinctio quos commodi deserunt voluptas, quas ratione aliquam assumenda voluptate, impedit quo! Numquam illum dolorem molestias temporibus?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero a necessitatibus aspernatur nesciunt quo nulla nostrum. Culpa labore soluta voluptatum ab minima reprehenderit blanditiis modi voluptas aliquam aliquid, aut magni?
                Unde veritatis atque suscipit obcaecati adipisci, inventore ipsam voluptatem laudantium voluptate quasi repellendus laborum sapiente doloremque possimus pariatur minus neque sint veniam! Voluptate quae ducimus minus. Voluptate modi dolor minima!
                Nam, atque ex debitis, temporibus fugiat laudantium voluptas quia magni fuga nostrum quasi eaque quam qui incidunt molestiae voluptatem accusamus eius voluptatum exercitationem. Sequi, praesentium officia. Molestiae eos necessitatibus aut!
                Fugiat tenetur quas culpa pariatur, sint deleniti consequatur unde commodi, consequuntur iure ullam exercitationem explicabo alias odio eligendi id omnis? Itaque similique doloribus fugiat blanditiis maxime ut impedit assumenda sunt!
                Omnis minus voluptas natus dicta incidunt culpa enim inventore ducimus, porro et quasi, praesentium consequuntur repellendus obcaecati pariatur recusandae officiis aliquid! Veniam doloribus dolorem laudantium eius. Dignissimos modi tempora esse?
                Beatae aut debitis, dolores minima, a distinctio hic similique odio quasi quam ducimus. Corrupti aspernatur sapiente veritatis hic illum cupiditate, deleniti minus velit labore unde accusantium quidem sunt totam animi.
                Assumenda sint porro nemo consectetur tempore magni tenetur quas odio qui expedita animi nobis, ipsa omnis. Atque inventore quasi accusantium ut officiis rem magni minus tempora sit! Nisi, eveniet et.
                Molestias labore nulla pariatur nemo quae architecto hic ratione vel esse laudantium est obcaecati veritatis consequatur corporis sit laboriosam minus, quis facere consequuntur soluta amet illum, fuga in! Fuga, incidunt!
                Architecto autem accusantium doloremque consequuntur laudantium accusamus nemo cum eveniet quis modi numquam suscipit excepturi est mollitia, ipsa soluta sit, sapiente dolorum ipsum quo. Nesciunt iste nostrum dolore enim pariatur!
                Illum quas eveniet explicabo fugit alias nam, animi sint distinctio in tempora omnis libero! Non dignissimos hic quibusdam consectetur iure esse. Sunt distinctio earum fuga, hic aut quam nesciunt quae!</p>
            </div>
            
        </>
    );
}

export default Header;