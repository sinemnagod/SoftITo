export default function UrunListesi() {

    return(
        <>
        <div className="app-card">
            <div className="app-card-header">
                <h2 className="app-card-title">Mağaza Kataloğu</h2>
            </div>
            <div className="app-card-body">
                <div className="etiket-izgara">
                    <div className="filtre-paneli">
                        <span className="filtre-baslik">Kategoriler</span>
                        <div className="kategori-secenekleri">
                            <button className="kategori-secenek-btn">Tümü</button>
                            <button className="kategori-secenek-btn">Elektronik</button>
                            <button className="kategori-secenek-btn">Giyim</button>
                            <button className="kategori-secenek-btn">Kitaplar</button>
                        </div>
                    </div>

                    <div className="urun-vitrini-alan">
                        <div className="filtre-bar">
                            <div></div>
                            <div className="detail-meta-val">
                                Bulunan: 1 Adet Ürün
                            </div>
                        </div>
                        <div className="vitrin-grid">
                            <div className="urun-kart">
                                <div className="urun-kart-ust">
                                    <span className="resim-ikoni"></span>
                                    <div className="urun-kart-etiket-grubu">
                                        <span className="urun-kargo-bedava-badge">Kargo Bedava</span>
                                    </div>
                                </div>
                                <div className="urun-kart-detay">
                                    <div>
                                        <span className="marka-etiketi">Lacoste</span>
                                        <h3 className="urun-baslik-etiketi">Gömlek</h3>
                                        <div className="puan-satiri">
                                            <span>* 4.5</span>
                                            <span className="yorum-adedi-etiket">(10 yorum)</span>
                                        </div>
                                        <div className="stok-uyari-seridi">
                                            <span>Son 5 Ürün!</span>
                                        </div>
                                    </div>
                                    <div className="urun-fiyat-grubu">
                                        <div>
                                            <span className="eski-fiyat-etiketi">100TL</span>
                                            <span className="yeni-fiyat-etiketi">99TL</span>
                                        </div>
                                        <button className="urun-sepet-ekle-butonu">Sepete Ekle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}