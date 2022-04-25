import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import CryptoPunkImage from '../../assets/images/cryptopunk_dist.jpg'
import ApesImage from '../../assets/images/bayc_dist.jpg'
import MoonBirdsImage from '../../assets/images/moonbirds_dist.jpg'
import './EDA.css'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const EDA = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'EDA',
    paragraph: 'We created a simple visualization to compare what percentage the top 100 holders of each NFT project own in comparison to the rest of the holders of the project.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div class="row">
            <div class="column">
              <img src={CryptoPunkImage} alt="error"/>
            </div>
          <div class="column">
              <img src={ApesImage} alt="error"/>
          </div>
          <div class="column">
            <img src={MoonBirdsImage} alt="error"/>
          </div>
          </div>
          <br />
          <br />
          <br />

          <div className={splitClasses}>

            <p>We initially organized the CSV file of all holders, then separated it based on the top 100 holders in terms of number of NFTs owned.</p>

            <titile>Initial Thoughts:</titile>
            <li>CryptoPunks is quite unevenly distributed, with 45% of all CryptoPunks owned by 100 wallets (about 3% of all holders). </li>
            <li>BAYC: Top 100 own 18.1% (makes up only 1.5% of all holders)</li>
            <li>MoonBirds: Top 100 own 13.1% (makes up only 1.5% of all holders)</li>

          </div>
        </div>
      </div>
    </section>
  );
}

EDA.propTypes = propTypes;
EDA.defaultProps = defaultProps;

export default EDA;