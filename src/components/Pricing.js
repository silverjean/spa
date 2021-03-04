import React from 'react';
import { Link } from 'react-router-dom';

import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import { Button } from './Button';

import '../styles/components/Pricing.css';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className='pricing__section'>
          <div className='pricing__wrapper'>
            <h1 className='pricing__heading'></h1>
            <div className='pricing__container'>
              <Link to='/sing-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>PREÇO1</h4>
                  <p>por tempo x</p>
                  <ul className='pricing__container-features'>
                    <li>x Transações</li>
                    <li>x Cash Back</li>
                    <li>R$X Limite</li>
                  </ul>

                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Escolher Plano
                  </Button>
                </div>
              </Link>

              <Link to='/sing-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>PREÇO2</h4>
                  <p>por tempo x</p>
                  <ul className='pricing__container-features'>
                    <li>x Transações</li>
                    <li>x Cash Back</li>
                    <li>R$X Limite</li>
                  </ul>

                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    Escolher Plano
                  </Button>
                </div>
              </Link>

              <Link to='/sing-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>PREÇO3</h4>
                  <p>por tempo x</p>
                  <ul className='pricing__container-features'>
                    <li>x Transações</li>
                    <li>x Cash Back</li>
                    <li>R$X Limite</li>
                  </ul>

                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Escolher Plano
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
