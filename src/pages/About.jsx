import React from 'react';
// Impor ServiceGrid dihapus karena tidak lagi digunakan di halaman ini

const About = () => (
    <main>
        {/* HANYA BAGIAN INI YANG KITA PERTAHANKAN */}
        <section className="section about-us-section">
            <div className="container">
                <h2 className="section-title">Tentang Kami</h2>
                <div className="about-content">
                    <h3>Kenapa Harus Menggunakan Jasa Kami?</h3>
                    <p>Di FreshClean Laundry, kami percaya bahwa pakaian bersih dan rapi adalah kunci untuk memulai hari dengan percaya diri. Kami lebih dari sekadar jasa laundry; kami adalah mitra Anda dalam menjaga kualitas dan keawetan setiap helai pakaian yang Anda miliki.</p>
                    <p>Kami memahami betapa berharganya waktu Anda. Oleh karena itu, setiap proses mulai dari pencucian, pengeringan, hingga penyetrikaan dilakukan dengan teliti dan efisien sesuai standar tinggi kami untuk memberikan hasil terbaik bagi Anda.</p>
                </div>
            </div>
        </section>

        {/* BAGIAN DI BAWAH INI SUDAH DIHAPUS
        <section className="section services-overview bg-dark text-white">
            ...
        </section>
        */}
    </main>
);

export default About;