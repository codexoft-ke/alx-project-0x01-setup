import React from 'react';
import Head from 'next/head';

const Posts: React.FC = () => {
  return (
    <>
      <Head>
        <title>Posts - ALX Project</title>
        <meta name="description" content="Posts page for ALX Project" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
        <div className="text-center">
          <p className="text-gray-600">Posts content will be displayed here.</p>
        </div>
      </div>
    </>
  );
};

export default Posts;
