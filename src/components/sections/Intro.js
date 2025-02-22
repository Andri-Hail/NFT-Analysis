import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image1 from './ex1.jpg';
import Image2 from './ex2.jpg';
import Image3 from './ex3.jpg';
import Image11 from './BATop5.jpg';
import Image22 from './CPTop5.jpg';
import Image33 from './MBTop5.jpg';
import '../../App.css'



const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Intro = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {




  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const sectionHeader = {
    title: 'Digging Deeper into NFTs ',
    paragraph: 'NFTs are a very popular use case of smart contracts. Many argue that NFTs provide a "decentralized" and "equalized" way of investing into a project. However, these projects often end up with a few individuals who own a large percentage of the project.'
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              NFT Analysis
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Elias Chamariq, Armaan Uppal, Andri Hail
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/Andri-Hail/NFT-Analysis">
                    View Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="2000">
            Digging Deeper into NFTs
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="3000">
              NFTs are a very popular use case of smart contracts. Many argue that NFTs provide a "decentralized" and "equalized" way of investing into a project. However, these projects often end up with a few individuals who own a large percentage of the project. We wanted to investigate the scale of distribution inequality among top NFT projects.
                </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="hero-content">
            <h4 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Our Analyzed Collections
            </h4>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              We wanted to study some of the most iconic NFTs so we chose the Bored Ape Yacht Club, CryptoPunks, and MoonBirds collections. Each of these rank in the top 10 of NFT collections by sales volume
                </p>
      
            </div>
          </div>
          


          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
           <p>Bored Ape Yacht Club and its Top Holders</p>
           <img src={Image1} className="NFTImage" />
           <br></br>
           <img src={Image11} className="NFTImage" />

          </div>
          <br />
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
           <p>CryptoPunks and its Top Holders</p>
           <img src={Image2} className="NFTImage"/>
           <br></br>
           <img src={Image22} className="NFTImage" />

          </div>
          <br />

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
           <p>Moonbirds and its Top Holders</p>
           <img src={Image3} className="NFTImage"/>
           <br></br>
           <img src={Image33} className="NFTImage" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

Intro.propTypes = propTypes;
Intro.defaultProps = defaultProps;

export default Intro;