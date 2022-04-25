import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Datasources = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Data Sources',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                  <p className="text-sm mb-0">
                    From the CryptoPunks CSV, we found information about the distribution of NFT holders for the project. We used this data to try to learn more about how uneven the distribution is for the top 100 holders of the project.
                      </p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0">"https://etherscan.io/token/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb#balances"</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                  <p className="text-sm mb-0">
                    From the BAYC CSV, we found information again about the top 1000 holders of the project. We then used a Poission distribution to simulate the missing data based on the known total number of holders and total NFTs.
                      </p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0">"https://etherscan.io/token/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d#balances"</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                  <p className="text-sm mb-0">
                  From the MoonBirds CSV, we found information again about the top 1000 holders of the project. We then used a Poission distribution to simulate the missing data based on the known total number of holders and total NFTs.
                      </p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0">"https://etherscan.io/token/0x23581767a106ae21c074b2276D25e5C3e136a68b#balances"</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Datasources.propTypes = propTypes;
Datasources.defaultProps = defaultProps;

export default Datasources;
