import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Graphs = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Visualized Data',
    paragraph: 'We can talk about some overall trends here'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <SectionHeader data={sectionHeader} className="center-content" />

      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">            
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Graph 1
                    </h4>
                  <p className="m-0 text-sm">
                    Description
                    </p>
                </div>
              </div>
            </div>
            <br></br>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Graph 2
                    </h4>
                  <p className="m-0 text-sm">
                    Description
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">            
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Graph 3
                    </h4>
                  <p className="m-0 text-sm">
                    Description
                    </p>
                </div>
              </div>
            </div>
            <br></br>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Graph 4
                    </h4>
                  <p className="m-0 text-sm">
                    Description
                    </p>
                </div>
              </div>
            </div>

           

          </div>
        </div>
      </div>
    </section>
  );
}

Graphs.propTypes = propTypes;
Graphs.defaultProps = defaultProps;

export default Graphs;