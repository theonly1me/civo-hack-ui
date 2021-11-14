import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../Utils/Constants';

const Menu = () => {
  const [devices, setDevices] = useState([]);
  const [change, setChange] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(`${API_ENDPOINT}/api/devices`);
      setDevices(data);
    })();
  }, [change]);
  const toggleClass =
    'transform translate-x-5 transition ease-in-out duration-200';

  return (
    <>
      <div className="p-10 flex justify-center items-center bg-red-400">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl uppercase font-black text-white ">
          Dashboard
        </h1>
      </div>
      <div className="bg-white my-5 flex min-h-screen">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          id="device-name"
          name="Device Name"
          placeholder="Device Name"
          type="text"
          required
          className="w-1/4 border border-gray-300 mx-5 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-red-200 focus:ring-1 focus:ring-red-200"
        />
        <button
          disabled={name ? false : true}
          className={`py-3 px-7 text-white  my-2 justify-center items-center mx-5 rounded-full text-xl hover:bg-red-300 transition duration-300 ease-in-out flex items-center ${
            name ? 'bg-red-400' : 'bg-gray-300'
          }`}
          onClick={async () => {
            await axios.post(`${API_ENDPOINT}/api/devices`, {
              name,
              active: false,
            });
            setChange(change => !change);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Device
        </button>
      </div>
      <div className="bg-white h-screen flex flex-col my-5">
        {devices.map(device => (
          <div
            className="flex flex-row bg-white shadow-md m-4 p-4"
            key={device['device_id']}
          >
            <div className="mx-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div className="ml-2 flex-1">
              <h2 className="font-bold text-2xl text-red-400">
                {device['device_name']}
              </h2>
              <h3 className="font-bold text-xl">
                {device['device_active'] ? 'Turned On' : 'Turned Off'}
              </h3>
            </div>
            <div
              className="md:w-14 mx-5 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={async () => {
                await axios.patch(
                  `${API_ENDPOINT}/api/devices/${device['device_id']}`,
                  {
                    active: !device['device_active'],
                  }
                );
                setChange(change => !change);
              }}
            >
              <div
                className={`${
                  !device['device_active'] ? 'bg-white' : 'bg-red-400'
                } md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform ${
                  !device['device_active']
                    ? 'transform translate-x-0 transition ease-in-out duration-200'
                    : toggleClass
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
