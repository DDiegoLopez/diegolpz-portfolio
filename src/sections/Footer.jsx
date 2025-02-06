

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='flex gap-3'>
            <div className='social-icon'>
                <a href="https://github.com/DDiegoLopez" target="_blank" rel="noopener noreferrer" className='w-1/2 h-1/2'>
                <img src="/assets/github.svg" alt="github"  />
                </a>
            </div>    
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/diegolc20/" target="_blank" rel="noopener noreferrer" className='w-1/2 h-1/2'>
                <img src="/assets/linkedin.svg" alt="linkedin"  /> 
                </a>
            </div>    
        </div>
        <p className='text-white-500'>© 2025 Diego Lpz. All rights reserved.</p>
    </section>
  )
}

export default Footer