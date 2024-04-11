import Countdown from 'react-countdown';

const TwoDaysCountdown = () => {
    let targetDate = new Date('2024-04-18T08:00:00+07:00');

    return (
        <div className="w-full h-screen bg-[url('/images/wedding/wed-4.jpg')] lg:bg-orange-100 sm:bg-orange-200 md:bg-none bg-cover flex flex-col items-center justify-center relative">
            <div className="font-bold text-gray-500 font-raleway backdrop-blur-sm bg-white/30 lg:px-60 lg:py-40 md:py-20 md:px-40 py-10 px-10 rounded-xl shadow-2xl drop-shadow-xl flex flex-col items-center justify-center sm:mx-0 mx-8 absolute top-10 lg:top-auto sm:top-auto">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-4xl lg:text-4xl mb-2">Countdown</h1>
                    <div className="h-[2.5px] bg-gray-500 rounded-full"></div>
                </div>
                <Countdown
                    date={targetDate}
                    onComplete={() => {
                        console.log('Countdown selesai');
                    }}
                    renderer={({ days, hours, minutes, seconds, completed }) => {
                        if (completed) {
                            return <span className="">Acara sedang berlangsung</span>;
                        } else {
                            return (
                                <div className="font-reddit flex flex-wrap justify-center items-center lg:gap-10 sm:gap-10 gap-7">
                                    <div className="text-center">
                                        <span className="text-lg md:text-2xl font-bold">{days}</span><br />
                                        <span className="">Hari</span>
                                    </div>
                                    <div className="text-center">:</div>
                                    <div className="text-center">
                                        <span className="text-lg md:text-2xl font-bold">{hours}</span><br />
                                        <span className="">Jam</span>
                                    </div>
                                    <div className="text-center">:</div>
                                    <div className="text-center">
                                        <span className="text-lg md:text-2xl font-bold">{minutes}</span><br />
                                        <span className="">Menit</span>
                                    </div>
                                    <div className="text-center">:</div>
                                    <div className="text-center">
                                        <span className="text-lg md:text-2xl font-bold">{seconds}</span><br />
                                        <span className="">Detik</span>
                                    </div>
                                </div>
                            );
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default TwoDaysCountdown;
