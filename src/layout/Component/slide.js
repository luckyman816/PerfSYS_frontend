import React from 'react';
import  './slide.css'
import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';
const contentStyle = {
  height: '200px',
  fontSize: '40px',
  color: 'rgb(0, 170, 255)',
  textShadow : "2px 2px white",
  lineHeight: '160px',
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