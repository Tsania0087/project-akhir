import React from 'react';

const PricingTable = () => (
    <div className="pricing-table mt-5">
        <div className="table-responsive">
            <table className="table table-dark table-striped table-bordered">
                <thead className="table-warning">
                    <tr>
                        <th>Layanan</th>
                        <th>Lama Pengerjaan</th>
                        <th>Bidang</th>
                        <th>Tarif</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Laundry Cuci Gosok</td>
                        <td>5 Jam Kerja</td>
                        <td>Cuci&Gosok</td>
                        <td>Rp.15.000/Kg</td>
                    </tr>
                    <tr>
                        <td>Gosok Aja</td>
                        <td>3 Jam Kerja</td>
                        <td>Laundry Gosok</td>
                        <td>Rp.5.000/Kg</td>
                    </tr>
                    <tr>
                        <td>Cuci Peralatan Rumah</td>
                        <td>1-2 Hari Kerja</td>
                        <td>Laundry Peralatan</td>
                        <td>Rp.100.000</td>
                    </tr>
                    <tr>
                        <td>Beli Alat Laundry</td>
                        <td>1-3 Hari Pengiriman</td>
                        <td>Alat Laundry</td>
                        <td>Mulai Rp.900.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default PricingTable;