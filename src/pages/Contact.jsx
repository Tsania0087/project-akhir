import React from 'react';

const Contact = () => (
    <main>
        <section className="section contact-section">
            <div className="container">
                <h2 className="section-title">Hubungi Kami</h2>
                <p className="section-description">Jika Anda memiliki pertanyaan atau ingin menggunakan layanan kami, jangan ragu untuk menghubungi kami.</p>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form-container">
                            <div className="text-center mb-4">
                                <p><strong>Telepon:</strong> <a href="tel:085792227128">085792227128</a></p>
                                <p><strong>Email:</strong> <a href="mailto:freshclean@laundry.com">freshcleanlaundry@gmail.com</a></p>
                                <p><strong>Alamat:</strong> Jl. Cucibersih No. 1, Jakarta, Indonesia</p>
                            </div>
                            <p className="text-center">Atau isi formulir di bawah ini dan kami akan menghubungi Anda segera:</p>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-3"><label htmlFor="name" className="form-label">Nama:</label><input type="text" className="form-control" id="name" required /></div>
                                <div className="mb-3"><label htmlFor="email" className="form-label">Email:</label><input type="email" className="form-control" id="email" required /></div>
                                <div className="mb-3"><label htmlFor="message" className="form-label">Pesan:</label><textarea className="form-control" id="message" rows="5" required></textarea></div>
                                <div className="d-grid"><button type="submit" className="btn btn-warning btn-lg">Kirim Pesan</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default Contact;