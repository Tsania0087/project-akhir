import React from 'react';

const ServiceGrid = () => {
    const services = [
        "Bebrersih Rumah Yang Tidak Layak Untuk Dihuni Makhluk Hidup",
        "Bebrersih Rumah Kosong Yang Ditinggali Hantu",
        "Cuci Baju Keliling Asal Kepala Tidak Ikut Pusing",
        "Bebrersih Rumah Kosong Tapi Alhamdulillah Hati Saya Ga Kosong",
        "Cuci Baju Tanpa Dilepas Bisa Dicuci Sampai Atas",
        "Bisa Cuci Bersih Perasaan Cemburu Istri Tanpa Ketauan Sama Suami",
        "Bisa Cuci Sepatu, Baju, Celana, Barang Rumah Tangga, Asal Bukan Istri Tetangga",
        "Bebas Pengiriman Dari Sabang Sampai Ke Pelaminan",
        "Cuci Laundry Bersih Sebersih Pikiran Saya"
    ];

    return (
        <div className="row g-3 service-list-grid">
            {services.map((service, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                    <div className="service-item">{service}</div>
                </div>
            ))}
        </div>
    );
};

export default ServiceGrid;