import React from 'react';
import Head from 'next/head';

const Users: React.FC = () => {
  return (
    <>
      <Head>
        <title>Users - ALX Project</title>
        <meta name="description" content="Users page for ALX Project" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Users</h1>
        <div className="text-center">
          <p className="text-gray-600">Users content will be displayed here.</p>
        </div>
      </div>
    </>
  );
};

export default Users;
