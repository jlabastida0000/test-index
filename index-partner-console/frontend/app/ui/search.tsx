'use client';
import React, { useState } from 'react';
import styles from './home.module.css';
import Image from 'next/image';
import { dmsans } from './fonts';


const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <div className={styles.search__bar}>

        <Image src="/magnifyingglass.svg"
              className={styles.search__bar__icon}
              width={16}
              height={16}
              alt="Search Icon"/>
        <input className={`${dmsans.className} ${styles.search__bar__input}`} type="search" value={search} placeholder="Search something..." onChange={(e) => setSearch(e.target.value)}/>
      </div>
    </>
  );
};

export default Search;
