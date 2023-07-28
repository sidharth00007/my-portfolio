import classNames from 'classnames';
import styles from './portfolio.module.scss';
import website_1 from '../../../src/assets/website-1.png';
import website_2 from '../../assets/website-2.png';
import website_3 from '../../assets/website-3.png';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export interface PortfolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portfolio = ({ className }: PortfolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portofolio-wrapper']}>
                <h3 className={styles.h3}>My Portfolio</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(styles.line, styles.path)}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{delay: 1}}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DC3284" />
                            <stop offset="1" stopColor="#DC3232" />
                        </linearGradient>
                    </defs>
                </motion.svg>
                <p className={styles.p}>
                    I am a web developer with a passion for creating beautiful and functional
                    websites. I have a strong understanding of{' '}
                    <span className={styles.span}>HTML, CSS, JavaScript, and ReactJs</span>, and I am
                    proficient in a variety of back-end frameworks. I am also a{' '}
                    <span className={styles.span}>creative thinker</span> and I am always looking
                    for new ways to solve problems.
                </p>
            </div>
            <div className={styles.grid}>
                <motion.div className={styles['grid-item']}>
                    <img src={website_1} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>BitBullion - Web 3 App</h4>
                        <a href="https://bitbullion.netlify.app/">Visit </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website_2} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Smart Canteen- Web App</h4>
                        <a href="https://smart-canteen-yorr.netlify.app/">Visit </a>
                    </div>
                </motion.div>
                <motion.div className={styles['grid-item']}>
                    <img src={website_3} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>The Craving Appeasers | Web App</h4>
                        <a href="https://sidharth00007.github.io/craving-appeasers/">Visit </a>
                    </div>
                </motion.div>
            </div>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/sidharth-dang-493750199">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                </a>
                <a href="https://github.com/sidharth00007">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"
                        className={styles['social-svg']} >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
                </a>
            </div>
        </div>
    );
};
