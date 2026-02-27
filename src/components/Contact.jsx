import { useState } from 'react'

const CONTACT_INFO = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'surajkhaire0077@gmail.com', href: 'mailto:surajkhaire0077@gmail.com', color: 'from-blue-500 to-cyan-500' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91-7028748066', href: 'tel:+917028748066', color: 'from-emerald-500 to-teal-500' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'suraj-khaire-995100346', href: 'https://www.linkedin.com/in/suraj-khaire-995100346/', color: 'from-blue-600 to-blue-700' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'Suraj-Khaire-01', href: 'https://github.com/Suraj-Khaire-01', color: 'from-slate-600 to-slate-800' },
]

export default function Contact({ darkMode }) {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await new Promise(r => setTimeout(r, 1200))
        setLoading(false)
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
    }

    const inp = `w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${darkMode
            ? 'bg-white/5 border-white/10 text-slate-200 placeholder-slate-500'
            : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white'
        }`

    return (
        <section id="contact" className={`py-24 ${darkMode ? 'bg-[#0f0f1a]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-indigo-400 font-mono text-sm font-medium mb-2">Get In Touch</p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Contact <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-4"></div>
                    <p className={`max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Have a project idea, opportunity, or just want to say hi? My inbox is always open!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {CONTACT_INFO.map(c => (
                            <a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${darkMode ? 'bg-[#1a1a2e] border-white/10 hover:border-indigo-500/30' : 'bg-white border-slate-200 hover:border-indigo-300'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                    <i className={`${c.icon} text-white`}></i>
                                </div>
                                <div className="min-w-0">
                                    <p className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{c.label}</p>
                                    <p className={`font-semibold text-sm truncate ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{c.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className={`p-8 rounded-2xl border ${darkMode ? 'bg-[#1a1a2e] border-white/10' : 'bg-white border-slate-200'}`}>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Your Name</label>
                                <input type="text" name="name" required placeholder="John Doe" value={form.name} onChange={handleChange} className={inp} />
                            </div>
                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Your Email</label>
                                <input type="email" name="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} className={inp} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Subject</label>
                            <input type="text" name="subject" required placeholder="Regarding internship..." value={form.subject} onChange={handleChange} className={inp} />
                        </div>
                        <div className="mb-6">
                            <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Message</label>
                            <textarea name="message" required rows={5} placeholder="Write your message here..." value={form.message} onChange={handleChange} className={`${inp} resize-none`} />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25"
                        >
                            {loading ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
                        </button>
                        {status === 'success' && (
                            <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                                <i className="fas fa-check-circle"></i> Message sent! I'll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
