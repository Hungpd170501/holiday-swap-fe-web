'use client';

import { Image } from 'antd';
import React from 'react';

interface ViewFullImageProps {
  listImage: any;
}
export default function ViewFullImage({ listImage }: ViewFullImageProps) {
  console.log('Check list iamge', listImage);
  return (
    <div className="grid grid-cols-2 gap-2 px-72">
      <Image.PreviewGroup>
        {listImage.map((item: any) => (
          <Image key={item.id} src={item.link} />
        ))}
      </Image.PreviewGroup>
    </div>
  );
}
