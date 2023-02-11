import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Epomi'}
        subtitle={'Tu de unde iti cumperi pomi?'}
        ctaText={'Cumpara Acum'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Aducem{' '}
          <span className={styles.gold}>pomi fructiferi</span>
        </p>
        <p>
          pentru <span className={styles.gold}>gradinile</span> voastre si{' '}
          <span className={styles.gold}>garantam calitatea</span>
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Catalog'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Nou pe stoc'} link={'/shop'} textLink={'Exploreaza'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Colectam pomi de cea mai mare calitate.'}
            description={`Colectam pomi de cea mai inalta calitate de la producatori locali si ii aducem in gradina dumneavoastra.`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/banner2.png'} title={`-50% off \n Soiuri Clasice`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>Pomi</Link>
          <Link to={'/shop'}>Vita</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Misiunea noastră:'}
        quote={
          '“Misiunea noastră este de a face procesul de cultivare a propriilor fructe cât mai ușor și accesibil posibil. Suntem dedicați oferirii clienților noștri a celor mai bune pomi de calitate, sfaturi expert, și un serviciu excepțional de client.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Multumiri'} subtitle={'Bine ați venit în lumea pomilor fructiferi de calitate! Compania noastră este dedicată furnizării clienților săi cu pomii fructiferi de cea mai înaltă calitate disponibili. Credem că accesul la fructe proaspete și delicioase cultivate în propriul curte este un aspect valoros și esențial al unui stil de viață sănătos.'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/banner3.png'}
          title={'Modalități de plată și livrare:'}
          subtitle={'In momentul de fata acceptam doar plata ramburs.Livrăm pomii noștri fructiferi în siguranță la adresa dvs. și vom fi întotdeauna deschiși pentru a asigura că sunteți mulțumiți de livrare.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Concluzie:'}
          subtitle={'Vă mulțumim că ați ales să cumpărați pomii fructiferi de la noi. Suntem siguri că veți fi impresionați de calitatea produselor noastre și de serviciile noastre excepționale. Sperăm că veți bucura de fructele delicioase cultivate în propriul dvs. grădină pentru mulți ani de acum înainte.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
