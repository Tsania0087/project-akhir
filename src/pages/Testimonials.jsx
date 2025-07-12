import React from 'react';

const Testimonials = () => (
    <main>
        <section className="section testimonials-section">
            <div className="container">
                <h2 className="section-title">Ulasan terpercaya dari pelanggan kami!</h2>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6"><div className="card testimonial-card h-100"><div className="card-body d-flex flex-column"><div className="stars">★★★★★</div><h3 className="card-title">Zanuar Zahri</h3><p className="card-text flex-grow-1">Saya merasa aman meninggalkan pakaian saya di sini...</p><p className="author text-end">- Zanuar Zahri</p></div></div></div>
                    <div className="col-lg-4 col-md-6"><div className="card testimonial-card h-100"><div className="card-body d-flex flex-column"><div className="stars">★★★★★</div><h3 className="card-title">Ahmad Dhaffa</h3><p className="card-text flex-grow-1">Saya sudah menggunakan layanan ini beberapa kali...</p><p className="author text-end">- Ahmad Dhaffa</p></div></div></div>
                    <div className="col-lg-4 col-md-6"><div className="card testimonial-card h-100"><div className="card-body d-flex flex-column"><div className="stars">★★★★★</div><h3 className="card-title">Surya Raditya</h3><p className="card-text flex-grow-1">Saya sangat senang mendengar pelanggan baru Diskon...</p><p className="author text-end">- Surya Radityatama</p></div></div></div>
                </div>
            </div>
        </section>
    </main>
);

export default Testimonials;