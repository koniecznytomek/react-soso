import React, { useEffect } from 'react';

import { useThemeObserver } from '../../../hooks/useThemeObserver';
import { useSlideImages } from '../../../hooks/useSlideImages';

import styles from './About.module.scss';
import { motion } from 'framer-motion';
import Footer from '../../layout/Footer/Footer';

const About = () => {
  const { slideImage } = useSlideImages();
  const { lightTheme } = useThemeObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        exit={{ opacity: 0, y: -150 }}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.about}>
          <header className={styles.header}>
            <div className={styles.header__images}>
              <img src='/images/s1.jpg' alt='logo' />
              <img src='/images/s2.jpg' alt='logo' />
              <img src='/images/s3.jpg' alt='logo' />
            </div>
            <div className={styles.header__title} ref={slideImage}>
              <h1>Sososocks brandingbook</h1>
              <p>
                <strong>
                  A Brand Book was created to ensure overal brand consistancy
                  when working with partners and marketers.
                </strong>
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui
                blanditiis praesentium voluptatum deleniti atque corrupti, quos
                dolores et quas molestias excepturi sint, obcaecati cupiditate
                non provident, similique sunt in culpa, qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio, cumque nihil impedit, quo
                minus id, quod maxime placeat, facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet, ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>
          </header>
          <section className={styles.history} ref={lightTheme}>
            <div className={styles.history__title}>
              <h2>Our history</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui
                blanditiis praesentium voluptatum deleniti atque corrupti, quos
                dolores et quas molestias excepturi sint, obcaecati cupiditate
                non provident, similique sunt in culpa, qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio, cumque nihil impedit, quo
                minus id, quod maxime placeat, facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet, ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
