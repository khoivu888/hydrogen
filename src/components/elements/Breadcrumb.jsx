import React from 'react';
import {Link} from '@shopify/hydrogen';

export default function Breadcrumb(props) {
  return (
    <>
      <div className="text-[14px] text-[#525252] breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <div className="font-semibold">Home</div>
            </Link>
          </li>
          <li className={props.secondTitle ? 'font-semibold' : null}>
            {props.firstTitle}
          </li>
          {props.secondTitle ? <li>{props.secondTitle}</li> : null}
        </ul>
      </div>
    </>
  );
}
