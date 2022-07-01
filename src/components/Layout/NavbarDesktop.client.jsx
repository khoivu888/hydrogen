import React from 'react';
import {DownButton, GiftBox} from '../../assets/Icon';
import {Link, useUrl} from '@shopify/hydrogen';
import {STORE_DOMAIN} from '../../../hydrogen.config';

export const NavbarDesktop = () =>
  React.memo(function NavbarDeskTop({listMenu}) {
    const {pathname} = useUrl();
    return (
      <>
        <div className="font-poppins">
          <div className="flex flex-row items-center">
            {listMenu.items.map((item, index) => (
              <>
                {item.items.length > 0 ? (
                  <>
                    <div
                      key={index}
                      className={
                        'dropdown dropdown-hover pr-0 pl-0 text-sm items-center  pr-3 '
                      }
                    >
                      <label
                        tabIndex="0"
                        className={
                          'group normal-case m-1 items-center flex font-light text-heading px-5'
                        }
                      >
                        <span className="mr-3">{item.title}</span>
                        <div
                          className={
                            'group-hover:transform group-hover:transition group-hover:duration-500 group-hover:rotate-180'
                          }
                        >
                          <DownButton />
                        </div>
                      </label>
                      <ul
                        tabIndex="0"
                        className="dropdown-content menu p-2 font-light text-heading shadow bg-white rounded-box w-52 z-99"
                      >
                        {item.title === 'Products' ? (
                          <>
                            {item.items.map((collection, index) => {
                              return (
                                <div key={index}>
                                  <Link
                                    to={collection.url.replace(
                                      `https://${STORE_DOMAIN}/collections/`,
                                      '/products/',
                                    )}
                                  >
                                    <li>
                                      <div>
                                        <span>{collection.title}</span>
                                      </div>
                                    </li>
                                  </Link>
                                </div>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            {item.items.map((collection, index) => {
                              return (
                                <div key={index}>
                                  <Link
                                    to={collection.url.replace(
                                      `https://${STORE_DOMAIN}/`,
                                      '/',
                                    )}
                                  >
                                    <li>
                                      <div>{collection.title}</div>
                                    </li>
                                  </Link>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link to={item.url.replace(`https://${STORE_DOMAIN}/`, '/')}>
                    <div
                      key={index}
                      className={
                        item.url === `https://${STORE_DOMAIN}${pathname}`
                          ? 'pl-0 border-b-2 border-b-primary text-sm items-center pr-3 '
                          : 'pl-0 border-b-2 border-b-white hover:transition hover:border-b-primary text-sm items-center pr-3 '
                      }
                    >
                      <div
                        className={
                          'normal-case m-1 py-2 font-light text-heading px-5 '
                        }
                      >
                        {item.title === 'Best Selling'
                          ? item.title + '  ' + '⭐'
                          : item.title}
                      </div>
                    </div>
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </>
    );
  });

export default NavbarDesktop();
