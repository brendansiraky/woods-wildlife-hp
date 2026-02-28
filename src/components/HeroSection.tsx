import { Phone } from 'lucide-react'
const HeroSection = () => {
    return (
        <section className='py-16 md:py-24 lg:py-32'>
            <div className='container'>
            <div className='max-w-3xl'>
                <p className='text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5'>
                    Licensed & Insured · Fast Local Response
                </p>

                <h1 className='text-[3.25rem] md:text-[4.75rem] lg:text-[6.375rem] font-extrabold leading-[0.9] mb-6'>
                    Snake Catcher
                    <br />
                    Sunshine Coast
                </h1>

                <p className='text-lg md:text-xl max-w-xl mb-8 leading-relaxed' style={{ color: 'hsl(160, 12%, 33%)' }}>
                    Fully licensed Sunshine Coast snake catcher based in Mudjimba. Fast 24/7 local response and safe snake removal.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 mb-5'>
                    <a
                        href='tel:0435529657'
                        className='inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity'
                    >
                        <Phone className='w-5 h-5' />
                        Call 0435 529 657
                    </a>
                    <a
                        href='/contact'
                        className='inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-foreground/5 transition-colors'
                    >
                        Request a Call Back
                    </a>
                </div>

                <p className='text-sm text-muted-foreground'>
                    Available 24/7  · Fast Response · Fully Licensed
                </p>
            </div>
            </div>
        </section>
    )
}

export default HeroSection
