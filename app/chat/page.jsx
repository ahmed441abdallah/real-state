'use client';
import React, { useRef } from 'react';

const Page = () => {
    const countryRef = useRef(null);

    const getUpperCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCountry = getUpperCase(countryRef.current.value);
        // Redirect to your internal route that handles the URL
        window.location.href = `/https:/en.wikipedia.org/wiki/${newCountry}`;
    };

    return (
        <div className='p-16 sm:p-32 text-center'>
            <h2 className='text-2xl font-semibold'>Find With AI🤖</h2>
            <p className='text-gray-500 mt-2'>Try our new way to find home with artificial intelligence.</p>
            <section className='mt-8'>
                <form onSubmit={handleSubmit} className='flex items-center justify-center gap-4'>
                    <input
                        ref={countryRef}
                        className='px-8 py-2 rounded-sm bg-gray-200 focus:outline-none'
                        type='text'
                        required
                        placeholder='Enter country to more info.'
                    />
                    <button type='submit' className='bg-gray-600 text-white px-4 py-1 rounded-md'>Send</button>
                </form>
            </section>
        </div>
    );
};

export default Page;
