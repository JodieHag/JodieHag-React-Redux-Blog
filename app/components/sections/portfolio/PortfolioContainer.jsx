import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Slider from 'react-slick';
import Portfolio from './Portfolio';

require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      photos: [
        {
          src: 'https://static.affinity-petcare.com/cdn/farfuture/gWw6JS47EfDj8bLjk8Oeaz4zGEzR8g3R5-tlcd3kVrc/drupal-cache:ovjgv9/sites/default/files/logo_affinity_desktop.png',
          alt: 'Affinity PetCare'
        },
        {
          src: 'http://prestamoexpansion.bancsabadell.com/bundles/app/img/logo.png',
          alt: 'Banc Sabadell'
        },
        {
          src: 'https://www.morabanc.ad/app/uploads/2016/02/logo.png',
          alt: 'Morabanc'
        },
        {
          src: 'https://news.obrasociallacaixa.com/images/registros/2016/Observatori_Social/logo_ObraSocial.png',
          alt: 'Obra Social laCaixa'
        },
        {
          src: 'https://vignette2.wikia.nocookie.net/logopedia/images/0/0e/Barcelona.png/revision/latest?cb=20161111145150',
          alt: 'FC Barcelona'
        },
        {
          src: 'http://www.dafont.com/forum/attach/orig/2/9/294893.png',
          alt: 'KitKat'
        },
        {
          src: 'https://cofounderslab.com/img/logo/blue.png',
          alt: 'CofoundersLab'
        },
        {
          src: 'http://logonoid.com/images/granini-logo.png',
          alt: 'Granini'
        },
        {
          src: 'https://s0.clarel.es/medias/hb7/h0a/8907424923678.jpg',
          alt: 'Evax&Tampax'
        },
        {
          src: 'https://4.bp.blogspot.com/-Ii8lyK50XBo/Vw9LlmxEg0I/AAAAAAAAIV8/Wd0IwfMFGB4xVz5DCpx-sg2c_1VNWsAuACLcB/s320/Dodot.png',
          alt: 'Dodot'
        },
        {
          src: 'http://www.euflegt.efi.int/documents/10180/10739/logos-website-footer-2.png/0fdcad49-afc2-4ce3-acc2-bfaa50430496?t=1367915380529',
          alt: 'EU FLEGT Facility'
        },
        {
          src: 'http://www.elpoderdelasideas.com/wp-content/uploads/audi_rings.png',
          alt: 'Audi'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/en/3/32/Oysho_logo.png',
          alt: 'Oysho'
        },
        {
          src: 'http://www.freelogovectors.net/wp-content/uploads/2017/03/bershka-logo.png',
          alt: 'Bershka'
        },
        {
          src: 'http://thevrain.com/wp-content/uploads/2017/02/logo_header.png',
          alt: 'The Vrain'
        },
        {
          src: 'http://vreakchannel.com/img/logo.png',
          alt: 'VreakChannel'
        }
      ]
    });
  }

  render() {
    return (
      <Portfolio>
        <Slider
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={2000}
          className="slider variable-width"
          variableWidth
          responsive={[{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]}
        >
          {this.state.photos.map(photo => (
            <div>
              <img src={photo.src} alt={photo.alt} />
            </div>
          )
          )}
        </Slider>
      </Portfolio>
    );
  }
}

export default PortfolioContainer;
