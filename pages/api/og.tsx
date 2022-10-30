import { ImageResponse } from '@vercel/og';
import Image from 'next/image';
import { NextRequest } from 'next/server';
import React from 'react';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const username = searchParams.get('username');
  if (!username) {
    return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: '#fff',
          background: '#373d98',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: `'Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'`,
          overflow: 'hidden'
        }}
      >
        <img
          alt='imagem de perfil do github'
          width="256"
          height="256"
          src={`https://github.com/${username}.png`}
          style={{
            borderRadius: 128,
            border: '0.5rem solid #f7dd43'
          }}
        />
        {/* <img
          alt='imagem de perfil do github'
          src={`https://raw.githubusercontent.com/gist/MadsonAlan/86de7c1fa6c4f69884af8f14cc29234b/raw/b7201448fcc401347111a713b96b3ae1ab8434e1/cardNLWCopa.svg`}
          style={{
            width: '100%',
            zIndex: '-99',
            marginTop: '105%',
          }}
        /> */}
        <p>Hi 👋, come see my site</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
