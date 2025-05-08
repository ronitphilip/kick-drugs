import React from 'react';

const IDCardPreview = ({ fullName, district, panchayat, image }) => {
    return (
        <>
            <div className='bg-white p-8 rounded-lg shadow-md'>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='font-bold text-white inline px-4 py-2 rounded bg-green-600'>
                            ID TVM0000
                        </div>
                        <div className="font-bold text-5xl flex flex-col items-center justify-center h-full">
                            <span className="text-green-600">KICK</span>
                            <span className="text-blue-600">DRUGS</span>
                            <p className="text-xs mt-1">Kerala's Largest Anti Drug</p>
                            <p className="text-xs mt-1">Campaign</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center space-y-3'>
                        {
                            image ? (
                                <img src={image} className='h-30 w-30 rounded' />
                            ) : (
                                <div className='h-30 w-30 bg-gray-100 rounded flex items-center justify-center'>
                                    image
                                </div>
                            )
                        }
                        <h2 className="text-green-600 text-lg font-semibold">{ fullName ? fullName : 'Sreeram Vasudevan'}</h2>
                        <p className="text-sm"> {panchayat ? panchayat : 'Kanchiyar'} Panchayat</p>
                        <p className="text-sm"> {district ? district : 'Idukki'} District</p>
                    </div>
                </div>
                <div className='bg-green-600 rounded-b-lg p-4 mt-8 flex justify-between items-baseline'>
                    <p className='text-xs text-white'>Self Issued: 01-04-2025</p>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=KickDrugs" alt="QR Code" className="w-20 h-20" />
                </div>
            </div>
            <div className="bg-green-600 text-white font-semibold text-center py-3 px-4 rounded-lg mt-5">
                Live Preview
            </div>
        </>
    );
};

export default IDCardPreview;
