import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import LorenzImage from '../../assets/images/lorenz.jpg'
import GiniImage from '../../assets/images/gini_inequality.jpg'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Conclusion = ({
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
    title: 'Our Conclusion',
    paragraph: 'Some final thoughts...'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Which NFT project that we researched is the most unevenly distributed?
                  </h3>
                <p className="m-0">
                  <li>Based on the highest Gini coefficient of .607 for CryptoPunks, we conclude that this project has the most uneven distribution of NFTs when compared to BAYC and MoonBirds.</li>
                  <li>All the Gini coefficients show some sort of inequality (scale from 0 to 1)</li>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={LorenzImage}
                  alt="Add a picture here if we want"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  How do these Gini coefficients compare to income inequality in the US?
                  </h3>
                <p className="m-0">
                 <li>All three of these projects actually maintain a higher Gini coefficient than the current Gini coefficient for the United States income distribution (.411).</li>
                 <li>Although we cannot conclude that these NFTs projects are more unequally distributed than income in the United States, it is important to recognize the scale of the coefficient relative to its other use cases.</li>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={GiniImage}
                  alt="Add a picture here if we want"
                  width={528}
                  height={396} />
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}

Conclusion.propTypes = propTypes;
Conclusion.defaultProps = defaultProps;

export default Conclusion;