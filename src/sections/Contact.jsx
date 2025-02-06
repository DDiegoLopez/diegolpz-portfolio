import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('access_key', '951e52ed-2d74-4a9b-9e45-02e62a383926'); // Reemplaza con tu clave de Web3Forms
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('message', form.message);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                toast.success('Message sent successfully!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setForm({ name: '', email: '', message: '' });
            } else {
                toast.error('Failed to send message. Please try again.', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred. Please try again.', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='c-space my-20' id='contact'>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
                <div className="contact-container">
                    <h3 className='head-text'>Contact Me</h3>
                    <p className='text-lg text-white-600'>If you have any questions or just want to say hello, feel free to reach out to me!</p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7' >
                        
                        <label className='space-y-3'>
                            <span className='field-label'>Name</span> 
                            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter your name' className='field-input' required />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Email</span> 
                            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter your email' className='field-input' required />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span> 
                            <textarea name="message" value={form.message} onChange={handleChange} placeholder='I’m here to talk to you about the Avenger Initiative' className='field-input' required rows={5} />
                        </label>

                        <button type='submit' className='field-btn' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                        <input type="hidden" name="access_key" value="951e52ed-2d74-4a9b-9e45-02e62a383926" className="hidden" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact;