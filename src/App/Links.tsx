import React from "react";
import { FaTwitter, FaInstagram, FaHome, FaFacebook } from 'react-icons/fa';

import './Links.scss'

type Props = {
  data: Pwamap.ShopData;
};

const noop = (e: React.MouseEvent) => {
  e.stopPropagation()
}

const Content = (props: Props) => {

  return (
    <div className="links">
      {props.data['公式サイト1']?<div className="link"><a href={props.data['公式サイト1']}><FaHome onClick={noop} size="20px" /></a></div>:''}
    　{props.data['公式サイト2']?<div className="link"><a href={props.data['公式サイト2']}><FaHome onClick={noop} size="20px" /></a></div>:''}
      {props.data['公式サイト3']?<div className="link"><a href={props.data['公式サイト3']}><FaHome onClick={noop} size="20px" /></a></div>:''}
      {props.data['公式サイト4']?<div className="link"><a href={props.data['公式サイト4']}><FaHome onClick={noop} size="20px" /></a></div>:''}
    </div>
  );
};

export default Content;
