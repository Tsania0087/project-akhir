import React from 'react';
import { Link } from 'react-router-dom';
import ServiceGrid from '../components/ServiceGrid';
import PricingTable from '../components/PricingTable';

const Home = () => (
    <main>
        <section className="hero-section">
            <div className="container text-center">
                <div className="hero-content">
                    <h1>
                        <span className="text-white">Laundry Hemat</span><br />
                        <span className="text-warning">SiCepat Kilat!</span>
                    </h1>
                    <p className="lead text-white-50">Keamanan dan kebersihan Barang dan Pakaian Anda Terjamin!</p>
                    <Link to="/contact" className="btn btn-warning btn-lg">Hubungi Kami!</Link>
                </div>
            </div>
        </section>

        <section className="section services-overview bg-dark text-white">
            <div className="container">
                <h2 className="section-title">Layanan Kami</h2>
                <ServiceGrid />
                <p className="call-to-action">Dapatkan Layanan-Layanan Yang Kami Sediakan, Hubungi Nomor Dibawah!</p>
                <a href="tel:085792227128" className="btn btn-phone btn-warning">085792227128</a>
                <PricingTable />
            </div>
        </section>

        <section className="section ecommerce-stats">
            <div className="container">
                <h2 className="section-title">Dipercaya oleh Bisnis eCommerce</h2>
                <p className="section-description">Kami ingin menegaskan bahwa bisnis kami telah terbukti terpercaya dan berpengalaman dalam memberikan layanan laundry berkualitas tinggi.</p>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3"><div className="stat-item"><span className="stat-number">15rb</span><span className="stat-label">Unit</span><p>Total Penjualan Alat Laundry</p></div></div>
                    <div className="col-md-6 col-lg-3"><div className="stat-item"><span className="stat-number">17</span><span className="stat-label">Cabang</span><p>Cabang Bisnis</p></div></div>
                    <div className="col-md-6 col-lg-3"><div className="stat-item"><span className="stat-number">650</span><span className="stat-label">Karyawan</span><p>Karyawan</p></div></div>
                    <div className="col-md-6 col-lg-3"><div className="stat-item"><span className="stat-number">735rb</span><span className="stat-label">Total Customer</span></div></div>
                </div>
            </div>
        </section>
    </main>
);

export default Home;