import { useState, useEffect } from 'react';
import * as React from 'react';
import NewSettler from '../../components/NewSettler/NewSettler.jsx';
import { LightboxTest, GalleryTestRows, GallryTestMasonry } from '../../components/GalleryGrid/GalleryGrid.jsx';

export const GalleryPage = () => {
  return (
    <>
      {/* <NewSettler setIsOpen={setIsOpen} /> */}
      <div>
        testss
      </div>
      <LightboxTest />
      <div>
        <h1>Gallery Page Rows</h1>
        <GalleryTestRows />
      </div>
      <div>
        <h1>Gallery Page Mansory</h1>
        <GallryTestMasonry />
      </div>
x
      {/* <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
};
