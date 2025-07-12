import React from 'react';
import ServiceGrid from '../components/ServiceGrid';
import PricingTable from '../components/PricingTable';

const Services = () => (
    <main>
        <section className="section services-page-section">
            <div className="container">
                <h2 className="section-title">Layanan Kami</h2>
                <ServiceGrid />
                <p className="call-to-action">Dapatkan Layanan-Layanan Yang Kami Sediakan, Hubungi Nomor Dibawah!</p>
                <a href="tel:085792227128" className="btn btn-phone btn-warning">085792227128</a>
                <PricingTable />
            </div>
        </section>
    </main>
);

export default Services;