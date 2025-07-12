import React from 'react';

const Gallery = () => (
     <main>
         <section className="section gallery-section">
             <div className="container">
                 <h2 className="section-title">Galeri Kami</h2>
                 <p className="section-description">Nantikan koleksi foto-foto fasilitas dan hasil kerja kami di sini!</p>
                 <div className="row g-4">
                     <div className="col-md-6 col-lg-4"><img src="/img/face1.jpg" alt="Galeri 1" className="gallery-item img-fluid" /></div>
                     <div className="col-md-6 col-lg-4"><img src="/img/room.jpg" alt="Galeri 2" className="gallery-item img-fluid" /></div>
                     <div className="col-md-6 col-lg-4"><img src="/img/face2.jpg" alt="Galeri 3" className="gallery-item img-fluid" /></div>
                 </div>
             </div>
         </section>
     </main>
);

export default Gallery;