import React from 'react';
import  './slide.css'
import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';
const contentStyle = {
  height: '250px',
  fontSize: '60px',
  color: 'rgb(170, 170, 170)',
  textShadow : "2px 2px white",
  lineHeight: '250px',
  textAlign: 'center',
  margin: '0'
};
const ShowSlide = () => {
  const { t } = useTranslation();
  return (
    <Carousel  className='contentStyle' autoplay>
      <div>
        <h3 style={contentStyle}>{t('HIGHRESPONSIBILITY')}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{t('KINDSERVICE')}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{t("HIGHCREDIT")}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{t("FULLTIME")}</h3>
      </div>
    </Carousel>
  )
};
export default ShowSlide;