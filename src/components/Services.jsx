import React from 'react';

const Services = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Service 1</h3>
            <p className="text-gray-600">Description of service 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Service 2</h3>
            <p className="text-gray-600">Description of service 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Service 3</h3>
            <p className="text-gray-600">Description of service 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
